# PS Exports — Corporate Textile Export Website

A bespoke, responsive corporate website built for **PS Exports**, an established textile woven-fabric manufacturer and exporter located in **Pallipalayam, Erode, Tamil Nadu, India**.

Designed with an international, minimal, and editorial aesthetic focused on generating direct B2B inquiries from overseas fabric importers, wholesalers, converters, and industrial buyers.

---

## Quick Start Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18, 20, or higher recommended)
- `npm` (version 9 or higher, comes bundled with Node.js)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser. Changes in the source code will update instantly via Hot Module Replacement (HMR).

### 3. Generate Production Build
```bash
npm run build
```
This compiles TypeScript (`tsc -b`) and generates optimized production assets in the `dist/` folder.

### 4. Preview the Production Build Locally
```bash
npm run preview
```
Runs a local web server serving the compiled `dist/` directory (typically at `http://localhost:4173`).

### 5. Run Code Quality Linter
```bash
npm run lint
```

---

## Project Structure

```
Textile_Exporter/
├── public/
│   ├── favicon.svg             # Custom PS Exports woven-thread monogram favicon
│   ├── robots.txt              # Search engine crawler instructions
│   ├── sitemap.xml             # Search engine XML sitemap
│   └── images/
│       ├── hero_textile_rolls.jpg           # Authentic editorial photo of continuous fabric rolls
│       └── manufacturing_weaving_loom.jpg   # Real production photo of loom reed & warp threads
├── src/
│   ├── config/
│   │   └── company.ts          # Centralized company profile, business hours, and contact placeholders
│   ├── data/
│   │   ├── products.ts         # Woven fabrics catalogue data, specifications, and categories
│   │   ├── manufacturing.ts    # Loom technical details (Air-jet & Water-jet) and quality steps
│   │   └── about.ts            # Heritage milestones and regional ecosystem data
│   ├── types/
│   │   └── index.ts            # Core TypeScript interfaces (ProductItem, QuoteFormData, etc.)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky navigation, typographic wordmark, quote CTA, mobile drawer
│   │   │   ├── Footer.tsx      # Footer with coordinates, sitemap, and dynamic copyright year
│   │   │   └── Layout.tsx      # Global layout wrapper with automatic scroll restoration
│   │   ├── ui/
│   │   │   ├── Button.tsx      # High-contrast editorial buttons (Primary, Secondary, Outline, Terracotta)
│   │   │   ├── Badge.tsx       # Uppercase eyebrow tags
│   │   │   ├── Modal.tsx       # Accessible dialog component
│   │   │   ├── SeoMeta.tsx     # Dynamic page titles, meta descriptions, OpenGraph, JSON-LD schema
│   │   │   ├── WovenPattern.tsx # Fine SVG/CSS textile weave pattern generator
│   │   │   └── LoomIllustration.tsx # Interactive technical diagram of Air-Jet & Water-Jet looms
│   │   ├── home/
│   │   │   ├── HeroSection.tsx            # Hero with dual CTAs and roll visual
│   │   │   ├── ExperienceSection.tsx      # 50+ years heritage narrative
│   │   │   ├── ProductsPreviewSection.tsx # Catalogue snapshot with quick specs modal
│   │   │   ├── ManufacturingSection.tsx   # Loom technology selector and schematic
│   │   │   ├── WhyGiriSection.tsx         # 5 verifiable strengths editorial layout
│   │   │   └── EnquiryCtaSection.tsx      # High-contrast forest green conversion banner
│   │   ├── products/
│   │   │   ├── ProductCard.tsx            # Product card with tech specs & dual actions
│   │   │   └── ProductDetailModal.tsx     # Complete technical specification modal
│   │   └── contact/
│   │       └── QuoteForm.tsx   # Comprehensive B2B enquiry form with instant summary download
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ProductsPage.tsx
│   │   ├── ManufacturingPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── ContactPage.tsx
│   ├── App.tsx                 # Client-side router configuration
│   ├── main.tsx                # React application entry point
│   └── index.css               # Tailwind CSS v4 design tokens and self-hosted fonts
├── .env.example                # Safe environment variable configuration template
├── .gitignore                  # Git exclusion rules (node_modules, dist, .env secrets)
├── index.html                  # HTML5 shell with meta tags and self-hosted font links
├── package.json                # Project dependencies and executable scripts
├── package-lock.json           # Deterministic dependency lockfile
├── tsconfig.json               # TypeScript project configuration
├── tsconfig.app.json           # Client app TypeScript rules
├── tsconfig.node.json          # Node/tooling TypeScript rules
└── vite.config.ts              # Vite 8 + React + Tailwind v4 configuration
```

---

## Visual Design System & Tokens

- **Brand Palette**:
  - `Forest Green` (`#183C35`): Navigation bar, primary dark sections, strong calls to action.
  - `Warm Ivory` (`#F5F0E6`): Primary page background and crisp card surfaces.
  - `Terracotta` (`#B86F52`): Interactive accents, small highlights, and selected action buttons.
  - `Linen Beige` (`#D9CBAF`): Secondary panels, subtle backgrounds, and decorative dividers.
  - `Charcoal` (`#292D2A`): High-legibility body text and technical specifications.
- **Typography**:
  - `Fraunces`: Editorial serif for headings (100% self-hosted, no external Google Fonts tracking).
  - `DM Sans`: Clean, modern sans-serif for body copy and technical specs (100% self-hosted).

---

## Security & Secrets Policy

This repository is safe to share with clients, external partners, and version control repositories:
- **No private keys or passwords** are stored in the codebase.
- `.gitignore` automatically blocks `.env`, `.env.local`, and sensitive credential files.
- Configuration placeholders for contact numbers and email addresses are centralized in `src/config/company.ts`.

---

## Contact Form Configuration (Optional)

The B2B inquiry form works out of the box in **client verification mode**: it validates all commercial fields, assigns a unique reference number, and generates a formatted downloadable specification brief (`.txt`) for the buyer.

To connect a live email endpoint or webhook (e.g. Formspree, Make, or custom API), copy `.env.example` to `.env` and set:
```env
VITE_CONTACT_API_ENDPOINT=https://your-api-endpoint.com/inquiries
```

---

## License & Copyright

© 2026 PS Exports. All rights reserved.
Pallipalayam, Erode, Tamil Nadu, India.
