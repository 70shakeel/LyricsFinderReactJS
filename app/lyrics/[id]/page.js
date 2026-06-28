import { getTrack, getLyrics } from '@/lib/musixmatch'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  try {
    const track = await getTrack(params.id)
    return { title: `${track.track_name} – ${track.artist_name} | LyricFinder` }
  } catch {
    return { title: 'Lyrics | LyricFinder' }
  }
}

export default async function LyricsPage({ params }) {
  let track, lyrics
  try {
    ;[track, lyrics] = await Promise.all([getTrack(params.id), getLyrics(params.id)])
  } catch {
    notFound()
  }

  if (!track || !lyrics) notFound()

  const genre =
    track.primary_genres?.music_genre_list?.length > 0
      ? track.primary_genres.music_genre_list[0].music_genre.music_genre_name
      : 'N/A'

  const releaseDate = track.updated_time
    ? new Date(track.updated_time).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : 'N/A'

  return (
    <>
      <Link href="/" className="btn btn-dark btn-sm mb-4">
        ← Go Back
      </Link>

      <div className="card mb-4">
        <h5 className="card-header">
          {track.track_name}{' '}
          <span className="text-secondary fw-normal">by {track.artist_name}</span>
        </h5>
        <div className="card-body">
          <p className="card-text" style={{ whiteSpace: 'pre-line' }}>
            {lyrics.lyrics_body || 'Lyrics not available.'}
          </p>
        </div>
      </div>

      <ul className="list-group mb-5">
        <li className="list-group-item">
          <strong>Album ID</strong>: {track.album_id}
        </li>
        <li className="list-group-item">
          <strong>Song Genre</strong>: {genre}
        </li>
        <li className="list-group-item">
          <strong>Explicit Words</strong>: {track.explicit === 0 ? 'No' : 'Yes'}
        </li>
        <li className="list-group-item">
          <strong>Release Date</strong>: {releaseDate}
        </li>
      </ul>
    </>
  )
}
