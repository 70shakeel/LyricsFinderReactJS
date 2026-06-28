'use client'

import { useState } from 'react'

export default function TopTrackCard({ track, rank }) {
  const [lyrics, setLyrics] = useState(null)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  async function toggle() {
    if (open) {
      setOpen(false)
      return
    }
    setOpen(true)
    if (lyrics !== null) return
    setLoading(true)
    try {
      const res = await fetch(
        `/api/lyrics?track=${encodeURIComponent(track.name)}&artist=${encodeURIComponent(track.artist)}`
      )
      const data = await res.json()
      setLyrics(data.lyrics ?? '')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'border-color 0.2s',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 16px',
          cursor: 'pointer',
        }}
        onClick={toggle}
      >
        <span
          style={{
            minWidth: '28px',
            color: 'var(--text-muted)',
            fontWeight: 700,
            fontSize: '0.9rem',
          }}
        >
          {rank}
        </span>
        {track.artwork && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={track.artwork}
            alt={track.name}
            width={48}
            height={48}
            style={{ borderRadius: '6px', flexShrink: 0 }}
          />
        )}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: '0.95rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {track.name}
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{track.artist}</div>
        </div>
        <span style={{ color: 'var(--accent)', fontSize: '0.8rem', flexShrink: 0 }}>
          {open ? '▲ hide' : '▼ lyrics'}
        </span>
      </div>

      {open && (
        <div
          style={{
            borderTop: '1px solid var(--border)',
            padding: '16px 20px',
            background: 'var(--surface-raised)',
          }}
        >
          {loading ? (
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Loading lyrics…</p>
          ) : lyrics ? (
            <pre
              style={{
                margin: 0,
                fontFamily: 'inherit',
                fontSize: '0.9rem',
                lineHeight: 1.8,
                color: 'var(--text)',
                whiteSpace: 'pre-wrap',
              }}
            >
              {lyrics}
            </pre>
          ) : (
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
              Lyrics not available for this track.
            </p>
          )}
        </div>
      )}
    </div>
  )
}
