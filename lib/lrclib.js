const BASE = 'https://lrclib.net/api'

export async function searchTracks(query) {
  const res = await fetch(`${BASE}/search?q=${encodeURIComponent(query)}`, {
    cache: 'no-store',
  })
  if (!res.ok) return []
  const json = await res.json()
  return Array.isArray(json) ? json : []
}

export async function getTrack(id) {
  const res = await fetch(`${BASE}/get/${id}`, { next: { revalidate: 86400 } })
  if (!res.ok) return null
  return res.json()
}
