import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ThankYou() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/') //Redirects to homepage after 3 seconds
    }, 3000)

    return () => clearTimeout(timer) 
  }, [router])

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Request Submitted Successfully!</h1>
      <p>We have received your request and will be in touch shortly.</p>
      <p>Redirecting you back to the homepage...</p>
    </div>
  )
}
