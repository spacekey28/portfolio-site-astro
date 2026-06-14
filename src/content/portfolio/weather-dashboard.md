---
title: "AU/NZ Weather Dashboard"
summary: "Built a portfolio weather dashboard for Australia and New Zealand with shareable URL filters, KPI summaries, interactive charts, and 200+ tests."
date: 2026-06-12
client: "Personal project"
role: "Front-end Developer"
website: "https://au-nz-weather-dashboard.vercel.app"
cover: "/images/work/weather-dashboard.jpg"
gallery: []
tags: ["Next.js", "React", "TypeScript", "Recharts", "Tailwind CSS"]
seo:
  title: "Portfolio | AU/NZ Weather Dashboard"
  description: "Weather dashboard demo with URL-driven filters, KPI summaries, Recharts visualizations, and production-ready Next.js architecture."
---

I built the [AU/NZ Weather Dashboard](https://au-nz-weather-dashboard.vercel.app) as a portfolio piece focused on data UI done well—a dashboard that compares conditions across ten preset cities in Australia and New Zealand, with filters that persist in the URL so every view is bookmarkable and shareable.

The app pairs a Summary view (multi-city KPI cards and weather alerts) with a Charts view (temperature, rainfall, and wind visualizations powered by Recharts). Filters cover city selection, hourly/daily granularity, variable pickers, and date ranges. An Open-Meteo API proxy validates coordinates with Zod, caches responses with ISR, and retries gracefully on failure. I also shipped theme switching, skeleton loading states, accessible controls, 209 unit tests with strong coverage, Playwright e2e tests, and CI on every push. [Source on GitHub](https://github.com/sonpeterweb/demo-weather-dashboard-next-daisyui).
