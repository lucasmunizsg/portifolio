import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

// Destaque visual de disponibilidade para contratação (CLT/PJ) e projetos freelance
const HiringBanner: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-400/20 bg-emerald-400/[0.04] px-8 py-8 md:px-12 md:py-10">
                <div className="flex flex-col gap-3 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        {/* Ponto pulsante indicando disponibilidade, no mesmo espírito do badge "Disponível" do Hero */}
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                        </span>
                        <span className="font-label uppercase tracking-[0.3em] text-[10px] text-emerald-300">
                            {t('hiring.badge')}
                        </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                        {t('hiring.title')}
                    </h3>
                    <p className="font-body text-sm text-zinc-400 max-w-xl">
                        {t('hiring.description')}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <span className="font-label text-[10px] uppercase tracking-widest text-emerald-200 border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-center">
                        {t('hiring.corporate')}
                    </span>
                    <span className="font-label text-[10px] uppercase tracking-widest text-emerald-200 border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-center">
                        {t('hiring.freelance')}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HiringBanner;
