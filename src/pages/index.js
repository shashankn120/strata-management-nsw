import Image from 'next/image'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <h2>Welcome to your Owners Corporation Dashboard</h2>
      <p>
        This site helps you manage levies, meetings, and committee roles under the Strata Schemes Management Act (2015).
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        <Image
          src="/apt-2.jpg"
          alt="Apartment exterior"
          width={400}
          height={300}
        />
        <Image
          src="/sydneyapt-1.webp"
          alt="Apartment interior view"
          width={400}
          height={300}
        />
      </div>
    </Layout>
  )
}
