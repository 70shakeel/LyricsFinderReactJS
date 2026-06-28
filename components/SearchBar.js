'use client'

import { useState } from 'react'

export default function SearchBar({ onResults, onLoading }) {
  const [input, setInput] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!input.trim()) return
    onLoading?.(true)
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(input.trim())}`)
      const data = await res.json()
      onResults?.(data.tracks ?? [], 'Search Results')
    } finally {
      onLoading?.(false)
    }
  }

  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-5 text-center">
        <i className="fas fa-music me-2" />
        Search For A Song
      </h1>
      <p className="lead text-center">Get the lyrics for any song</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Song title..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button className="btn btn-primary btn-lg w-100" type="submit">
          Get Track Lyrics
        </button>
      </form>
    </div>
  )
}
