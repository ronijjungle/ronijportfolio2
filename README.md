# Ronij Barahi — Portfolio Website

A premium, minimal portfolio built with [Astro](https://astro.build) and powered by Astro Content Collections (the built-in CMS).

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
# → http://localhost:4321
```

---

## Understanding the Architecture (Brand Guideline Analogy)

Think of this website like a **brand guidelines document**. Every brand has rules about how it looks, what it says, and how content is structured. This codebase works the same way:

| Brand Concept | Code Equivalent | Location |
|---|---|---|
| **Reusable Brand Blocks** | Components | `src/components/` |
| **Brand Rules** | Styles | `src/styles/global.css` |
| **Content Blueprint** | CMS Schema | `src/content/config.ts` |
| **Presentation System** | Layout | `src/layouts/Base.astro` |
| **Visual Identity** | Typography & Colors | `tailwind.config.mjs` |
| **Brand Pages** | Pages | `src/pages/` |
| **Editable Content** | CMS Content | `src/content/` + `src/data/` |

---

## Project Structure

```
portfolio/
├── astro.config.mjs          # Master control panel
├── tailwind.config.mjs        # Visual identity (colors, fonts, spacing)
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript paths and settings
│
├── public/                    # Static files (served as-is)
│   └── favicon.svg
│
└── src/
    ├── content/               # ✏️  CMS CONTENT — edit these to update the site
    │   ├── config.ts          #    Content blueprint (schemas)
    │   ├── projects/          #    Portfolio projects (one .md per project)
    │   ├── services/          #    Service offerings (one .md per service)
    │   ├── testimonials/      #    Client testimonials (one .md per quote)
    │   └── about/             #    About page content
    │
    ├── data/                  # ✏️  STATIC DATA
    │   └── contact.json       #    Contact details & social links
    │
    ├── components/            # Reusable brand blocks
    │   ├── Header.astro       #    Site navigation
    │   ├── Footer.astro       #    Site footer
    │   ├── SectionHeading.astro  # Consistent heading pattern
    │   ├── ProjectCard.astro  #    Portfolio project card
    │   ├── ServiceCard.astro  #    Service listing card
    │   ├── TestimonialCard.astro # Client quote card
    │   └── ContactForm.astro  #    Contact form
    │
    ├── layouts/               # Presentation system
    │   └── Base.astro         #    Master page template
    │
    ├── pages/                 # One file = one URL route
    │   ├── index.astro        #    / (home page)
    │   ├── about.astro        #    /about
    │   ├── portfolio.astro    #    /portfolio
    │   ├── portfolio/[slug].astro  # /portfolio/project-name
    │   ├── services.astro     #    /services
    │   ├── testimonials.astro #    /testimonials
    │   └── contact.astro      #    /contact
    │
    └── styles/
        └── global.css         # Brand rules (base styles, utilities)
```

---

## How the CMS Works

### What is a "Content Collection"?

Astro Content Collections is a **file-based CMS** built into Astro. Instead of a database or a web dashboard, your content lives in **Markdown files** inside the `src/content/` folder.

Each collection has a **schema** (defined in `config.ts`) that acts as a content blueprint — it enforces what fields every piece of content must have. If you forget a required field or use the wrong type, Astro tells you immediately.

### How to Update Content

#### Add a New Project

1. Create a new `.md` file in `src/content/projects/`:

```markdown
---
title: "My New Project"
description: "A short description of what this project is."
category: "Brand Identity"
year: "2025"
client: "Client Name"
thumbnail: "/images/projects/my-project.jpg"
tags: ["branding", "design"]
featured: true
order: 4
---

## The Challenge
Write about the problem you solved...

## The Approach
Write about how you approached it...

## The Result
Write about the outcome...
```

2. Save the file. The project automatically appears on the Portfolio page.

#### Add a New Service

Create a new `.md` file in `src/content/services/`:

```markdown
---
title: "Service Name"
description: "One-line description of the service."
icon: "icon-name"
order: 5
---

Detailed description of the service...
```

#### Add a New Testimonial

Create a new `.md` file in `src/content/testimonials/`:

```markdown
---
name: "Client Name"
role: "Their Job Title"
company: "Their Company"
quote: "What they said about working with you."
order: 4
---
```

#### Update About Content

Edit `src/content/about/main.md`. Change the frontmatter fields (headline, stats, etc.) and the body text below the `---` dividers.

#### Update Contact Details

Edit `src/data/contact.json`:

```json
{
  "email": "your@email.com",
  "phone": "+1 (555) 000-0000",
  "location": "Your City",
  "availability": "Your availability status",
  "social": {
    "linkedin": "https://linkedin.com/in/you",
    "instagram": "https://instagram.com/you"
  }
}
```

---

## Content Blueprint (Schema Reference)

### Projects Schema

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Project name |
| `description` | string | Yes | Short project summary |
| `category` | string | Yes | e.g., "Brand Identity", "Digital Design" |
| `year` | string | Yes | Year completed |
| `client` | string | Yes | Client name |
| `thumbnail` | string | Yes | Path to thumbnail image |
| `tags` | string[] | No | Skill/discipline tags |
| `featured` | boolean | No | Show on home page? (default: false) |
| `order` | number | No | Sort order (default: 0) |

### Services Schema

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Service name |
| `description` | string | Yes | One-line description |
| `icon` | string | Yes | Icon identifier |
| `order` | number | No | Sort order |

### Testimonials Schema

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Client name |
| `role` | string | Yes | Client job title |
| `company` | string | Yes | Client company |
| `quote` | string | Yes | The testimonial text |
| `order` | number | No | Sort order |

### About Schema

| Field | Type | Required | Description |
|---|---|---|---|
| `headline` | string | Yes | Main heading |
| `subheadline` | string | Yes | Subtitle |
| `portrait` | string | Yes | Path to portrait image |
| `resumeLink` | string | No | Path to resume PDF |
| `stats` | array | No | Array of `{ label, value }` objects |

---

## Adding Images

1. Place images in the `public/images/` folder
2. Reference them in content with paths like `/images/projects/my-image.jpg`
3. For the portrait, use `/images/portrait.jpg`

Example folder structure:
```
public/
└── images/
    ├── portrait.jpg
    └── projects/
        ├── luxe-botanicals.jpg
        ├── nova-architecture.jpg
        └── arc-festival.jpg
```

---

## Connecting the Contact Form

The contact form uses [Formspree](https://formspree.io) by default:

1. Go to formspree.io and create a free account
2. Create a new form and copy the form ID
3. Open `src/components/ContactForm.astro`
4. Replace `your-form-id` in the action URL:
   ```html
   <form action="https://formspree.io/f/YOUR_ACTUAL_ID" method="POST">
   ```

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --build
```

### Manual Build

```bash
npm run build    # Output in dist/
npm run preview  # Preview the build locally
```

---

## Branding Suggestions for Ronij Barahi

### Color Palette

| Color | Hex | Usage |
|---|---|---|
| Almost Black | `#0a0a0a` | Primary text, backgrounds |
| Warm White | `#fafaf9` | Page background |
| Cream | `#f5f0eb` | Section backgrounds |
| Gold Accent | `#c8a97e` | Highlights, emphasis |
| Grays | `#e8e4df` → `#2d2a27` | Supporting text, borders |

### Typography

- **Headings**: Playfair Display (serif) — editorial, sophisticated
- **Body**: Inter (sans-serif) — clean, highly legible

### Design Principles

1. **Generous whitespace** — let the work breathe
2. **Restrained palette** — fewer colors = more premium
3. **Typography-led** — type does the heavy lifting, not decoration
4. **Subtle animation** — fade-ups and transitions, never flashy
5. **Content-first** — every element serves the content

---

## Commands Reference

| Command | What it does |
|---|---|
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build for production (output: `dist/`) |
| `npm run preview` | Preview production build locally |

---

## Why Astro Content Collections?

We chose Astro's built-in Content Collections as the CMS because:

1. **No external service** — no Contentful, Sanity, or Strapi account needed
2. **No cost** — no monthly subscription fees
3. **Type-safe** — the schema catches content errors before they reach production
4. **Version controlled** — content lives in your Git repo alongside code
5. **Fast** — no API calls at build time; content is read directly from files
6. **Simple** — edit Markdown files, save, done

For a single-editor portfolio, this is the ideal setup. If you later need a visual editor or multiple contributors, you can add [Decap CMS](https://decapcms.org) (free, open-source) on top without changing any content files.
