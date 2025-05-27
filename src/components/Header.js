import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <h1>{process.env.NEXT_PUBLIC_BUILDING_NAME}</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/committee">Committee</Link>
      </nav>
    </header>
  )
}
