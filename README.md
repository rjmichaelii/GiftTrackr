# GiftTrackr
GiftTrackr is a simple tool for sharing wishlists with family, friends, or coworkers. Users can mark items as claimed within a group—without notifying the requester—making gift giving seamless and avoiding endless group chat messages.

## Status
Phase 0: repository scaffolding. See issues for the roadmap.

## Tech (planned)
- Frontend: React + TypeScript (Vite), Tailwind; hosted on GitHub Pages
- Backend: Supabase (Postgres + RLS + RPC), free tier
- Auth: magic links (owner), anonymous/receipt links (visitors)

## Roadmap
- Phase 1: Frontend skeleton (static)
- Phase 2: DB schema + RLS SQL files
- Phase 3: Read-only public list + claim status
- Phase 4: Atomic claim RPC + UI
- Phase 5: Groups + invite links
- Phase 6: Owner dashboard + coordinator role
- Phase 7: Anonymous claim receipts
- Phase 8: Polish, tests, CI/CD

## Dev
Open an issue to discuss features or check `/infra/sql` for DB scripts once added.