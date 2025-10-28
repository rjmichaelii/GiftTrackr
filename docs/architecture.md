# Architecture (draft)

- **Data**: Postgres (Supabase)
  - Tables: users/profiles, groups, group_memberships, wishlists, items, claims
  - RLS: owner hidden from claims; coordinators can view

- **APIs**: SQL RPCs (transactional)
  - claim_status(slug), claim_item(...), claim_item_with_contact(...)

- **Frontend**: Vite React SPA (hash routing), deploy to GitHub Pages
