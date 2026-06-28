import { getTopTracks } from '@/lib/musixmatch'
import TrackList from '@/components/TrackList'

export default async function Home() {
  let initialTracks = []
  try {
    initialTracks = await getTopTracks()
  } catch {
    // show empty list; user can still search
  }

  return <TrackList initialTracks={initialTracks} initialHeading="Top 10 Tracks" />
}
