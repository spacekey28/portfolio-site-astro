---
title: 'Listenote'
summary: 'Built a portfolio demo SaaS that turns meeting transcripts into summaries and action items, with a Sanity CMS marketing site and a live AI workflow.'
date: 2026-06-01
client: 'Personal project'
role: 'Front-end Developer'
website: 'https://listenote.vercel.app'
cover: '/images/work/listenote-home.jpg'
gallery: []
tags: ['Next.js', 'React', 'TypeScript', 'Sanity', 'OpenAI', 'Tailwind CSS']
seo:
  title: 'Portfolio | Listenote'
  description: 'AI meeting notes demo with a CMS-driven marketing site, interactive transcript workflow, and production-ready Next.js architecture.'
---

I built [Listenote](https://listenote.vercel.app) as a portfolio piece that goes beyond a static landing page. It's a full product demo: a Sanity-powered marketing site editors can restructure in Studio, plus a working AI feature that turns messy meeting transcripts into concise summaries, key decisions, and action items.

The homepage, pricing tiers, and CTAs are composed from typed Sanity blocks with visual editing—no redeploy needed when content changes. On `/ai-demo`, users paste a transcript or load a sample; a Next.js server action calls OpenAI and returns structured output with clear loading and error states. I also shipped a CMS-driven changelog, accessible shadcn/ui components, SEO metadata, and Vitest coverage for the AI layer and core UI. [Source on GitHub](https://github.com/sonpeterweb/demo-ai-meeting-note-next-sanity).
