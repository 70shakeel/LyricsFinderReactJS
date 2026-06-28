import Link from 'next/link'
import Image from 'next/image'

export default function Track({ track }) {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body d-flex gap-3">
          {track.song_art_image_thumbnail_url && (
            <Image
              src={track.song_art_image_thumbnail_url}
              alt={track.title}
              width={80}
              height={80}
              className="rounded flex-shrink-0"
              style={{ objectFit: 'cover' }}
            />
          )}
          <div className="d-flex flex-column flex-grow-1">
            <h5 className="card-title mb-1">{track.primary_artist?.name}</h5>
            <p className="card-text flex-grow-1 mb-2">
              <strong>
                <i className="fas fa-play me-1" />
                Track
              </strong>
              : {track.title}
              {track.album && (
                <>
                  <br />
                  <strong>
                    <i className="fas fa-compact-disc me-1" />
                    Album
                  </strong>
                  : {track.album.name}
                </>
              )}
            </p>
            <Link href={`/lyrics/${track.id}`} className="btn btn-dark btn-sm mt-auto">
              <i className="fas fa-chevron-right me-1" />
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
