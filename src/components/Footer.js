// src/components/Footer.js
export default function Footer() {
  return (
    <footer>
      <p>Contact us at: {process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
    </footer>
  );
}
