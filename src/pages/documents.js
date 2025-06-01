import Layout from '../components/Layout'

export default function Documents() {
  // Files reference PDFs in the public/ folder (no /public prefix needed)
  const files = [
    { name: 'Annual Report 2024', file: '/citadels.pdf' },
    { name: 'By-Laws', file: '/citadels.pdf' },
    { name: 'Insurance Certificate', file: '/citadels.pdf' }
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
