# Proposal 001 · Miami HEAT (MIA)

**Miami HEAT × AGV Miami — East Plaza Pop-Up Activation Program**

A digital interactive proposal for the Miami HEAT pop-up activation program at the East Plaza inside Kaseya Center. Document `AGORA-HEAT-001 · v1.1`.

## Engagement model

Three engagement vectors, designed to compound:

1. **Retainer** — pick one of three monthly tiers
   - **Base · $5,000 / mo** · Studio On Standby · 1–4 activations / yr
   - **Elevated · $8,000 / mo** · Operating Tempo · 5–10 activations / yr
   - **Premium · $10,000 / mo** · Strategic Partner · 11+ activations / yr · Premium-only exclusives (white-glove on-site PM, embedded creative director, first-look on new capabilities, annual brand workshop)
2. **Per-Activation Build** — three tiers, $10K spread between base spec and top spec
   - **Small** · $48K – $58K · 10×10 to 15×15 vignette
   - **Medium** · $115K – $125K · 15×20 to 30×20 freestanding kiosk
   - **Large** · $285K – $295K · 40×40+ multi-zone takeover
3. **Add-Ons & Upgrades** — 25-item overlay catalog across 5 categories (Material & Finish · Functional Upgrades · Service Overlays · Logistics · Documentation). Stacks on any retainer tier and / or any activation build.

## Tech

- Next.js 16 · React 19 · TypeScript
- Single-page interactive proposal at `/`
- Heat brand kit applied via scoped `heat.css` (Heat Red `#98002E` · Heat Black · Heat Yellow `#F9A01B`)
- Italic skewed display wordmarks · diagonal court-style stripe accents · drop-shadow type treatment
- Sticky section nav with active-state highlighting · accordion expansion · canvas-draw signature pad · print-optimized layout

## Local development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Structure

- `app/layout.tsx` — root layout, font loading (Anton · Bebas Neue · DM Sans · Share Tech Mono · Cormorant Garamond)
- `app/page.tsx` — renders the proposal
- `app/proposal/data.ts` — proposal content: retainer tiers, activation tiers, scope taxonomy, lifecycle, sites, addons, terms
- `app/proposal/HeatProposalView.tsx` — interactive client component (sticky nav, accordions, signature pad)
- `app/proposal/heat.css` — Heat brand kit styling (scoped to `.heat-doc`)

## Producer

**AGV Miami** · `mike@agoravisuals.com`

## Confidential

Prepared for Miami HEAT. Pricing and structural detail are confidential between the parties.
