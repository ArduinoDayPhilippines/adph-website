# Arduino Day Philippines Website

The official Arduino Day Philippines website. The current experience is a
single-page event site with an interactive hardware-focused hero, launchpad
content, partner information, FAQs, and responsive navigation.

## Tech Stack

- Next.js 16 with the App Router and Turbopack
- React 19 and TypeScript
- Tailwind CSS v4 through `@tailwindcss/postcss`
- Three.js for the interactive hardware canvas
- pnpm 10 for dependency management

## Getting Started

### Prerequisites

- Node.js LTS
- Git
- pnpm 10 or later

Clone the repository and install dependencies:

```bash
git clone https://github.com/ArduinoDayPhilippines/adph-website.git
cd adph-website
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Available Commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server with Turbopack |
| `pnpm lint` | Run ESLint across the project |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build locally |

## Project Structure

```text
adph-website/
├── public/                 # Images, fonts, models, and textures
├── src/
│   ├── app/                # App Router entrypoint and global styles
│   ├── components/features # Page sections and interactive experiences
│   ├── components/ui       # Shared UI primitives
│   ├── data/               # FAQs and partner data
│   └── lib/                # Shared hooks and utilities
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
└── tsconfig.json
```

## Contributing

The `main` branch is protected. Submit changes through a pull request from a
feature, fix, or documentation branch.

1. Create a branch, for example `feat/update-hero` or `docs/update-readme`.
2. Make the change and run `pnpm lint` and `pnpm build`.
3. Commit using [Conventional Commits](https://www.conventionalcommits.org/),
   such as `feat(hero): update event introduction`.
4. Push the branch and open a pull request against `main`.

Pull requests should explain the change, include relevant screenshots for UI
work, and reference the related issue when applicable.

✅ Checklist (from issue)
- [ ] Code follows project conventions
- [ ] Linted & formatted
- [ ] Tested locally
```
