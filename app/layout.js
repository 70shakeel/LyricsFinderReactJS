import './globals.css'
import Navbar from '@/components/Navbar'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata = {
  title: 'LyricFinder | Find lyrics for your favorite songs',
  description: 'Search for lyrics to any song.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 16px' }}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
