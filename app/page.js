import { getTopTracks } from '@/lib/itunes'
import SearchSection from '@/components/SearchSection'
import TopTrackCard from '@/components/TopTrackCard'

export default async function Home() {
  const topTracks = await getTopTracks()

  return (
    <>
      <SearchSection />

      {topTracks.length > 0 && (
        <section>
          <h2
            style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px',
            }}
          >
            Top 10 Songs
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {topTracks.map((track, i) => (
              <TopTrackCard key={track.id ?? i} track={track} rank={i + 1} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
