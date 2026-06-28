'use client'

import { useState } from 'react'
import SearchBar from './SearchBar'
import Track from './Track'

export default function TrackList() {
  const [tracks, setTracks] = useState([])
  const [heading, setHeading] = useState('')
  const [loading, setLoading] = useState(false)

  function handleResults(newTracks, newHeading) {
    setTracks(newTracks)
    setHeading(newHeading)
  }

  return (
    <>
      <SearchBar onResults={handleResults} onLoading={setLoading} />
      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {heading && <h3 className="text-center mb-4">{heading}</h3>}
          {tracks.length === 0 && heading ? (
            <p className="text-center text-muted">No results found.</p>
          ) : (
            <div className="row">
              {tracks.map((track) => (
                <Track key={track.id} track={track} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  )
}
