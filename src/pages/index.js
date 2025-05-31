import Image from 'next/image'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <section style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Welcome to The Owner's Corporation Dashboard
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          This portal is designed to help owners & residents manage day-to-day operations of strata-titled properties in NSW.
          Stay on top of levies, meetings, maintenance, and more in accordance with the 
          <strong> Strata Schemes Management Act (2015)</strong>.
        </p>
      </section>

      <section style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', padding: '1rem' }}>
        <div style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
          <Image
            src="/apt-2.jpg"
            alt="Apartment exterior"
            width={400}
            height={300}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
          <Image
            src="/sydneyapt-1.webp"
            alt="Apartment interior view"
            width={400}
            height={300}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      <section style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto', fontSize: '1.1rem' }}>
        <h2>Key features available to you:</h2>
        <ul style={{ marginTop: '1rem', lineHeight: '1.8' }}>
          <li>📋 View and manage levy notices and payment history</li>
          <li>🏠 Track maintenance requests and updates</li>
          <li>🗳️ Participate in meetings</li>
          <li>📄 Access strata documents and agendas</li>
        </ul>
      </section>
    </Layout>
  )
}
