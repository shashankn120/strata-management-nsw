import Link from 'next/link'

export default function Header() {
  return (
    <header style={{ padding: '1rem 2rem', backgroundColor: '#f0f0f0', marginBottom: '1rem' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>{process.env.NEXT_PUBLIC_BUILDING_NAME || 'My Strata Building'}</h1>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/">Home</Link>
        <Link href="/committee">Committee</Link>
      </nav>
    </header>
  )
}

