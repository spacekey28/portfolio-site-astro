---
title: 'How I Built an AI Meeting Notes SaaS'
description: 'Next.js • TypeScript • Sanity'
pubDate: 2026-06-15
updatedDate: 2026-06-15
cover: '/images/blog/listenote-blog.jpg'
tags: ['nextjs', 'typescript', 'sanity', 'ai', 'saas']
category: 'app'
draft: false
authors: ['peter-son']
seo:
  title: 'How I Built an AI Meeting Notes SaaS with Next.js, TypeScript, and Sanity'
  description: 'A short case study on building Listenote, an AI-powered meeting notes SaaS using Next.js, TypeScript, Tailwind CSS, Sanity CMS, and Vercel.'
---

Like many developers, I wanted to build something beyond a landing page or a dashboard clone.

I wanted to create a product that solved a real problem.

That led me to build **Listenote**, an AI-powered meeting notes application that turns transcripts into summaries, action items, and structured notes.

## Why I Built It

I often found myself taking notes during meetings and then spending more time organizing them afterward.

With AI becoming more accessible, I wanted to explore how modern tools could help automate that workflow.

The goal wasn't to build the next billion-dollar startup.

It was to learn how to build a complete SaaS product from idea to deployment.

## The Stack

I chose technologies that I already use professionally:

- Next.js
- TypeScript
- Tailwind CSS
- Sanity CMS
- Vercel

Next.js gave me a solid full-stack foundation, while TypeScript helped keep the codebase maintainable as the project grew.

Sanity became the content layer for managing pricing plans, changelog entries, testimonials, and blog content without touching code.

## What I Focused On

Instead of trying to build every AI feature imaginable, I focused on a few core experiences:

- Clean transcript display
- AI-generated summaries
- Action item extraction
- Responsive dashboard UI
- Content management through Sanity

One lesson I learned quickly was that users care less about AI itself and more about whether the output is useful and easy to consume.

A great summary presented clearly is often more valuable than a complex AI workflow.

## Challenges Along The Way

The hardest part wasn't writing React components.

It was thinking like a product builder.

Questions like:

- What should happen when there is no data?
- How should loading states feel?
- How can pricing content be updated without deployments?
- What information is actually important to users?

Those decisions ended up taking more time than writing code.

## What I Learned

Building Listenote reminded me that modern web development is no longer just about shipping pages.

It's about combining:

- Product thinking
- User experience
- Content management
- AI capabilities
- Maintainable architecture

The technical stack matters, but understanding the user problem matters even more.

## Final Thoughts

Listenote started as a portfolio project, but it became a great learning experience in building a complete SaaS application.

If I continue developing it, I'd like to explore:

- Real transcription workflows
- Team collaboration features
- Searchable meeting history
- AI-powered insights across meetings

You can explore the project below:

- Live Demo: [https://listenote.vercel.app](https://listenote.vercel.app)
- GitHub: [https://github.com/sonpeterweb/demo-ai-meeting-note-next-sanity](https://github.com/sonpeterweb/demo-ai-meeting-note-next-sanity)
