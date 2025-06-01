import Layout from '../components/Layout'

export default function Documents() {
//Dummy documents dont do anything
  const files = [
    { name: 'Annual Report 2024', file: '/Citadels-Classics.pdf' },
    { name: 'By-Laws', file: '/Citadels-Classics.pdf' },
    { name: 'Insurance Certificate', file: '/Citadels-Classics.pdf' }
  ]

  return (
    <Layout>
      <h2>Important Documents</h2>
      <ul>
        {files.map((doc, idx) => (
          <li key={idx} style={{ marginBottom: '1rem' }}>
            <a
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#0070f3',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px'
              }}
            >
              📄 {doc.name}
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
