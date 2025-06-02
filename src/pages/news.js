import Layout from '../components/Layout'

export default function News() {
  return (
    <Layout>
      <section style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '1.5rem' }}>
          Latest Strata News & Imaginary Developments
        </h1>

        <article style={{ marginBottom: '2rem' }}>
          <h2>🧽 Residents Vote to Replace All Floors with Sponge Tiles</h2>
          <p>
            In a historic 4–3 decision during last week’s strata meeting, residents agreed to trial sponge-based flooring
            in common areas. "It’s squishy, it’s safe, and it smells like vanilla," said one owner. The installation is expected
            to begin as soon as someone figures out how to stop the tiles from absorbing rainwater.
          </p>
        </article>

        <article style={{ marginBottom: '2rem' }}>
          <h2>🚁 Rooftop Helipad to Be Reserved for Emotional Support Drones</h2>
          <p>
            The committee has designated the rooftop area as a quiet zone for licensed emotional support drones. 
            These gentle, hovering companions will help reduce strata stress levels by playing whale sounds and
            gently misting eucalyptus oil.
          </p>
        </article>

        <article style={{ marginBottom: '2rem' }}>
          <h2>🌿 Building to Trial Vertical Indoor Garden Made of Plastic Parsley</h2>
          <p>
            Due to budget constraints, the lobby will be outfitted with a 4-meter high “eco-wall” of
            synthetic parsley. This aims to improve morale and reduce carbon guilt, while never needing water,
            sunlight, or actual effort.
          </p>
        </article>

        <article>
          <h2>🔌 Smart Socket Policy Update: Outlets Must Be Emotionally Intelligent</h2>
          <p>
            Starting next month, all power outlets must pass an AI-driven empathy test before installation. 
            Outlets that express concern for overworked kettles or acknowledge your need for coffee will be 
            prioritised. Non-compliant sockets will be repurposed as wall art.
          </p>
        </article>
      </section>
    </Layout>
  )
}
