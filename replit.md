# Bikers Dhaba Website

A multi-page public restaurant website for Bikers Dhaba in Pabna, Bangladesh, with its menu, restaurant photos, contact information, and Google Maps location.

## Run & Operate

- `pnpm --filter @workspace/bikers-dhaba run dev` — run the website through its managed workflow
- `pnpm --filter @workspace/bikers-dhaba run typecheck` — typecheck the website
- `pnpm run typecheck` — typecheck workspace packages
- The website uses a read-only `/api/menu` endpoint and currently needs no database or app-specific secret.
- The managed artifact workflow supplies `PORT` and `BASE_PATH`.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Website: React, Vite, TypeScript, and Wouter
- Styling: CSS with responsive breakpoints and a focused color palette
- API/database libraries are present in the shared workspace but are not required by this static business website.

## Where things live

- `artifacts/bikers-dhaba/src/App.tsx` — Home, About, Menu, Visit & Contact routes
- `artifacts/bikers-dhaba/src/components/site-layout.tsx` — shared brand, navigation, footer, and page metadata
- `artifacts/bikers-dhaba/src/components/menu-browser.tsx` — menu category filtering and price notice
- `artifacts/bikers-dhaba/src/data/business.ts` — address, phone, location link, listed rating, hours note, and services
- `artifacts/api-server/src/data/menu.ts` — menu categories, item names, and photographed board prices
- `artifacts/api-server/src/routes/menu.ts` — validated read-only menu endpoint
- `lib/api-spec/openapi.yaml` — source contract for the API and generated client
- `artifacts/bikers-dhaba/src/index.css` — colors, typography, and responsive styling
- `artifacts/bikers-dhaba/public/images/` — supplied restaurant/menu photos and illustrative generated food photography

## Architecture decisions

- The menu is served from a read-only API; add database storage only if the business needs persistent booking, ordering, or customer-submitted data.
- The business details and menu entries come from the supplied listing/photos; do not invent missing hours, awards, or customer reviews.
- Menu prices come from a photo dated August 2024, may be outdated, and must remain clearly marked as historical with a call-to-confirm note.
- Generated food photos are illustrative, not actual restaurant servings; the UI labels them accordingly.

## Product

- Separate Home, About, Menu, and Visit & Contact pages with responsive navigation
- Menu browsing by seafood, dhaba favourites, barbecue, and drinks
- A typed read-only API for menu data with validated responses and visible loading/error states
- Click-to-call actions, Google Maps directions, and a location map
- Authentic interior, menu-board, and guest food photos alongside illustrative food images

## User preferences

- Visual palette requested: Cosmic Latte, Mocha Cream, and Deep Burgundy.
- Build a complete, professional restaurant website with distinct pages and useful sections, not a bare single-section landing page.

## Gotchas

- Use the website and API artifact workflows for previews so their configured paths are applied.
- Do not present the 2024 menu-board prices as guaranteed current prices.
- Full opening hours are not available; the supplied listing only shows an 11 AM opening time.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
