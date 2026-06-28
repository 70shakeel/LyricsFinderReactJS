const BASE = 'https://api.musixmatch.com/ws/1.1'
const KEY = process.env.MUSIXMATCH_API_KEY

function apiUrl(path, params = {}) {
  const qs = new URLSearchParams({ ...params, apikey: KEY }).toString()
  return `${BASE}/${path}?${qs}`
}

export async function getTopTracks() {
  const res = await fetch(
    apiUrl('chart.tracks.get', { page: 1, page_size: 10, country: 'us', f_has_lyrics: 1 }),
    { next: { revalidate: 3600 } }
  )
  const json = await res.json()
  return json?.message?.body?.track_list ?? []
}

export async function searchTracks(query) {
  const res = await fetch(
    apiUrl('track.search', { q_track: query, page_size: 10, page: 1, s_track_rating: 'desc' }),
    { cache: 'no-store' }
  )
  const json = await res.json()
  return json?.message?.body?.track_list ?? []
}

export async function getTrack(id) {
  const res = await fetch(apiUrl('track.get', { track_id: id }), { next: { revalidate: 86400 } })
  const json = await res.json()
  return json?.message?.body?.track ?? null
}

export async function getLyrics(id) {
  const res = await fetch(apiUrl('track.lyrics.get', { track_id: id }), {
    next: { revalidate: 86400 },
  })
  const json = await res.json()
  return json?.message?.body?.lyrics ?? null
}
