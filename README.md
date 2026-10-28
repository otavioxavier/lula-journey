# Trajetória de Lula

Aplicação React (React Router Framework Mode) para o trabalho acadêmico de Engenharia de Software — linha do tempo informativa sobre Luiz Inácio Lula da Silva, com seis componentes implementados no projeto e navegação entre páginas (desafio extra).

## Como rodar (GitHub Codespaces ou local)

```bash
npm install
npm run dev
```

Abra a URL exibida no terminal (em geral `http://localhost:5173`).

## Build e checagem

```bash
npm run typecheck
npm run build
npm start
```

## Mapa do site

| Rota | Conteúdo | Componentes em destaque |
|------|----------|-------------------------|
| `/` | Hero, marcos e faixa de fotos | Magic UI (BlurFade, BorderBeam, NumberTicker), React Bits (BlurText) |
| `/trajetoria` | Fases da vida pública | **Acordeão** |
| `/fatos` | Cards históricos | **Menu suspenso**, **Paginação**, **Toast**, SpotlightCard |
| `/perfil` | Biografia e temas | **Abas** |
| `/quiz` | 10 perguntas | **Barra de progresso**, **Toast**, CountUp |

## Componentes avaliados (`app/components/ui/`)

- `Accordion`, `Pagination`, `ProgressBar`, `Tabs`, `DropdownMenu`, `Toast`
- Estado global: `ToastProvider` em `app/components/toast-context.tsx` (Context API)

## Imagens

Dez fotos em `public/images/`, baixadas do Wikimedia Commons. Créditos completos no rodapé do site e em `app/data/image-credits.ts`.

## Stack

- React 19, React Router 8, TypeScript, Tailwind CSS 4
- `motion` (efeitos Magic UI / React Bits adaptados manualmente)
