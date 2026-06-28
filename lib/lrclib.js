const BASE = 'https://lrclib.net/api'

export async function getLyrics(trackName, artistName) {
  const params = new URLSearchParams({ track_name: trackName, artist_name: artistName })
  const res = await fetch(`${BASE}/get?${params}`, { next: { revalidate: 86400 } })
  if (!res.ok) return null
  const json = await res.json()
  return json?.plainLyrics || json?.syncedLyrics?.replace(/\[\d{2}:\d{2}\.\d+\] ?/g, '') || null
}
