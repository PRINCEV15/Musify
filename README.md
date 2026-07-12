# Musify / AuroraSound

A production-oriented Next.js 15 music streaming interface with an original premium Artist Profile page, built with React 19, TypeScript, Tailwind CSS, Framer Motion, Zustand, TanStack Query, Prisma/PostgreSQL-ready models, and Supabase-ready environment configuration.

## Features

- Responsive artist hero with editable banner and profile avatar affordances.
- Owner-only profile actions for editing, uploading music, and analytics.
- Sticky tab navigation with smooth client-side transitions.
- Overview sections for featured releases, tracks, collaborations, about, and support.
- Music cards with artwork, metadata, playback controls, contextual menus, and waveform-style visualization.
- Right sidebar with artist statistics, booking/contact details, achievements, equipment, influences, and recommendations.
- Edit Profile modal covering metadata, social/contact fields, drag-and-drop image upload UX, crop/replace/remove states, and optimistic-update messaging.
- Persistent bottom player with playback progress.
- Prisma schema for users, artist profiles, tracks, albums, and playlists.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000/artist/princevadgama`.

## Production notes

Connect Supabase Auth and Storage by filling the Supabase environment variables. Run Prisma migrations against PostgreSQL before enabling write APIs. Uploaded images should be stored in cloud storage and persisted as URLs on `ArtistProfile.avatarUrl` and `ArtistProfile.bannerUrl`.
