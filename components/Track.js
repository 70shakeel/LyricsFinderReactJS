import Link from 'next/link'

export default function Track({ track }) {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{track.artistName}</h5>
          <p className="card-text flex-grow-1">
            <strong>
              <i className="fas fa-play me-1" />
              Track
            </strong>
            : {track.trackName}
            <br />
            <strong>
              <i className="fas fa-compact-disc me-1" />
              Album
            </strong>
            : {track.albumName || 'N/A'}
          </p>
          <Link href={`/lyrics/${track.id}`} className="btn btn-dark mt-2">
            <i className="fas fa-chevron-right me-1" />
            View Lyrics
          </Link>
        </div>
      </div>
    </div>
  )
}
