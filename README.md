# QurbaniHat — Livestock Booking Platform

A modern livestock marketplace concept where users can browse cows, goats,
sheep, and buffalo listed for Qurbani, view full details, and place a
booking after logging in.

## Live URL
_Add your deployed link here (Vercel/Render) after hosting._

## Key Features
- Browse featured and full animal listings, sortable by price
- Detailed animal page with an ear-tag-style price/weight/age badge and a
  booking form (name, email, phone, address) — login required
- Email/password auth plus a mocked "Continue with Google" flow
- My Profile page with an Update Information flow (name + photo URL)
- Toast notifications for login, registration, updates, and bookings
- Fully responsive layout (mobile, tablet, desktop) with a custom
  livestock-market visual identity (slab display type, brass/oxblood
  accents, ledger-line dividers, ear-tag badges)
- Custom 404 page and route-level loading state

## Tech / npm packages used
- **Next.js 16 (App Router)** — routing and rendering
- **Tailwind CSS v4** — styling and design tokens
- **react-hot-toast** — toast notifications
- **framer-motion** — hero entrance animation
- **lucide-react** — icon set

## Notes
- Authentication is a front-end mock using `localStorage` — there is no
  real backend or database. Google login is simulated.
- Booking form data is intentionally not persisted anywhere (per the
  assignment brief) — it only resets and shows a success toast.

## Getting Started
```bash
npm install
npm run dev
```
Open http://localhost:3000 in your browser.
