# Task: Atualização de Contratos de Dados e Refatoração de UI

## Objetivo
Atualizar a tipagem de `Skill`, ajustar os dados mockados, e refatorar os componentes de Stacks e Projetos para uma experiência mais fluida e dinâmica, focando em tempo acumulativo de experiência e design responsivo premium.

## Mudanças Técnicas
- **Tipagem**: Substituir `since?: string` por `yearLearned: number` na interface `Skill`.
- **Mocks**: Atualizar `skillsData` em `mockData.ts` para refletir a nova propriedade.
- **Componente Skills**: 
    - Implementar cálculo de anos de experiência (Ano Atual - `yearLearned`).
    - Migrar de duas colunas para uma grade dinâmica (Bento-style ou Masonry-like).
- **Componente Projetos**:
    - Ajustar `embla-carousel` para rolagem mais suave.
    - Adicionar efeito de zoom discreto no hover dos cards.

## Cronograma de Implementação

### Fase 1: Base de Dados e Tipagem
- [x] Atualizar `src/types/index.ts`.
- [x] Atualizar `src/data/mockData.ts`.
- [x] Corrigir erros de tipagem em componentes que consomem `Skill`.

### Fase 2: Refatoração de Skills (Stacks)
- [x] Implementar utilitário de cálculo de tempo em `SkillsAndInterests.tsx`.
- [x] Refatorar layout para grade dinâmica com Tailwind.
- [x] Aplicar estilos de alto contraste e micro-interações.

### Fase 3: Refatoração de Projetos (Carrossel)
- [x] Ajustar configurações do Embla para fluidez.
- [x] Implementar `scale-105` ou similar para zoom suave no hover.
- [x] Validar responsividade em dispositivos móveis.

### Fase 4: Polimento e Verificação
- [x] Executar `checklist.py` para validar qualidade e performance.
- [x] Revisão final do design cinemático.


## Critérios de Sucesso
- [x] Zero erros de TypeScript.
- [x] Carrossel de projetos sem saltos visuais e com zoom fluido.
- [x] Seção de Stacks exibindo tempo de experiência corretamente.
- [x] Design 100% responsivo e cinemático.
- [x] Hierarquia visual invertida em Experiência e Educação.

