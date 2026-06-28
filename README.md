# LyricFinder

Search for songs via the [Genius API](https://genius.com/developers) and read full lyrics powered by [lrclib.net](https://lrclib.net).

Built with Next.js 16, React 19, and Bootstrap 5. Deployable on Vercel.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **Bootstrap 5**
- **Genius API** — song search, cover art, and metadata
- **lrclib API** — full lyrics text (free, no key required)

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
