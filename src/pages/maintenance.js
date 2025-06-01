// pages/maintenance.js
import Layout from '../components/Layout'
import { useState } from 'react'

export default function Maintenance() {
  const [form, setForm] = useState({ unit: '', issue: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Request submitted for Unit ${form.unit}: ${form.issue}`)
    setForm({ unit: '', issue: '' })
  }

  return (
    <Layout>
      <h2>Submit a Maintenance Request</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
        <label>
          Unit Number:
          <input
            type="text"
            value={form.unit}
            onChange={(e) => setForm({ ...form, unit: e.target.value })}
            required
            style={{ display: 'block', margin: '0.5rem 0' }}
          />
        </label>
        <label>
          Describe the Issue:
          <textarea
            value={form.issue}
            onChange={(e) => setForm({ ...form, issue: e.target.value })}
            required
            rows={4}
            style={{ display: 'block', width: '100%', marginBottom: '1rem' }}
          />
        </label>
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Submit</button>
      </form>
    </Layout>
  )
}
