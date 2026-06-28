import { getTrack } from '@/lib/lrclib'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  const track = await getTrack(params.id)
  if (!track) return { title: 'Lyrics | LyricFinder' }
  return { title: `${track.trackName} – ${track.artistName} | LyricFinder` }
}

function formatDuration(seconds) {
  if (!seconds) return 'N/A'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

export default async function LyricsPage({ params }) {
  const track = await getTrack(params.id)
  if (!track) notFound()

  const lyrics = track.plainLyrics || track.syncedLyrics?.replace(/\[\d{2}:\d{2}\.\d+\] ?/g, '') || null

  return (
    <>
      <Link href="/" className="btn btn-dark btn-sm mb-4">
        ← Go Back
      </Link>

      <div className="card mb-4">
        <h5 className="card-header">
          {track.trackName}{' '}
          <span className="text-secondary fw-normal">by {track.artistName}</span>
        </h5>
        <div className="card-body">
          {track.instrumental ? (
            <p className="text-muted fst-italic">This is an instrumental track.</p>
          ) : (
            <p className="card-text" style={{ whiteSpace: 'pre-line' }}>
              {lyrics || 'Lyrics not available.'}
            </p>
          )}
        </div>
      </div>

      <ul className="list-group mb-5">
        <li className="list-group-item">
          <strong>Album</strong>: {track.albumName || 'N/A'}
        </li>
        <li className="list-group-item">
          <strong>Duration</strong>: {formatDuration(track.duration)}
        </li>
        <li className="list-group-item">
          <strong>Instrumental</strong>: {track.instrumental ? 'Yes' : 'No'}
        </li>
        <li className="list-group-item">
          <strong>Synced Lyrics</strong>: {track.syncedLyrics ? 'Available' : 'Not available'}
        </li>
      </ul>
    </>
  )
}
