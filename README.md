# LyricFinder

A dark-mode lyrics finder built with Next.js 16, Tailwind CSS 4, and `next-themes`.

- **Home page** — top 10 US songs from iTunes with expandable inline lyrics
- **Search** — powered by Genius API with cover art and rich metadata
- **Lyrics** — fetched from lrclib (free, no key required)

## Stack

- **Next.js 16** (App Router, SSR)
- **React 19**
- **Tailwind CSS 4**
- **next-themes** — dark/light mode toggle
- **Genius API** — song search, cover art, metadata
- **lrclib API** — full lyrics text (free, no key)
- **iTunes RSS** — top 10 chart tracks (free, no key)

## Getting Started

### 1. Get a Genius API key

Sign up at [genius.com/developers](https://genius.com/developers), create an app, and copy the **Client Access Token** from your app's settings page.

### 2. Add environment variables

Create a `.env.local` file in the project root:

```
GENIUS_CLIENT_ID=your_client_id
GENIUS_CLIENT_SECRET=your_client_secret
GENIUS_ACCESS=your_client_access_token
```

### 3. Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm start        # serve production build
```

## Deploy to Vercel

1. Push to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Add `GENIUS_CLIENT_ID`, `GENIUS_CLIENT_SECRET`, and `GENIUS_ACCESS` in project settings → Environment Variables
4. Deploy

## License

MIT
