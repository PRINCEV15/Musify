# Musify

**Where music finds you.**

Musify is an independent, artist-first music discovery and streaming platform.

## Foundation delivered
- Original dark editorial visual identity with acid-lime accent
- Responsive home, discovery, search, charts, library, track, artist, creator and admin surfaces
- Persistent client-side player context with progress seeking
- Prisma/PostgreSQL domain model for users, artists, tracks, albums, playlists, likes, reposts, follows, comments, listening events, notifications and reports
- REST starter endpoints for track listing/search and track lookup
- Environment configuration for PostgreSQL and media storage/CDN
- Upload UI foundation for audio metadata and rights workflow

## Production architecture
Large audio/artwork assets should live in object storage and be delivered through a CDN/signed URLs. PostgreSQL stores relational metadata and social graph state. Transcoding, waveform generation, moderation, analytics aggregation, recommendation generation, notifications and payouts should run as asynchronous workers.

The API/domain layer is separated so native iOS/Android clients can consume the same backend contracts later.

## Run locally
1. Copy `.env.example` to `.env.local`.
2. Set `DATABASE_URL`.
3. Run `npm install`.
4. Run `npx prisma generate`.
5. Run `npx prisma migrate dev`.
6. Run `npm run dev`.

Production integrations for authentication, object storage, transcoding, payments, messaging, copyright enforcement and recommendation systems should use real provider services rather than mock data.
