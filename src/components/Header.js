import Link from 'next/link'

export default function Header() {
  return (
    <header style={{ padding: '1rem 2rem', backgroundColor: '#f0f0f0', marginBottom: '1rem' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>{process.env.NEXT_PUBLIC_BUILDING_NAME || 'My Strata Building'}</h1>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/">Home</Link>
        <Link href="/committee">Committee</Link>
        <Link href="/levies">Levies</Link>
        <Link href="/maintenance">Maintenance</Link>
        <Link href="/meetings">Meetings</Link>
        <Link href="/documents">Documents</Link>
        <Link href="/contact">Contact Details</Link>
        <Link href="/levy-lookup">Levy Lookup</Link>
        <Link href="/maintenance-request">Maintenance Requests</Link>
      </nav>
    </header>
  )
}

