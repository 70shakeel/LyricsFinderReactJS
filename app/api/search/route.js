import { NextResponse } from 'next/server'
import { searchTracks } from '@/lib/musixmatch'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q')
  if (!q) return NextResponse.json({ error: 'Missing query' }, { status: 400 })

  try {
    const tracks = await searchTracks(q)
    return NextResponse.json({ tracks })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch tracks' }, { status: 500 })
  }
}
