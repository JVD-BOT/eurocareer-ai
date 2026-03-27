# EuroCareer AI

AI-powered European career platform built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, and Supabase.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Backend**: Supabase (@supabase/supabase-js)

## Project Structure

```
eurocareer-ai/
├── app/
│   ├── globals.css       # Tailwind base + CSS variables
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   └── ui/               # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── label.tsx
├── lib/
│   ├── supabase.ts       # Supabase client
│   └── utils.ts          # cn() helper
├── .env.local            # Environment variables (not committed)
├── components.json       # shadcn/ui config
├── tailwind.config.ts
└── tsconfig.json
```

## Adding More shadcn/ui Components

```bash
npx shadcn@latest add <component-name>
```
