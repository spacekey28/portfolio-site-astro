---
title: 'Flowspace'
summary: 'Built a CMS-driven collaboration platform demo with marketing pages, blog, docs hub, draft preview, and a GitHub-protected admin panel.'
date: 2026-06-10
client: 'Personal project'
role: 'Front-end Developer'
website: 'https://flowspacestudio.vercel.app'
cover: '/images/work/flowspacestudio-home.jpg'
gallery: []
tags: ['Next.js', 'React', 'TypeScript', 'Sanity', 'Tailwind CSS']
seo:
  title: 'Portfolio | Flowspace'
  description: 'Collaboration platform demo with Sanity CMS, draft preview, ISR caching, admin CRUD, and type-safe content pipelines.'
---

I built [Flowspace](https://flowspacestudio.vercel.app) as a portfolio demo for teams that need more than a brochure site—a marketing platform where editors publish pages, blog posts, and docs without touching code. Sanity powers the content layer, with GROQ queries and Zod validation catching bad data before it reaches the UI.

The site includes a blog with search and tags, a documentation hub with sidebar navigation, and case study routes—all driven from the CMS. Draft preview lets editors review content before publish, and ISR with tagged cache revalidation keeps pages fast and fresh when Sanity content changes. I also shipped a GitHub OAuth admin panel for managing posts, testimonials, and pricing, plus Jest unit tests, Playwright e2e coverage, and CI that runs lint, typecheck, build, and tests on every push. [Source on GitHub](https://github.com/sonpeterweb/demo-project-collaboration-next-sanity).
