import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link href="/" className="navbar-brand mx-auto fw-bold">
          <i className="fas fa-music me-2" />
          LyricFinder
        </Link>
      </div>
    </nav>
  )
}
