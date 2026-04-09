// ─────────────────────────────────────────────────────────
// Content Configuration — "Content Blueprint"
//
// This is the CMS schema — the blueprint that defines the
// exact shape of every piece of content on the site.
//
// Think of it like a brand's content style guide:
//   "Every project MUST have a title, description, image,
//    category, and year. Tags are optional."
//
// If you try to add content that doesn't match the blueprint,
// Astro will catch the mistake at build time — before it
// ever reaches production.
// ─────────────────────────────────────────────────────────

import { defineCollection, z } from "astro:content";

// ── Projects Collection ──
// Each file in src/content/projects/ represents one portfolio piece.
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    year: z.string(),
    client: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()).default([]),
    gallery: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

// ── Services Collection ──
// Each file in src/content/services/ describes one service offering.
const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number().default(0),
  }),
});

// ── Testimonials Collection ──
// Each file in src/content/testimonials/ is one client testimonial.
const testimonials = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string(),
    quote: z.string(),
    order: z.number().default(0),
  }),
});

// ── About Collection ──
// A single file (main.md) holds the about page content.
// Using a collection lets you edit it like any other CMS content.
const about = defineCollection({
  type: "content",
  schema: z.object({
    headline: z.string(),
    subheadline: z.string(),
    portrait: z.string(),
    resumeLink: z.string().optional(),
    stats: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        }),
      )
      .default([]),
  }),
});

// Register all collections so Astro knows about them
export const collections = { projects, services, testimonials, about };
