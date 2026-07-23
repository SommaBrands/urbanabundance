// UA 2.0 — Home
function Home({ go }) {
  const { Reveal, CTABand, Icon, Stars } = window;
  return (
    <div>
      {/* HERO */}
      <section style={{ padding: '60px 0 44px' }}><div className="wrap">
        <div className="ua-split" style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 60, alignItems: 'center' }}>
          <div>
            <p className="eyebrow">Concierge edible gardens · South Florida</p>
            <h1 className="display" style={{ fontSize: 90, marginBottom: 26 }}>You relax.<br />We <span className="hl">grow.</span></h1>
            <p className="lede" style={{ maxWidth: 460, marginBottom: 32 }}>Your own GreenThumb designs, builds, and tends a thriving organic garden in your backyard. You just step outside and pick dinner.</p>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 30 }}>
              <a className="btn btn-lime" onClick={() => go('contact')}>Book a free garden assessment →</a>
              <a className="btn btn-ghost" onClick={() => go('how')}>See how it works</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
              {[['sprout', 'Fully managed'], ['cycle', 'Year-round harvests'], ['leaf', '100% organic']].map(([ic, label], i, a) => (
                <React.Fragment key={label}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 14.5, color: 'var(--soil-900)' }}><Icon name={ic} size={18} style={{ color: 'var(--green-deep)' }} /> {label}</span>
                  {i < a.length - 1 && <span style={{ width: 1, height: 18, background: 'var(--sand-200)' }} />}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <video src="./assets/video/home-hero.mp4" poster="./assets/photos/luxury-patio.jpg" autoPlay muted loop playsInline aria-label="Edible garden beside a South Florida pool" style={{ width: '100%', height: 560, objectFit: 'cover', borderRadius: '28px 28px 140px 28px', boxShadow: '0 30px 60px rgba(51,48,42,.18)', display: 'block' }} />
            <div style={{ position: 'absolute', top: 26, left: -26, background: 'var(--paper)', borderRadius: 18, padding: '15px 20px', boxShadow: '0 16px 36px rgba(51,48,42,.16)' }}>
              <Stars size={15} />
              <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 14, marginTop: 3 }}>4.9 · Loved locally</div>
              <div style={{ fontFamily: 'var(--font-ui)', fontSize: 12, color: 'var(--taupe)' }}>150+ South Florida families</div>
            </div>
            <div className="pill-note" style={{ position: 'absolute', bottom: 30, left: -26 }}><Icon name="broadcast" size={16} style={{ color: 'var(--green-lime)' }} /> As seen on <b>WPBF&nbsp;25</b></div>
            
          </div>
        </div>
      </div></section>

      {/* PROOF STRIP */}
      <section className="band-bone" style={{ borderTop: '1px solid var(--sand-200)', borderBottom: '1px solid var(--sand-200)' }}><div className="wrap" style={{ padding: '48px 40px' }}>
        <p className="eyebrow" style={{ textAlign: 'center', marginBottom: 28 }}>Trusted across South Florida</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', gap: 0, flexWrap: 'wrap' }}>
          {[['calendar', '12', 'Growing months a year'], ['sprout', '500+', 'Garden beds planted'], ['heart', '300+', 'Families growing']].map(([ic, v, l], i) => (
            <React.Fragment key={l}>
              {i > 0 && <span style={{ width: 1, background: 'var(--sand-200)', margin: '0 clamp(24px,5vw,64px)' }} />}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 6, minWidth: 150 }}>
                <span style={{ color: 'var(--green-deep)' }}><Icon name={ic} size={26} /></span>
                <span className="display" style={{ fontSize: 60, lineHeight: 1, color: 'var(--green-deep)' }}>{v}</span>
                <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 14, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--taupe)' }}>{l}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div></section>

      {/* START WITH YOUR SPACE — Vego-style guided path */}
      <section className="section tight"><div className="wrap">
        <div className="sec-head center" style={{ marginBottom: 40 }}>
          <p className="eyebrow" style={{ textAlign: 'center' }}>Start with your space</p>
          <h2 className="display">Where do you want to <span className="hl leaf">grow?</span></h2>
          <p className="lede">Tell us your space and we'll design the right beds, crops, and care plan around it.</p>
        </div>
        <div className="grid-3">
          {[
            ['Backyard', 'Big dreams, bigger harvests. Full raised-bed gardens built for South Florida sun.', './assets/photos/customer-garden.jpg'],
            ['Patio & poolside', 'Small space, big flavor. Elevated beds and planters that fit any footprint.', './assets/photos/poolside-beds.png'],
            ['Restaurants & estates', 'Chef gardens and food forests, designed and tended at scale.', './assets/photos/waterfront-bed.png'],
          ].map(([title, body, img]) => (
            <Reveal key={title}><a className="card" style={{ cursor: 'pointer' }} onClick={() => go('contact')}>
              <div className="ph"><img src={img} alt={title} /></div>
              <div className="bd">
                <h3>{title}</h3>
                <p>{body}</p>
                <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, color: 'var(--green-deep)', marginTop: 4 }}>Design mine →</span>
              </div>
            </a></Reveal>
          ))}
        </div>
      </div></section>

      {/* 3-STEP */}
      <section className="section"><div className="wrap">
        <div className="sec-head center">
          <p className="eyebrow" style={{ textAlign: 'center' }}>The all-in-one service</p>
          <h2 className="display">Three steps to a garden that <span className="hl leaf">actually works.</span></h2>
          <p className="lede">Most companies build beds and leave. We design it, build it, and stay — season after season.</p>
        </div>
        <div className="grid-3">
          {[
            ['01', 'design', 'Design & consultation', 'We assess your sunlight, soil, and space, then build a personalized seasonal planting plan around your goals — salads, herbs, fruit, and more.', './assets/photos/courtyard-beds.png'],
            ['02', 'install', 'Turnkey installation', 'You don\u2019t lift a finger. Raised beds, soil prep, compost, and irrigation — planted and thriving from day one. Already have a garden? Ask about a Reboot.', './assets/photos/bed-in-a-day.jpg'],
            ['03', 'maintain', 'Stewardship membership', 'Bi-weekly GreenThumb visits handle weeding, planting, pests, and seasonal transitions. You get the harvest and the reports — none of the work.', './assets/photos/customer-garden.jpg'],
          ].map(([n, id, title, body, img]) => (
            <Reveal key={id}><div className="card" style={{ cursor: 'pointer' }} onClick={() => go('how')}>
              <div className="ph"><img src={img} alt={title} /></div>
              <div className="bd">
                <span className="stepno">{n}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </div></Reveal>
          ))}
        </div>
      </div></section>

      {/* VEGO PARTNER — the beds we build with */}
      <section className="section band-bone"><div className="wrap">
        <div className="ua-split" style={{ display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: 56, alignItems: 'center' }}>
          <div>
            <p className="eyebrow">Official Vego Garden partner</p>
            <h2 className="display" style={{ fontSize: 46, marginBottom: 16 }}>The best beds in the business. <span className="hl leaf">Built into every install.</span></h2>
            <p className="lede" style={{ marginBottom: 22 }}>We design, deliver, and plant Vego Garden's modular metal raised beds — rust-proof, food-safe, and built to last decades. Choose your finish; we handle the rest.</p>
            <div style={{ marginBottom: 8, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 13, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--taupe)' }}>Signature finishes</div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 26 }}>
              {[['Olive Green', '#6E7346'], ['British Green', '#2F4A38'], ['Terra Cotta', '#B15C38'], ['Modern Gray', '#8C8F91'], ['Pearl White', '#ECE8DF'], ['Sky Blue', '#A9C2CC'], ['Sunlit Oak', '#B4884E']].map(([name, hex]) => (
                <div key={name} title={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 62 }}>
                  <span style={{ width: 34, height: 34, borderRadius: '50%', background: hex, border: '2px solid #fff', boxShadow: '0 2px 8px rgba(51,48,42,.18)' }}></span>
                  <span style={{ fontSize: 10.5, color: 'var(--taupe)', textAlign: 'center', lineHeight: 1.15 }}>{name}</span>
                </div>
              ))}
            </div>
            <a className="btn btn-green" onClick={() => go('contact')}>Get these in your garden →</a>
          </div>
          <div className="grid-3">
            {[
              ['17" Modular Bed', '9-in-1 · classic', '179', '259', '7.7k', './assets/photos/bed-in-a-day.jpg'],
              ['32" Extra-Tall Bed', '9-in-1 · no bending', '289', '419', '7.7k', './assets/photos/courtyard-beds.png'],
              ['Elevated Bed 2×6', 'Patio · waist-high', '339', '379', '750', './assets/photos/poolside-beds.png'],
            ].map(([name, sub, price, was, revs, img]) => (
              <div key={name} className="card">
                <div className="ph" style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', top: 22, left: 22, background: 'var(--green-lime)', color: 'var(--soil-900)', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12, padding: '4px 10px', borderRadius: 7, zIndex: 2 }}>Partner price</span>
                  <img src={img} alt={name} style={{ height: 150 }} />
                </div>
                <div className="bd" style={{ padding: '18px 20px 22px', gap: 6 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Stars size={13} /><span style={{ color: 'var(--taupe)', fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 12 }}>({revs})</span></span>
                  <h3 style={{ fontSize: 19 }}>{name}</h3>
                  <p style={{ fontSize: 13, color: 'var(--taupe)' }}>{sub}</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 2 }}>
                    <span className="display" style={{ fontSize: 24, color: 'var(--green-deep)' }}>${price}</span>
                    <span style={{ fontSize: 14, color: 'var(--taupe)', textDecoration: 'line-through' }}>${was}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div></section>

      {/* MEMBERSHIP TEASER */}
      <section className="section band-mist"><div className="wrap">
        <div className="ua-split" style={{ display: 'grid', gridTemplateColumns: '.95fr 1.05fr', gap: 60, alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img src="./assets/photos/patio-garden.avif" alt="GreenThumb tending a garden" style={{ width: '100%', height: 480, objectFit: 'cover', borderRadius: '28px 140px 28px 28px', boxShadow: '0 24px 50px rgba(51,48,42,.16)' }} />
          </div>
          <div>
            <p className="eyebrow">Like a pool service — for food</p>
            <h2 className="display" style={{ fontSize: 50, marginBottom: 18 }}>A membership that keeps your garden thriving.</h2>
            <p className="lede" style={{ marginBottom: 24 }}>The single biggest reason our clients succeed. A guaranteed bi-weekly schedule, seasonal replanting, and a GreenThumb on call — all covered by one simple monthly plan.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Bi-weekly expert visits — no gaps, no guessing', 'Seasonal transitions fully handled', 'Optional harvesting — we\u2019ll pick it for you', 'Detailed visit reports every time'].map(b => (
                <li key={b} style={{ display: 'flex', gap: 11, fontSize: 16, color: 'var(--soil-700)', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--green-deep)', flex: 'none', marginTop: 2 }}><Icon name="check" size={18} /></span>{b}
                </li>
              ))}
            </ul>
            <a className="btn btn-green" onClick={() => go('residential')}>See membership &amp; pricing →</a>
          </div>
        </div>
      </div></section>

      {/* SEASONAL — WHAT'S GROWING NOW */}
      <section className="section"><div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">What's growing now · Winter 2026</p>
          <h2 className="display">South Florida grows on its <span className="hl leaf">own calendar.</span></h2>
          <p className="lede">We plant to our real seasons — not a national chart. Here's a taste of what's thriving in members' beds this month.</p>
        </div>
        <div className="chips" style={{ gap: 12 }}>
          {[['leaf', 'Leaf lettuce'], ['fruit', 'Everglades tomatoes'], ['fruit', 'Peppers'], ['sprout', 'Brassicas'], ['herb', 'Cilantro & dill'], ['sprout', 'Snap peas'], ['carrot', 'Rainbow carrots'], ['flower', 'Edible flowers'], ['herb', 'Green onions'], ['fruit', 'Strawberries']].map(([ic, label]) => (
            <span key={label} className="chip" style={{ fontSize: 15, padding: '10px 18px' }}><Icon name={ic} size={17} style={{ color: 'var(--green-deep)' }} /> {label}</span>
          ))}
        </div>
      </div></section>

      {/* VISIT — SmartyPlants nursery */}
      <section className="section band-bone"><div className="wrap">
        <div className="ua-split" style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 56, alignItems: 'center' }}>
          <div>
            <p className="eyebrow">Now at SmartyPlants Nursery</p>
            <h2 className="display" style={{ fontSize: 46, marginBottom: 16 }}>Come grow with us in <span className="hl leaf">Lake Worth.</span></h2>
            <p className="lede" style={{ marginBottom: 22 }}>You'll find Urban Abundance at SmartyPlants Nursery. Stop by to pick out plants, herbs, and trees — or sit down with a GreenThumb to design the edible garden of your dreams.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 26px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[['basket', 'Shop non-GMO, organic plants grown in our own nursery'], ['sprout', 'Meet a GreenThumb to plan and design your garden'], ['leaf', 'Get seasonal advice for your South Florida yard']].map(([ic, t]) => (
                <li key={t} style={{ display: 'flex', gap: 11, alignItems: 'flex-start', fontSize: 16, color: 'var(--soil-700)' }}><span style={{ color: 'var(--green-deep)', flex: 'none', marginTop: 2 }}><Icon name={ic} size={20} /></span>{t}</li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
              <a className="btn btn-lime" href="https://maps.google.com/?q=1515+N+Dixie+Hwy+Lake+Worth+Beach+FL+33460" target="_blank" rel="noreferrer">Get directions →</a>
              <a className="btn btn-ghost" onClick={() => go('contact')}>Design your garden</a>
            </div>
            <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 14.5, color: 'var(--soil-900)', margin: '22px 0 0' }}>1515 N. Dixie Hwy, Lake Worth Beach, FL 33460 <span style={{ color: 'var(--taupe)', fontWeight: 600 }}>· Tues–Sat, 8:30am–5pm</span></p>
          </div>
          <div style={{ position: 'relative' }}>
            <img src="./assets/photos/courtyard-beds.png" alt="SmartyPlants Nursery in Lake Worth Beach" style={{ width: '100%', height: 480, objectFit: 'cover', borderRadius: '28px 28px 28px 140px', boxShadow: '0 24px 50px rgba(51,48,42,.16)' }} />
          </div>
        </div>
      </div></section>

      {/* IN THE PRESS */}
      <section className="section band-dark"><div className="wrap">
        <div className="ua-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div style={{ padding: 0 }}><img src="./assets/blog/wpbf-feature.png" alt="Urban Abundance founder Ryan Boylston featured on WPBF 25 News" style={{ width: '100%', borderRadius: 18, boxShadow: '0 24px 50px rgba(0,0,0,.32)' }} /></div>
          <div>
            <p className="eyebrow on-dark">In the press</p>
            <h2 className="display" style={{ fontSize: 44, marginBottom: 16 }}>“Your lettuce wasn’t put on a <span className="hl leaf">truck.”</span></h2>
            <p className="lede" style={{ marginBottom: 26 }}>WPBF 25 News featured our founder Ryan Boylston on why more South Florida families are growing their own food — food that goes straight from the yard to the table.</p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
              <a className="btn btn-lime" onClick={() => go('blog')}>Read the story →</a>
              <span className="pill-note"><Icon name="broadcast" size={16} style={{ color: 'var(--green-lime)' }} /> As seen on WPBF 25</span>
            </div>
          </div>
        </div>
      </div></section>

      {/* TESTIMONIALS */}
      <section className="section band-bone"><div className="wrap">
        <div className="sec-head center">
          <p className="eyebrow" style={{ textAlign: 'center' }}>Loved by growers</p>
          <h2 className="display">Neighbors who'll never buy grocery lettuce again.</h2>
        </div>
        <div className="grid-3">
          {[
            ['The kids beg to harvest dinner now. Our GreenThumb turned our empty side yard into the best part of our week.', 'Marisol R.', 'Delray Beach'],
            ['I travel constantly and my garden has never looked better. It just... keeps producing. Worth every penny.', 'David K.', 'Boca Raton'],
            ['We eat what we grow almost every night. It feels like having a private farmer. Truly the Four Seasons of gardening.', 'Priya & Sam', 'Jupiter'],
          ].map(([quote, name, city]) => (
            <div key={name} className="card"><div className="bd" style={{ gap: 16, padding: '30px 30px 32px' }}>
              <Stars size={16} />
              <p style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 21, lineHeight: 1.35, color: 'var(--soil-900)', letterSpacing: '-.01em' }}>"{quote}"</p>
              <div style={{ marginTop: 'auto' }}>
                <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 15 }}>{name}</div>
                <div style={{ fontSize: 13, color: 'var(--taupe)' }}>{city}, FL</div>
              </div>
            </div></div>
          ))}
        </div>
      </div></section>

      <CTABand go={go} />
    </div>
  );
}
window.Home = Home;
