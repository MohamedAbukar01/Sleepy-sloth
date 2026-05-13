# Sleepy Sloth — Landing Page

Pre-launch marketing site for Sleepy Sloth, the anti-productivity sleep companion app.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom muted "cozy not cute" palette)
- Supabase (waitlist storage)
- Inline SVG illustrations, no external image dependencies

## Local development

```bash
npm install
cp .env.example .env.local
# fill in SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
npm run dev
```

Visit http://localhost:3000.

## Supabase setup

The waitlist API expects a `public.waitlist` table:

```sql
create extension if not exists citext;

create table public.waitlist (
  id          bigserial primary key,
  email       citext unique not null,
  created_at  timestamptz not null default now(),
  source      text default 'landing'
);

alter table public.waitlist enable row level security;
-- no public policies: only the service role writes/reads
```

The API route uses `SUPABASE_SERVICE_ROLE_KEY` (server-only); never expose it
to the client. Get the service-role key from the Supabase dashboard:
**Settings → API → service_role**.

## Project structure

```
app/
  layout.tsx            Root layout, fonts, metadata
  page.tsx              Single landing page
  globals.css           Tailwind base + global styles
  api/waitlist/route.ts POST endpoint, writes to Supabase

components/             Section + form components
components/svg/         Inline SVG illustrations
lib/                    Supabase client + Zod validation
```

## Brand voice

Warm, gentle, slightly sleepy. Never urgent, never clinical. The copy treats
the sloth ("Sam") as a relationship, not a feature.
