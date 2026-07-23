// UA 2.0 — Commercial
function Commercial({ go }) {
  const { Reveal, CTABand, Icon } = window;
  const partners = [
    { name: 'Restaurant Garden', pitch: 'Farm-to-table, steps from the kitchen', price: 'Custom', beds: 'On-site chef beds', feat: ['Menu-driven crop planning', 'Commercial-grade raised beds', 'Weekly GreenThumb service', 'Seasonal chef consultations', 'Harvest delivered to the pass'], accent: false },
    { name: 'Community & Wellness', pitch: 'For community centers & care facilities', price: 'Custom', beds: 'Accessible bed layouts', feat: ['ADA-accessible, raised designs', 'Therapeutic planting programs', 'Resident & staff education', 'Full bi-weekly maintenance', 'Seasonal events & harvests'], accent: true },
    { name: 'Enterprise / Multi-site', pitch: 'HOAs, developers & new construction', price: 'Let\u2019s talk', beds: 'Portfolio-wide', feat: ['Multi-property design standards', 'Dedicated account GreenThumb', 'Consolidated reporting', 'Amenity & marketing support', 'Priority regional scheduling'], accent: false },
  ];
  return (
    <div>
      {/* HERO */}
      <section style={{ padding: '60px 0 44px' }}><div className="wrap">
        <div className="ua-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <p className="eyebrow">Commercial gardens</p>
            <h1 className="display" style={{ fontSize: 74, marginBottom: 22 }}>Farm-to-table,<br /><span className="hl">built right in.</span></h1>
            <p className="lede" style={{ maxWidth: 460, marginBottom: 30 }}>From restaurants to wellness campuses, we design, install, and maintain productive edible gardens at any scale — so your team harvests fresh, and never lifts a shovel.</p>
            <div style={{ display: 'flex', gap: 14 }}>
              <a className="btn btn-lime" onClick={() => go('contact')}>Book a free consultation →</a>
              <a className="btn btn-ghost" onClick={() => go('how')}>How it works</a>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <img src="./assets/photos/waterfront-bed.png" alt="Commercial edible garden installation" style={{ width: '100%', height: 500, objectFit: 'cover', borderRadius: '28px 28px 28px 140px', boxShadow: '0 30px 60px rgba(51,48,42,.18)' }} />
          </div>
        </div>
      </div></section>

      {/* SEGMENTS */}
      <section className="section tight band-bone"><div className="wrap">
        <div className="sec-head center" style={{ marginBottom: 40 }}>
          <p className="eyebrow" style={{ textAlign: 'center' }}>Who we grow for</p>
          <h2 className="display">Edible spaces for every kind of table.</h2>
        </div>
        <div className="grid-2" style={{ gap: 26 }}>
          {[
            ['basket', 'Restaurants', 'Farm-to-table has never been so easy. Chef-driven beds that put the freshest ingredients steps from your kitchen.'],
            ['heart', 'Community gardens', 'Edible spaces for community centers — grown to gather, share, and thrive together.'],
            ['sun', 'Assisted living', 'Therapeutic, accessible gardens that nourish body and spirit, designed for every ability.'],
            ['leaf', 'Treatment centers', 'Healing spaces that grow wellness and connection as part of the recovery journey.'],
          ].map(([icon, title, body]) => (
            <Reveal key={title}><div className="card" style={{ flexDirection: 'row' }}>
              <div className="bd" style={{ padding: '28px 30px', gap: 10 }}>
                <span style={{ color: 'var(--green-deep)' }}><Icon name={icon} size={30} /></span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </div></Reveal>
          ))}
        </div>
      </div></section>

      {/* WHAT'S INCLUDED */}
      <section className="section"><div className="wrap">
        <div className="ua-split" style={{ display: 'grid', gridTemplateColumns: '.95fr 1.05fr', gap: 60, alignItems: 'center' }}>
          <img src="./assets/photos/courtyard-beds.png" alt="Commercial courtyard beds" style={{ width: '100%', height: 480, objectFit: 'cover', borderRadius: '140px 28px 28px 28px', boxShadow: '0 24px 50px rgba(51,48,42,.16)' }} />
          <div>
            <p className="eyebrow">Fully managed</p>
            <h2 className="display" style={{ fontSize: 46, marginBottom: 20 }}>A turnkey program your team never has to think about.</h2>
            <div className="grid-2" style={{ gap: 16 }}>
              {['Site & menu-driven design', 'Commercial-grade beds', 'Automated irrigation', 'Crop & rotation planning', 'Weekly GreenThumb care', 'Staff & resident education', 'Harvest coordination', 'Seasonal reporting'].map(f => (
                <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 16, color: 'var(--soil-700)', fontWeight: 600 }}>
                  <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--green-mist)', color: 'var(--green-deep)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name="check" size={15} /></span>{f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div></section>

      {/* PARTNER OPTIONS */}
      <section className="section band-mist"><div className="wrap">
        <div className="sec-head center">
          <p className="eyebrow" style={{ textAlign: 'center' }}>How we partner</p>
          <h2 className="display">Programs scaled to <span className="hl leaf">your operation.</span></h2>
          <p className="lede">Every commercial engagement is quoted to your space, goals, and service cadence. Here's where most partners start.</p>
        </div>
        <div className="grid-3" style={{ alignItems: 'stretch' }}>
          {partners.map(t => (
            <div key={t.name} className="card" style={{ border: t.accent ? '2px solid var(--green-deep)' : '1px solid var(--sand-200)', boxShadow: t.accent ? '0 24px 50px rgba(38,79,32,.16)' : '0 10px 30px rgba(51,48,42,.07)', position: 'relative', transform: t.accent ? 'translateY(-8px)' : 'none' }}>
              {t.accent && <span style={{ position: 'absolute', top: 18, right: 18, background: 'var(--green-lime)', color: 'var(--soil-900)', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12, padding: '5px 12px', borderRadius: 7 }}>Most common</span>}
              <div className="bd" style={{ padding: '32px 30px 34px', gap: 8 }}>
                <h3 style={{ fontSize: 24 }}>{t.name}</h3>
                <p style={{ color: 'var(--taupe)', fontWeight: 600 }}>{t.pitch}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '10px 0 2px' }}>
                  <span className="display" style={{ fontSize: 40, color: 'var(--green-deep)' }}>{t.price}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 14, color: 'var(--soil-900)', margin: '0 0 8px' }}>{t.beds}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {t.feat.map(f => (
                    <li key={f} style={{ display: 'flex', gap: 9, fontSize: 14.5, color: 'var(--soil-700)' }}>
                      <span style={{ color: 'var(--green-deep)', flex: 'none', marginTop: 1 }}><Icon name="check" size={16} /></span>{f}
                    </li>
                  ))}
                </ul>
                <a className={t.accent ? 'btn btn-green' : 'btn btn-ghost'} style={{ marginTop: 'auto', justifyContent: 'center' }} onClick={() => go('contact')}>Request a quote</a>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', color: 'var(--taupe)', fontSize: 14, marginTop: 26 }}>Design &amp; installation quoted after a free on-site consultation · Volume &amp; multi-site pricing available</p>
      </div></section>

      <CTABand go={go} />
    </div>
  );
}
window.Commercial = Commercial;
