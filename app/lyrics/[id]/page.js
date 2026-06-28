import { getSong } from '@/lib/genius'
import { getLyrics } from '@/lib/lrclib'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  const { id } = await params
  const song = await getSong(id)
  if (!song) return { title: 'Song | LyricFinder' }
  return { title: `${song.title} – ${song.primary_artist?.name} | LyricFinder` }
}

export default async function LyricsPage({ params }) {
  const { id } = await params
  const song = await getSong(id)
  if (!song) notFound()

  const lyrics = await getLyrics(song.title, song.primary_artist?.name)

  return (
    <>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          color: 'var(--text-muted)',
          textDecoration: 'none',
          fontSize: '0.9rem',
          marginBottom: '24px',
        }}
      >
        ← Back
      </Link>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'flex-start',
          marginBottom: '32px',
          flexWrap: 'wrap',
        }}
      >
        {song.song_art_image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={song.song_art_image_url}
            alt={song.title}
            width={160}
            height={160}
            style={{ borderRadius: '12px', flexShrink: 0 }}
          />
        )}
        <div style={{ flex: 1, minWidth: '200px' }}>
          <h1
            style={{
              fontSize: '1.6rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '4px',
            }}
          >
            {song.title}
          </h1>
          <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '12px' }}>
            {song.primary_artist?.name}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {song.album && (
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Album: {song.album.name}
              </span>
            )}
            {song.release_date_for_display && (
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Released: {song.release_date_for_display}
              </span>
            )}
            {song.stats?.pageviews && (
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {song.stats.pageviews.toLocaleString()} views on Genius
              </span>
            )}
          </div>
        </div>
      </div>

      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '24px',
        }}
      >
        <h2
          style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--text-muted)',
            marginBottom: '20px',
          }}
        >
          Lyrics
        </h2>
        {lyrics ? (
          <pre
            style={{
              margin: 0,
              fontFamily: 'inherit',
              fontSize: '1rem',
              lineHeight: 1.9,
              color: 'var(--text)',
              whiteSpace: 'pre-wrap',
            }}
          >
            {lyrics}
          </pre>
        ) : (
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>
            Lyrics not found.{' '}
            <a
              href={song.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)' }}
            >
              View on Genius →
            </a>
          </p>
        )}
      </div>
    </>
  )
}
