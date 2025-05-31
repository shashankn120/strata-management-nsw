import { useState, useEffect } from 'react'
import Layout from '../components/Layout'

export default function Committee() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    setMembers([
      { role: 'Chairperson', name: 'Alice Wong' },
      { role: 'Secretary', name: 'Bob Smith' },
      { role: 'Treasurer', name: 'Carol Lee' },
    ])
  }, [])

  return (
    <Layout>
      <h2>Strata Committee</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', borderBottom: '2px solid #666' }}>Role</th>
            <th style={{ textAlign: 'left', borderBottom: '2px solid #666' }}>Name</th>
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
