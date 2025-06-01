export default function handler(req, res) {
  if (req.method === 'POST') {
    const { apartment, issue, urgency } = req.body;

    console.log('Received Maintenance Request:', { apartment, issue, urgency });

    // Redirect after submission
    res.writeHead(302, { Location: '/thank-you' });
    res.end();
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
