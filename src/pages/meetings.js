import Layout from '../components/Layout'

const meetings = [
  { date: '2025-06-15', title: 'Annual General Meeting', time: '10:00 AM' },
  { date: '2025-07-01', title: 'Budget Planning', time: '3:00 PM' },
  { date: '2025-08-10', title: 'Maintenance Review', time: '1:00 PM' }
]

export default function Meetings() {
  return (
    <Layout>
      <h2>Upcoming Meetings</h2>
      <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
        {meetings.map((m, i) => (
          <li key={i} style={{ borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
            <strong>{m.date}</strong> – {m.title} at {m.time}
          </li>
        ))}
      </ul>
    </Layout>
  )
}
