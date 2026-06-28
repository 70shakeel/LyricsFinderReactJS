'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SearchSection() {
  const [input, setInput] = useState('')
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!input.trim()) return
    setLoading(true)
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(input.trim())}`)
      const data = await res.json()
      setResults(data.tracks ?? [])
    } finally {
      setLoading(false)
    }
  }

  return (
    <section style={{ marginBottom: '48px' }}>
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '4px',
        }}
      >
        Find Any Song
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
        Search by song title or artist
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. Blinding Lights..."
          style={{
            flex: 1,
            padding: '12px 16px',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            color: 'var(--text)',
            fontSize: '1rem',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '12px 24px',
            background: 'var(--accent)',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: loading ? 'default' : 'pointer',
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? '…' : 'Search'}
        </button>
      </form>

      {results !== null && (
        <div>
          {results.length === 0 ? (
            <p style={{ color: 'var(--text-muted)' }}>No results found.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {results.map((track) => (
                <Link
                  key={track.id}
                  href={`/lyrics/${track.id}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    color: 'var(--text)',
                    transition: 'border-color 0.15s',
                  }}
                >
                  {track.song_art_image_thumbnail_url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={track.song_art_image_thumbnail_url}
                      alt={track.title}
                      width={48}
                      height={48}
                      style={{ borderRadius: '6px', flexShrink: 0 }}
                    />
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {track.title}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {track.primary_artist?.name}
                    </div>
                  </div>
                  <span style={{ color: 'var(--accent)', fontSize: '0.85rem', flexShrink: 0 }}>
                    View →
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
