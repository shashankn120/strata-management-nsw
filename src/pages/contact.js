import Layout from '../components/Layout'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.message) {
      alert('Please fill in all fields.')
    } else {
      alert('Message sent!')
      setForm({ name: '', message: '' })
    }
  }

  return (
    <Layout>
      <h2>Contact the Committee</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
        <label>
          Your Name:
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            style={{ display: 'block', width: '100%', marginBottom: '1rem' }}
          />
        </label>
        <label>
          Message:
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={4}
            style={{ display: 'block', width: '100%', marginBottom: '1rem' }}
          />
        </label>
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Send</button>
      </form>
    </Layout>
  )
}
