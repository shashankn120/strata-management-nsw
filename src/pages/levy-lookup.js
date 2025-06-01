import { useRouter } from 'next/router'
import Layout from '../components/Layout'

export default function LevyLookup() {
  const router = useRouter()
  const { apartment } = router.query

  // Dummy data to be replaced later
  const levyData = {
    '101': '$1,200 due by July 15',
    '102': '$950 due by August 1',
    '103': 'No outstanding levies',
  }

  return (
    <Layout>
      <h2>Apartment Levy Lookup</h2>

      <form method="GET" style={{ marginBottom: '2rem' }}>
        <label>
          Enter Apartment Number:
          <input type="text" name="apartment" defaultValue={apartment || ''} />
        </label>
        <button type="submit">Check</button>
      </form>

      {apartment && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Levy Information:</strong>
          <p>{levyData[apartment] || 'No data found for this apartment number.'}</p>
        </div>
      )}
    </Layout>
  )
}
