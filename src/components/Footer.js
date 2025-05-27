export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_BUILDING_NAME}</p>
    </footer>
  )
}
