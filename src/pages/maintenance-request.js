// pages/maintenance-request.js

import Layout from '../components/Layout'

export default function MaintenanceRequestForm() {
  return (
    <Layout>
      <h2>Submit a Maintenance Request</h2>
      <form action="/api/submit-request" method="POST" style={{ display: 'flex', flexDirection: 'column', maxWidth: '500px', gap: '1rem' }}>
        <label>
          Apartment Number:
          <input type="text" name="apartment" required />
        </label>

        <label>
          Issue Description:
          <textarea name="issue" required />
        </label>

        <label>
          Urgency:
          <select name="urgency">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <button type="submit">Submit Request</button>
      </form>
    </Layout>
  );
}
