import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'LyricFinder | Find lyrics for your favorite songs',
  description: 'Search for lyrics to any song using the Musixmatch database.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Navbar />
        <div className="container mt-4">{children}</div>
      </body>
    </html>
  )
}
