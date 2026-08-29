// Vercel Serverless Function: recebe o e-mail informado no download do currículo
// e envia um aviso por e-mail via Resend (https://resend.com) para o dono do portfólio.
// Requer a variável de ambiente RESEND_API_KEY configurada no projeto na Vercel.

const NOTIFY_TO = 'lucas.journey.dev.br@gmail.com';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Escapa caracteres HTML do e-mail informado antes de inserir no corpo do e-mail,
// evitando injeção de HTML (defesa em profundidade, mesmo com a validação de formato acima)
function escapeHtml(value) {
    return value.replace(/[&<>"']/g, (char) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[char]));
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Método não permitido' });
    }

    const { email, language } = req.body || {};

    // Validação de entrada: e-mail obrigatório e em formato válido
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
        return res.status(400).json({ error: 'E-mail inválido' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error('RESEND_API_KEY não configurada nas variáveis de ambiente da Vercel');
        return res.status(500).json({ error: 'Serviço de notificação não configurado' });
    }

    const safeEmail = escapeHtml(email);
    const idiomaLabel = language === 'EN' ? 'inglês (EN-US)' : 'português (PT-BR)';

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'Portfólio Lucas Muniz <onboarding@resend.dev>',
                to: [NOTIFY_TO],
                subject: 'Novo lead no portfólio: e-mail informado para baixar o currículo',
                html: `<p>Um visitante do portfólio informou o e-mail <strong>${safeEmail}</strong> ao baixar o currículo em ${idiomaLabel}.</p>`
            })
        });

        if (!response.ok) {
            const errorBody = await response.text();
            console.error('Erro ao enviar e-mail via Resend:', errorBody);
            return res.status(502).json({ error: 'Falha ao enviar notificação' });
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Erro inesperado ao notificar lead:', error);
        return res.status(500).json({ error: 'Erro interno' });
    }
}
