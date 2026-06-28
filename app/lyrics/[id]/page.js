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
      <Link href="/" className="btn btn-dark btn-sm mb-4">
        ← Go Back
      </Link>

      <div className="card mb-4">
        <div className="card-body d-flex gap-4 flex-wrap">
          {song.song_art_image_url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={song.song_art_image_url}
              alt={song.title}
              width={180}
              height={180}
              className="rounded flex-shrink-0"
              style={{ objectFit: 'cover' }}
            />
          )}
          <div>
            <h4 className="mb-1">{song.title}</h4>
            <p className="text-secondary mb-2">{song.primary_artist?.name}</p>
            {song.album && <p className="text-muted small mb-1"><strong>Album:</strong> {song.album.name}</p>}
            {song.release_date_for_display && (
              <p className="text-muted small mb-0"><strong>Released:</strong> {song.release_date_for_display}</p>
            )}
          </div>
        </div>
      </div>

      <div className="card mb-5">
        <div className="card-header fw-semibold">Lyrics</div>
        <div className="card-body">
          {lyrics ? (
            <p className="card-text" style={{ whiteSpace: 'pre-line' }}>
              {lyrics}
            </p>
          ) : (
            <p className="text-muted fst-italic mb-0">
              Lyrics not found.{' '}
              <a href={song.url} target="_blank" rel="noopener noreferrer">
                View on Genius →
              </a>
            </p>
          )}
        </div>
      </div>
    </>
  )
}
