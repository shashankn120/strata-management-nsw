import { useState, useEffect } from 'react'
import Layout from '../components/Layout'

export default function Committee() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    // In a real app, fetch from your API:
    // fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/committee`)
    //   .then(res => res.json()).then(setMembers)
    // For now, mock:
    setMembers([
      { role: 'Chairperson', name: 'Alice Wong' },
      { role: 'Secretary',   name: 'Bob Smith'   },
      { role: 'Treasurer',   name: 'Carol Lee'   },
    ])
  }, [])

  return (
    <Layout>
      <h2>Strata Committee</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Role</th>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>Name</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m, i) => (
            <tr key={i}>
              <td style={{ padding: '0.5rem 0' }}>{m.role}</td>
              <td style={{ padding: '0.5rem 0' }}>{m.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}
