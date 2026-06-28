export async function getTopTracks() {
  const res = await fetch('https://itunes.apple.com/us/rss/topsongs/limit=10/json', {
    next: { revalidate: 3600 },
  })
  if (!res.ok) return []
  const json = await res.json()
  return (json?.feed?.entry ?? []).map((e) => ({
    name: e['im:name'].label,
    artist: e['im:artist'].label,
    artwork: e['im:image']?.[2]?.label ?? e['im:image']?.[0]?.label,
    id: e.id?.attributes?.['im:id'],
  }))
}
