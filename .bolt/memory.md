# Project memory

## Product intent & audience

- Personal book reading/tracking application named **Sumy Livres**
- Personal use only (not public/commercial)
- Core features: home, library, shelves, reading challenges, statistics, add books, export/import

## Brand personality & voice

- French-language interface
- Personal, utilitarian tone

## Visual design & UX direction

- Current design is frozen and must be preserved exactly
- No design changes inferred yet; aesthetic details not yet documented

## Decisions, constraints & rationale

- App is a pre-existing static HTML application; Vite added only to enable Bolt preview
- Minimal config added: `package.json` + `vite.config.js` (serve `index.html` as classic page)
- Do not rewrite app code, delete files, or modify data/save system
- Data persistence uses JSON save system (unchanged)
- PWA-style assets present: manifest + icons (incl. 512px); 512 icon not referenced in HTML, ignored in prod build only — no impact on preview
- Only **Step 1** approved: make preview functional in Bolt. No further evolution to begin without approval
- Before any future change: preserve design, preserve features, keep all files, don't rewrite app code, don't modify data

## Open questions & assumptions

- Future steps beyond Step 1 not yet defined
- No assumption about framework migration; user prefers minimal architecture changes
- Accessibility/responsive details not yet inspected