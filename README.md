# Reza Aditya Prabowo — Personal Portfolio

Personal portfolio website showcasing software engineering projects, technical certifications, education, and experience.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript 5
- **Testing:** Vitest + React Testing Library + jsdom
- **Fonts:** Geist Sans & Geist Mono (`next/font`)

## Features

- Dynamic pagination with staged enter/exit animations (Projects & Certifications)
- Throttled scroll progress indicator via `requestAnimationFrame`
- Lazy-loaded below-fold sections via `next/dynamic`
- Custom `useIntersectionObserver` hook for scroll-triggered reveals
- Reduced motion support (`prefers-reduced-motion`)
- Fully responsive layout (mobile hamburger nav, responsive grids)

## Project Structure

```text
porto/
├── app/
│   ├── layout.tsx         # Root layout, metadata, font setup
│   ├── page.tsx           # Single-page entry, section composition
│   └── globals.css        # Theme tokens, custom utilities, animation keyframes
├── src/
│   ├── shared/
│   │   ├── components/    # Navbar, Footer, LoadingScreen, ScrollProgress
│   │   ├── hooks/         # useIntersectionObserver
│   │   └── types/         # Shared animation & UI types
│   └── features/
│       ├── hero/          # Hero landing section
│       ├── about/         # Profile summary and skills grid
│       ├── education/     # Academic timeline
│       ├── certifications/# Paginated certification cards
│       ├── experience/    # Career timeline
│       ├── projects/      # Paginated project showcase
│       └── contact/       # Contact links and details
└── public/
    └── images/            # Static assets
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in the browser.

### Scripts

- `npm run dev` — Start development server
- `npm run build` — Create optimized production build
- `npm run start` — Run production server
- `npm run lint` — Run ESLint checks
- `npm test` — Run unit and smoke tests via Vitest
