// UA 2.0 — Residential
function Residential({ go }) {
  const { Reveal, CTABand, Icon } = window;
  const tiers = [
    { name: 'Kitchen Garden', pitch: 'Perfect for first-time growers', price: '159', beds: '1 garden bed', feat: ['Design & consultation', 'Turnkey install + first planting', 'Bi-weekly GreenThumb visits', 'Seasonal replanting', 'Text & email support'], accent: false },
    { name: 'Family Harvest', pitch: 'Our most popular plan', price: '299', beds: '3 garden beds', feat: ['Everything in Kitchen Garden', 'Larger seasonal crop plan', 'Optional harvesting service', 'Follow-up call with Farmer Jack', 'Priority scheduling'], accent: true },
    { name: 'Estate', pitch: 'For chefs & entertainers', price: 'Custom', beds: '4+ beds / food forest', feat: ['Everything in Family Harvest', 'Orchard & pollinator design', 'Weekly visits available', 'Dedicated account GreenThumb', 'Event & harvest coordination'], accent: false },
  ];
  return (
    <div>
      {/* HERO */}
      <section style={{ padding: '60px 0 44px' }}><div className="wrap">
        <div className="ua-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <p className="eyebrow">Residential gardens</p>
            <h1 className="display" style={{ fontSize: 78, marginBottom: 22 }}>Your backyard,<br /><span className="hl">quietly abundant.</span></h1>
            <p className="lede" style={{ maxWidth: 460, marginBottom: 30 }}>For homeowners who want the joy of fresh, homegrown food — without the labor, stress, or failed experiments. A garden that works, and stays working.</p>
            <div style={{ display: 'flex', gap: 14 }}>
              <a className="btn btn-lime" onClick={() => go('contact')}>Book a free assessment →</a>
              <a className="btn btn-ghost" onClick={() => go('how')}>How it works</a>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <img src="./assets/photos/poolside-beds.png" alt="Residential edible garden" style={{ width: '100%', height: 500, objectFit: 'cover', borderRadius: '28px 28px 28px 140px', boxShadow: '0 30px 60px rgba(51,48,42,.18)' }} />
          </div>
        </div>
      </div></section>

      {/* WHO IT'S FOR */}
      <section className="section tight band-bone"><div className="wrap">
        <div className="sec-head center" style={{ marginBottom: 40 }}>
          <p className="eyebrow" style={{ textAlign: 'center' }}>Who it's for</p>
          <h2 className="display">If any of this sounds familiar, you're home.</h2>
        </div>
        <div className="grid-3">
          {[
            ['basket', '"I want fresh food"', 'You love the idea of picking dinner from your own yard — you just don\u2019t know where to start.'],
            ['clock', '"I don\u2019t have time"', 'Between work and family, keeping a garden alive feels like one more job. We make it effortless.'],
            ['sprout', '"I kill every plant"', 'Past attempts fizzled. With a GreenThumb on your team, your garden finally thrives.'],
          ].map(([icon, title, body]) => (
            <div key={title} className="card"><div className="bd" style={{ padding: '28px 28px 30px', gap: 10 }}>
              <span style={{ color: 'var(--green-deep)' }}><Icon name={icon} size={30} /></span>
              <h3 style={{ fontSize: 23 }}>{title}</h3>
              <p>{body}</p>
            </div></div>
          ))}
        </div>
      </div></section>

      {/* WHAT'S INCLUDED */}
      <section className="section"><div className="wrap">
        <div className="ua-split" style={{ display: 'grid', gridTemplateColumns: '.95fr 1.05fr', gap: 60, alignItems: 'center' }}>
          <img src="./assets/photos/waterfront-bed.png" alt="Waterfront raised beds" style={{ width: '100%', height: 480, objectFit: 'cover', borderRadius: '140px 28px 28px 28px', boxShadow: '0 24px 50px rgba(51,48,42,.16)' }} />
          <div>
            <p className="eyebrow">All-in-one</p>
            <h2 className="display" style={{ fontSize: 46, marginBottom: 20 }}>Everything to grow. Nothing to manage.</h2>
            <div className="grid-2" style={{ gap: 16 }}>
              {['Custom design', 'Raised beds & soil', 'Drip irrigation', 'First planting', 'Bi-weekly care', 'Seasonal replanting', 'Pest management', 'Visit reports'].map(f => (
                <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 16, color: 'var(--soil-700)', fontWeight: 600 }}>
                  <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--green-mist)', color: 'var(--green-deep)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name="check" size={15} /></span>{f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div></section>

      {/* PRICING */}
      <section className="section band-mist"><div className="wrap">
        <div className="sec-head center">
          <p className="eyebrow" style={{ textAlign: 'center' }}>Membership plans</p>
          <h2 className="display">One simple monthly plan. <span className="hl leaf">Everything included.</span></h2>
          <p className="lede">Transparent pricing based on garden size &amp; site complexity. Save with annual pre-pay.</p>
        </div>
        <div className="grid-3" style={{ alignItems: 'stretch' }}>
          {tiers.map(t => (
            <div key={t.name} className="card" style={{ border: t.accent ? '2px solid var(--green-deep)' : '1px solid var(--sand-200)', boxShadow: t.accent ? '0 24px 50px rgba(38,79,32,.16)' : '0 10px 30px rgba(51,48,42,.07)', position: 'relative', transform: t.accent ? 'translateY(-8px)' : 'none' }}>
              {t.accent && <span style={{ position: 'absolute', top: 18, right: 18, background: 'var(--green-lime)', color: 'var(--soil-900)', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12, padding: '5px 12px', borderRadius: 7 }}>Most popular</span>}
              <div className="bd" style={{ padding: '32px 30px 34px', gap: 8 }}>
                <h3 style={{ fontSize: 24 }}>{t.name}</h3>
                <p style={{ color: 'var(--taupe)', fontWeight: 600 }}>{t.pitch}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '10px 0 2px' }}>
                  <span className="display" style={{ fontSize: 46, color: 'var(--green-deep)' }}>{t.price === 'Custom' ? 'Custom' : '$' + t.price}</span>
                  {t.price !== 'Custom' && <span style={{ color: 'var(--taupe)', fontWeight: 600 }}>/mo</span>}
                </div>
                <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 14, color: 'var(--soil-900)', margin: '0 0 8px' }}>{t.beds}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {t.feat.map(f => (
                    <li key={f} style={{ display: 'flex', gap: 9, fontSize: 14.5, color: 'var(--soil-700)' }}>
                      <span style={{ color: 'var(--green-deep)', flex: 'none', marginTop: 1 }}><Icon name="check" size={16} /></span>{f}
                    </li>
                  ))}
                </ul>
                <a className={t.accent ? 'btn btn-green' : 'btn btn-ghost'} style={{ marginTop: 'auto', justifyContent: 'center' }} onClick={() => go('contact')}>{t.price === 'Custom' ? 'Request a quote' : 'Get started'}</a>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', color: 'var(--taupe)', fontSize: 14, marginTop: 26 }}>Install &amp; design quoted separately after your free assessment · Reboot pricing available for existing gardens</p>
      </div></section>

      <CTABand go={go} />
    </div>
  );
}
window.Residential = Residential;
