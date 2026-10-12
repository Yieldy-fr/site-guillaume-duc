# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page marketing site for "Cabinet Guillaume DUC" (French wealth-management advisor), built on the Creative Tim "NextJS Tailwind Portfolio Page" template. All user-facing copy is in French (`<html lang="fr">`); keep new content in French.

## Commands

```bash
npm install      # .npmrc sets legacy-peer-deps=true — needed for @material-tailwind/react with React 18
npm run dev      # local dev server
npm run build    # production build (also the type-check step; there is no separate tsc script)
npm run lint     # next lint (extends next/core-web-vitals)
```

There is no test suite.

## Architecture

- **Next.js 13.4 App Router**, TypeScript, Tailwind 3 wrapped with `withMT` (Material Tailwind) in `tailwind.config.ts`. Path alias `@/*` → `src/*`.
- `src/app/page.tsx` composes the whole site from section components that live directly in `src/app/` (`hero`, `resume`, `skills`, `projects`, `clients`, `contact-form`). Section file names are template leftovers and don't match their content (e.g. `projects.tsx` = "Valeurs du cabinet", `resume.tsx` = "Biographie"). `testimonial.tsx` and `popular-clients.tsx` exist but are not rendered.
- Navigation is anchor-based: sections set `id` (`accueil`, `biographie`, `expertise`, `valeurs`, `partenaires`, `coordonnees`) and `src/components/navbar.tsx` / in-page links use `href="#..."`. Keep ids and links in sync when renaming sections.
- Section content is hard-coded as const arrays at the top of each section file (e.g. `PROJECTS` in `projects.tsx`) and rendered through reusable cards in `src/components/` (`ProjectCard`, `SkillCard`, `ResumeItem`). All shared components are re-exported from `src/components/index.ts` — import via `@/components`.
- Material Tailwind components are client-only: files using them need `"use client"`. The installed version's typings require the noisy `placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}` props on `Typography`, `Button`, etc. — copy that pattern to avoid type errors at build time.
- `src/app/layout.tsx` wraps everything in `Layout` (Material Tailwind `ThemeProvider`), loads the Source Serif 4 Google font and Nepcha analytics, and mounts `ChatbotScript`.
- `ChatbotScript` (`src/components/chatbot-script.tsx`) injects the external Yieldy chatbot from a CloudFront URL, sets `window.ChatbotConfig`, and calls `window.Chatbot.mountChatbot()`; it guards against double-injection via the `chatbot-script` element id.
- Contact form (`src/app/contact-form.tsx`) POSTs JSON to `src/app/api/contact/route.ts`, which currently only `console.log`s the payload (TODO: real persistence/email).
- Images are served from `public/image` and `public/logos`; `next.config.js` allows remote images from any https host.

## Deployment caveat

`.github/workflows/nextjs.yml` is the template's GitHub Pages workflow: it runs only on the `live-demo` branch and uploads `./out`, which requires `output: "export"` — not set in `next.config.js`, and incompatible with the `/api/contact` route handler. Don't assume this workflow deploys `main`.
