import { getSong } from '@/lib/genius'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  const song = await getSong(params.id)
  if (!song) return { title: 'Song | LyricFinder' }
  return { title: `${song.title} – ${song.primary_artist?.name} | LyricFinder` }
}

export default async function LyricsPage({ params }) {
  const song = await getSong(params.id)
  if (!song) notFound()

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
            {song.description?.plain && (
              <p className="text-muted small">{song.description.plain}</p>
            )}
            <a
              href={song.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning"
            >
              <i className="fas fa-external-link-alt me-2" />
              Read Lyrics on Genius
            </a>
          </div>
        </div>
      </div>

      <ul className="list-group mb-5">
        {song.album && (
          <li className="list-group-item">
            <strong>Album</strong>: {song.album.name}
          </li>
        )}
        {song.release_date_for_display && (
          <li className="list-group-item">
            <strong>Release Date</strong>: {song.release_date_for_display}
          </li>
        )}
        <li className="list-group-item">
          <strong>Pageviews</strong>: {song.stats?.pageviews?.toLocaleString() ?? 'N/A'}
        </li>
        {song.primary_artist && (
          <li className="list-group-item">
            <strong>Artist</strong>:{' '}
            <a href={song.primary_artist.url} target="_blank" rel="noopener noreferrer">
              {song.primary_artist.name}
            </a>
          </li>
        )}
      </ul>
    </>
  )
}
