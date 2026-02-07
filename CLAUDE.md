# Island Monkey Cafe - Claude Code Guide

## Tech Stack
- **Framework**: Next.js 16 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (utility-first, no component library)
- **Fonts**: Montserrat (body) + Pacifico (headings) via next/font

## Project Structure
- `src/app/page.tsx` — Single-page site with all sections (Nav, Hero, Our Story, Gallery, Menu, Book Us, Footer)
- `src/app/globals.css` — Global styles, CSS variables, animations
- `src/app/layout.tsx` — Root layout with font loading
- `public/assets/` — Images, icons, and SVGs

## Development
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint

## Conventions
- All components are defined in `page.tsx` (no separate component files)
- Images use `ProtectedImage` wrapper to prevent download/drag
- Colors are defined as CSS variables in `globals.css` and used inline via Tailwind arbitrary values
- Responsive design uses `md:` (768px) and `lg:` (1024px) breakpoints
- Max content width: 1312px (max-w-[1312px])
