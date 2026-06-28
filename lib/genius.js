const BASE = 'https://api.genius.com'
const TOKEN = process.env.GENIUS_ACCESS

function headers() {
  return { Authorization: `Bearer ${TOKEN}` }
}

export async function searchTracks(query) {
  const res = await fetch(`${BASE}/search?q=${encodeURIComponent(query)}`, {
    headers: headers(),
    cache: 'no-store',
  })
  if (!res.ok) return []
  const json = await res.json()
  return json?.response?.hits?.filter((h) => h.type === 'song').map((h) => h.result) ?? []
}

export async function getSong(id) {
  const res = await fetch(`${BASE}/songs/${id}`, {
    headers: headers(),
    next: { revalidate: 86400 },
  })
  if (!res.ok) return null
  const json = await res.json()
  return json?.response?.song ?? null
}
