// pages/levies.js
import { useState } from 'react'
import Layout from '../components/Layout'

const dummyLevies = [
  { lot: '101', owner: 'Alice Wong', amount: '$1,200', due: '2025-06-15' },
  { lot: '102', owner: 'Bob Smith', amount: '$1,150', due: '2025-06-20' },
  { lot: '103', owner: 'Carol Lee', amount: '$1,300', due: '2025-07-01' }
]

export default function Levies() {
  const [search, setSearch] = useState('')

  const filtered = dummyLevies.filter(entry =>
    entry.owner.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Layout>
      <h2>Levies Overview</h2>
      <input
        type="text"
        placeholder="Search by owner"
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem' }}
      />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Lot</th><th>Owner</th><th>Amount</th><th>Due</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((entry, i) => (
            <tr key={i}>
              <td>{entry.lot}</td>
              <td>{entry.owner}</td>
              <td>{entry.amount}</td>
              <td>{entry.due}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}
