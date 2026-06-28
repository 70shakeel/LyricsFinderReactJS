# LyricFinder

Search for songs powered by the [Genius API](https://genius.com/developers). View song metadata, album art, release info, and jump straight to the full lyrics on Genius.

Built with Next.js 16, React 19, and Bootstrap 5. Deployable on Vercel.

## Stack

- **Next.js 16** (App Router) — SSR song detail page, API route proxy for search
- **React 19**
- **Bootstrap 5**
- **Genius API** — song search, metadata, and album art

## Getting Started

### 1. Get a Genius API key

Sign up at [genius.com/developers](https://genius.com/developers), create an app, and grab your **Client Secret** (used as a Bearer token for server-to-server calls).

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

> **Note:** The Genius API returns song metadata but not lyrics text directly. The "Read Lyrics on Genius" button links to the full lyrics page on genius.com.

## License

MIT
