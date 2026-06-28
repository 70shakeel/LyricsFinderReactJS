# LyricFinder

Search for song lyrics powered by the [Musixmatch API](https://developer.musixmatch.com).

Built with Next.js 16, React 19, and Bootstrap 5. Deployable on Vercel with zero config.

## Stack

- **Next.js 16** (App Router) — SSR home page, dynamic lyrics page, API route proxy
- **React 19**
- **Bootstrap 5**
- **Musixmatch API** — track search and lyrics

## Getting Started

### 1. Get a Musixmatch API key

Sign up at [developer.musixmatch.com](https://developer.musixmatch.com) and grab your free API key.

### 2. Add environment variable

Create a `.env.local` file in the project root:

```
MUSIXMATCH_API_KEY=your_api_key_here
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
3. Add `MUSIXMATCH_API_KEY` in project settings → Environment Variables
4. Deploy

## License

MIT
