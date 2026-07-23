// UA 2.0 — About / Our Story
function About({ go }) {
  const { Reveal, CTABand, Icon } = window;
  return (
    <div>
      {/* HERO */}
      <section className="band-dark" style={{ padding: '86px 0' }}><div className="narrow" style={{ textAlign: 'center' }}>
        <p className="eyebrow on-dark" style={{ textAlign: 'center' }}>Our story</p>
        <h1 className="display" style={{ fontSize: 78, marginBottom: 20 }}>Everyone grows food.</h1>
        <p className="lede" style={{ maxWidth: 560, margin: '0 auto' }}>Not someday. Not only gardeners. Everyone. That's the future we're planting across South Florida — one backyard at a time.</p>
      </div></section>

      {/* MISSION SPLIT */}
      <section className="section"><div className="wrap">
        <div className="ua-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <img src="./assets/photos/customer-garden.jpg" alt="A flourishing customer garden" style={{ width: '100%', height: 500, objectFit: 'cover', borderRadius: '28px 28px 140px 28px', boxShadow: '0 24px 50px rgba(51,48,42,.16)' }} />
          <div>
            <p className="eyebrow">Why we exist</p>
            <h2 className="display" style={{ fontSize: 46, marginBottom: 18 }}>Growing food shouldn't be hard. It should be <span className="hl leaf">beautiful.</span></h2>
            <p className="lede" style={{ marginBottom: 16 }}>We believe food is one of the greatest connectors — between people, health, family, and nature. So we removed everything that makes gardening intimidating and kept only the joy.</p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--soil-700)', margin: 0 }}>Our mission is simple: empower people to live healthier, more sustainable lives — cultivating stronger communities and a greener world, one garden at a time.</p>
          </div>
        </div>
      </div></section>

      {/* FARMER JACK */}
      <section className="section band-bone"><div className="wrap">
        <div className="ua-split" style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 60, alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img src="./assets/photos/bed-in-a-day.jpg" alt="Farmer Jack installing a garden" style={{ width: '100%', height: 480, objectFit: 'cover', borderRadius: '140px 28px 28px 28px', boxShadow: '0 24px 50px rgba(51,48,42,.16)' }} />
            <div style={{ position: 'absolute', bottom: -20, right: 20, background: 'var(--green-deep)', color: '#fff', borderRadius: 18, padding: '16px 22px', fontFamily: 'var(--display)', fontWeight: 600, fontSize: 20, boxShadow: '0 16px 36px rgba(38,79,32,.3)' }}>
              Farmer Jack<br /><span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--green-lime)' }}>Founder</span>
            </div>
          </div>
          <div>
            <p className="eyebrow">Meet the founder</p>
            <h2 className="display" style={{ fontSize: 44, marginBottom: 18 }}>Started with one bed. Grew into a movement.</h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, color: 'var(--soil-700)', marginBottom: 16 }}>Urban Abundance began with a simple frustration: gardening advice was everywhere, but thriving gardens were rare. Jack set out to build the one thing South Florida didn't have — a true full-service edible garden company that designs, builds, and <em>stays</em>.</p>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, color: 'var(--soil-700)', margin: 0 }}>Today, a team of six certified GreenThumbs tends hundreds of gardens from Boca to Jupiter. Every member still gets Jack's personal follow-up call — because you're not just a client, you're part of the movement.</p>
          </div>
        </div>
      </div></section>

      {/* VALUES */}
      <section className="section"><div className="wrap">
        <div className="sec-head center">
          <p className="eyebrow" style={{ textAlign: 'center' }}>What we believe</p>
          <h2 className="display">The roots of everything we do.</h2>
        </div>
        <div className="grid-3">
          {[
            ['cycle', 'Regenerative by default', 'Living soil, companion planting, and pollinators — gardens that give back more than they take.'],
            ['heart', 'We stay with you', 'Anyone can build a bed. We measure success in seasons, not installs.'],
            ['pin', 'Rooted in South Florida', 'We plant to our real local calendar — never a national chart that fails in our heat.'],
            ['basket', 'Abundance is shared', 'Overflowing beds mean food for neighbors, friends, and community tables.'],
            ['book', 'Teach, don\u2019t gatekeep', 'Members get our real knowledge — be as hands-on or hands-off as you like.'],
            ['spark', 'Quietly premium', 'Great design disappears. We sweat the details so your garden just feels effortless.'],
          ].map(([icon, title, body]) => (
            <div key={title} className="card"><div className="bd" style={{ padding: '26px 28px 28px', gap: 8 }}>
              <span style={{ color: 'var(--green-deep)' }}><Icon name={icon} size={28} /></span>
              <h3 style={{ fontSize: 22 }}>{title}</h3>
              <p>{body}</p>
            </div></div>
          ))}
        </div>
      </div></section>

      {/* PRESS / STATS */}
      <section className="section band-mist"><div className="wrap" style={{ textAlign: 'center' }}>
        <p className="eyebrow" style={{ textAlign: 'center' }}>The movement in numbers</p>
        <h2 className="display" style={{ fontSize: 46, marginBottom: 44 }}>Growing across South Florida.</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 56, flexWrap: 'wrap' }}>
          {[['500+', 'Garden beds planted'], ['150+', 'Families growing'], ['20+', 'Community gardens'], ['6', 'Certified GreenThumbs']].map(([v, l]) => (
            <div key={l}>
              <div className="display" style={{ fontSize: 60, color: 'var(--green-deep)' }}>{v}</div>
              <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 14, color: 'var(--soil-700)', textTransform: 'uppercase', letterSpacing: '.06em', marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
        <div className="pill-note" style={{ marginTop: 44 }}><Icon name="broadcast" size={16} style={{ color: 'var(--green-lime)' }} /> As seen on <b>WPBF&nbsp;25 News</b></div>
      </div></section>

      <CTABand go={go} />
    </div>
  );
}
window.About = About;
