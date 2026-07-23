// UA 2.0 — How It Works
function HowItWorks({ go }) {
  const { Reveal, CTABand, Icon } = window;
  const phases = [
    {
      n: '01', tag: 'Plan', title: 'Garden planning & design consultation',
      lead: 'Every great harvest starts with a plan.',
      quote: 'We don\u2019t just put beds in the ground. We create a vision for your food future.',
      img: './assets/photos/courtyard-beds.png',
      points: ['We assess your site — sunlight, soil, water flow, and space', 'A personalized seasonal planting plan built around your goals', 'Companion planting + natural pest-deterrent strategy', 'Custom layout optimized for beauty, yield, and access'],
    },
    {
      n: '02', tag: 'Build', title: 'Turnkey installation or garden reboot',
      lead: 'You don\u2019t lift a finger — we handle everything.',
      quote: 'A thriving garden from day one — even if we\u2019re rebuilding what you already have.',
      img: './assets/photos/bed-in-a-day.jpg',
      points: ['Full-service raised beds, soil prep, compost & irrigation', 'Already have a garden? A lower-cost Reboot brings it back to life', 'Soil-health protocol for long-term fertility & water efficiency', 'First round of planting included — no waiting to grow'],
    },
    {
      n: '03', tag: 'Thrive', title: 'Ongoing garden stewardship membership',
      lead: 'The single biggest reason our clients succeed.',
      quote: 'Think of us like a pool or lawn service — but for your food garden.',
      img: './assets/photos/customer-garden.jpg',
      points: ['Bi-weekly visits: weeding, pruning, planting, fertilizing, pest control', 'A guaranteed service schedule — no guessing, no gaps', 'Seasonal transitions fully handled, all year', 'Optional harvesting + detailed visit reports every time'],
    },
  ];
  return (
    <div>
      {/* HERO */}
      <section className="band-mist" style={{ padding: '80px 0' }}><div className="narrow" style={{ textAlign: 'center' }}>
        <p className="eyebrow" style={{ textAlign: 'center' }}>How it works</p>
        <h1 className="display" style={{ fontSize: 74, marginBottom: 20 }}>The only <span className="hl">full-service</span> edible garden in the region.</h1>
        <p className="lede" style={{ maxWidth: 560, margin: '0 auto' }}>Design, installation, and bi-weekly care — one team, one plan, from empty yard to overflowing harvest.</p>
      </div></section>

      {/* PHASES */}
      <section className="section"><div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 88 }}>
        {phases.map((p, i) => (
          <Reveal key={p.n}><div className="ua-split" style={{ display: 'grid', gridTemplateColumns: i % 2 ? '1fr 1fr' : '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div style={{ order: i % 2 ? 2 : 1, position: 'relative' }}>
              <img src={p.img} alt={p.title} style={{ width: '100%', height: 460, objectFit: 'cover', borderRadius: i % 2 ? '28px 28px 28px 140px' : '28px 28px 140px 28px', boxShadow: '0 24px 50px rgba(51,48,42,.16)' }} />
            </div>
            <div style={{ order: i % 2 ? 1 : 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <span className="stepno">{p.n}</span>
                <span className="eyebrow" style={{ margin: 0 }}>{p.tag}</span>
              </div>
              <h2 className="display" style={{ fontSize: 42, marginBottom: 12 }}>{p.title}</h2>
              <p style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 22, color: 'var(--green-deep)', margin: '0 0 20px' }}>{p.lead}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {p.points.map(pt => (
                  <li key={pt} style={{ display: 'flex', gap: 11, fontSize: 16, color: 'var(--soil-700)', lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--green-deep)', flex: 'none', marginTop: 2 }}><Icon name="check" size={18} /></span>{pt}
                  </li>
                ))}
              </ul>
              <p style={{ borderLeft: '3px solid var(--green-lime)', paddingLeft: 16, fontStyle: 'italic', fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--soil-700)', margin: 0 }}>{p.quote}</p>
            </div>
          </div></Reveal>
        ))}
      </div></section>

      {/* BONUSES */}
      <section className="section band-bone"><div className="wrap">
        <div className="sec-head center">
          <p className="eyebrow" style={{ textAlign: 'center' }}>Only from Urban Abundance</p>
          <h2 className="display">Every member gets the <span className="hl leaf">extras.</span></h2>
        </div>
        <div className="grid-3">
          {[
            ['chat', 'Direct access to our team', 'Season-long Q&A by text or email, plus guides and seasonal tips you won\u2019t find online. Be as hands-on or hands-off as you like.'],
            ['phone', 'Follow-up call with Farmer Jack', 'A 20-minute strategy session within 30 days of install to review your goals and set you up for long-term success.'],
            ['gift', 'Client welcome pack', 'An Urban Abundance tee, a signature grower\u2019s hat, and a Garden Proud sticker. You\u2019re part of a movement to grow what matters.'],
          ].map(([icon, title, body]) => (
            <div key={title} className="card"><div className="bd" style={{ padding: '30px 30px 32px', gap: 12 }}>
              <span style={{ color: 'var(--green-deep)' }}><Icon name={icon} size={30} /></span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div></div>
          ))}
        </div>
      </div></section>

      {/* WHY IT WORKS — timeline */}
      <section className="section band-dark"><div className="wrap">
        <div style={{ maxWidth: 720, marginBottom: 56 }}>
          <p className="eyebrow on-dark">Why it works</p>
          <h2 className="display" style={{ fontSize: 46, marginBottom: 14 }}>Most companies build your beds and leave. <span className="hl leaf">We stay.</span></h2>
          <p className="lede">Anyone can drop a bed in the ground. Our whole model is built around what happens after — season after season.</p>
        </div>
        <div style={{ position: 'relative' }}>
          <div className="tl-line" style={{ position: 'absolute', top: 34, left: '10%', right: '10%', height: 2, background: 'rgba(255,255,255,.16)' }} />
          <div className="ua-split" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 18, position: 'relative' }}>
            {[
              ['ruler', 'Design', 'We plan around your goals'],
              ['basket', 'Installation', 'Beds, soil & first planting'],
              ['cycle', 'Bi-weekly care', 'We tend it every visit'],
              ['chat', 'Personal support', 'A GreenThumb on call'],
              ['leaf', 'Thriving garden', 'Harvests, season after season'],
            ].map(([ic, title, cap], i, a) => {
              const last = i === a.length - 1;
              return (
                <div key={title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 12 }}>
                  <div style={{ width: 68, height: 68, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: last ? 'var(--green-lime)' : 'rgba(255,255,255,.06)', border: `2px solid ${last ? 'var(--green-lime)' : 'rgba(255,255,255,.18)'}`, color: last ? 'var(--soil-900)' : 'var(--green-lime)' }}><Icon name={ic} size={30} /></div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(252,251,246,.5)', marginBottom: 5 }}>{`0${i + 1}`}</div>
                    <div style={{ fontFamily: 'var(--display)', fontWeight: 600, fontSize: 21, color: '#fff', marginBottom: 4 }}>{title}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.45, color: 'rgba(252,251,246,.66)', maxWidth: 170, margin: '0 auto' }}>{cap}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="ua-split" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 18, marginTop: 30 }}>
            <div style={{ borderTop: '2px solid rgba(255,255,255,.22)', paddingTop: 12, textAlign: 'center', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(252,251,246,.55)' }}>Where most companies stop</div>
            <div style={{ borderTop: '2px solid var(--green-lime)', paddingTop: 12, textAlign: 'center', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--green-lime)' }}>Where Urban Abundance keeps going</div>
          </div>
        </div>
      </div></section>

      <CTABand go={go} />
    </div>
  );
}
window.HowItWorks = HowItWorks;
