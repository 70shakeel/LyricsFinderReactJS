import { NextResponse } from 'next/server'
import { getLyrics } from '@/lib/lrclib'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const track = searchParams.get('track')
  const artist = searchParams.get('artist')
  if (!track || !artist) return NextResponse.json({ error: 'Missing params' }, { status: 400 })

  const lyrics = await getLyrics(track, artist)
  return NextResponse.json({ lyrics })
}
