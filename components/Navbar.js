import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav
      style={{
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
        padding: '0 24px',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <Link
        href="/"
        style={{
          fontWeight: 700,
          fontSize: '1.2rem',
          color: 'var(--accent)',
          textDecoration: 'none',
          letterSpacing: '-0.02em',
        }}
      >
        ♪ LyricFinder
      </Link>
      <ThemeToggle />
    </nav>
  )
}
