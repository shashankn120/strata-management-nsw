export default function Footer() {
  return (
    <footer style={{ marginTop: '2rem', padding: '1rem', borderTop: '1px solid #ccc', textAlign: 'center' }}>
      <p>Contact us at: {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'committee@example.com'}</p>
    </footer>
  );
}
