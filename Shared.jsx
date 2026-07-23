// Shared chrome + UI helpers for the UA 2.0 prototype.
const NAV = [
  ['Home', 'home'],
  ['How It Works', 'how'],
  ['Residential', 'residential'],
  ['Commercial', 'commercial'],
  ['Our Story', 'about'],
  ['Contact', 'contact'],
];
const MAIN = [
  ['How It Works', 'how'],
  ['Residential', 'residential'],
  ['Commercial', 'commercial'],
  ['Contact', 'contact'],
];
const MORE = [
  ['Blog', 'blog'],
  ['Our Story', 'about'],
];

function Ticker() {
  const { Icon } = window;
  const items = [
    ['sprout', <>Now planting <b>Winter 2026</b> gardens</>],
    ['calendar', <>Free garden assessments open</>],
    ['broadcast', <>As seen on <b>WPBF 25 News</b></>],
    ['leaf', <>Fresh harvests, <b>zero effort</b></>],
  ];
  const run = [...items, ...items];
  return (
    <div className="ticker"><div className="run">
      {run.map((it, i) => <span key={i}><Icon name={it[0]} size={16} style={{ color: 'var(--green-lime)' }} /> {it[1]}</span>)}
    </div></div>
  );
}

function Header({ page, go }) {
  const { Icon } = window;
  const [moreOpen, setMoreOpen] = React.useState(false);
  const [navOpen, setNavOpen] = React.useState(false);
  const moreActive = MORE.some(([, id]) => id === page);
  const goM = (id) => { setNavOpen(false); go(id); };
  return (
    <header className="site">
      <div className="nav">
        <img className="logo" src="./assets/logo-horizontal.png" alt="Urban Abundance — edible garden design and maintenance" onClick={() => go('home')} />
        <div className="links">
          {MAIN.map(([label, id]) => (
            <a key={id} href={'/' + (id === 'home' ? '' : id)} className={page === id ? 'active' : ''} onClick={(e) => { e.preventDefault(); go(id); }}>{label}</a>
          ))}
          <div style={{ position: 'relative' }} onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
            <a className={moreActive ? 'active' : ''} style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }} onClick={() => setMoreOpen(o => !o)}>More <span style={{ display: 'inline-block', transform: moreOpen ? 'rotate(180deg)' : 'none', transition: 'transform .18s', fontSize: 11 }}>▾</span></a>
            {moreOpen && (
              <div style={{ position: 'absolute', top: '100%', left: -14, marginTop: 8, minWidth: 190, background: '#fff', border: '1px solid var(--sand-200)', borderRadius: 12, boxShadow: '0 16px 36px rgba(51,48,42,.14)', padding: 8, zIndex: 50 }}>
                {MORE.map(([label, id]) => (
                  <a key={id} onClick={() => { setMoreOpen(false); go(id); }} style={{ display: 'block', padding: '10px 12px', borderRadius: 8, fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 15, color: page === id ? 'var(--green-deep)' : 'var(--soil-700)', background: page === id ? 'var(--bone)' : 'transparent' }}>{label}</a>
                ))}
              </div>
            )}
          </div>
        </div>
        <span className="phone">561-319-1272</span>
        <a className="btn btn-lime sm" onClick={() => go('contact')}>Book Assessment</a>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setNavOpen(o => !o)}>
          <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ width: 20, height: 2, background: 'currentColor', borderRadius: 2, transition: 'transform .2s', transform: navOpen ? 'translateY(6px) rotate(45deg)' : 'none' }} />
            <span style={{ width: 20, height: 2, background: 'currentColor', borderRadius: 2, opacity: navOpen ? 0 : 1 }} />
            <span style={{ width: 20, height: 2, background: 'currentColor', borderRadius: 2, transition: 'transform .2s', transform: navOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
          </span>
        </button>
      </div>
      {navOpen && (
        <div className="mobile-menu">
          {[...MAIN, ...MORE].map(([label, id]) => (
            <a key={id} className={page === id ? 'active' : ''} onClick={() => goM(id)}>{label}</a>
          ))}
          <a href="tel:5613191272" style={{ color: 'var(--green-deep)', fontWeight: 700 }}>561-319-1272</a>
          <a className="btn btn-lime" style={{ justifyContent: 'center', marginTop: 8 }} onClick={() => goM('contact')}>Book Assessment</a>
        </div>
      )}
    </header>
  );
}

function Footer({ go }) {
  return (
    <footer className="site"><div className="wrap">
      <div className="cols">
        <div style={{ flex: '1 1 300px', minWidth: 260 }}>
          <img className="logo" src="./assets/logo-horizontal-white.png" alt="Urban Abundance" />
          <p style={{ fontSize: 15, lineHeight: 1.6, maxWidth: 300, margin: '0 0 18px' }}>Concierge edible gardens for South Florida. You relax, we grow — one garden at a time.</p>
          <div style={{ display: 'flex', gap: 10 }}>
            {[['instagram', 'https://www.instagram.com/urbanabundancefl/'], ['facebook', 'https://www.facebook.com/urbanabundancefl/'], ['youtube', 'https://www.youtube.com/channel/UClcT_BCIgVRiX_DppyD4B0Q']].map(([s, href]) => (
              <a key={s} href={href} target="_blank" rel="noreferrer" aria-label={s} style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-lime)' }}>
                <window.Icon name={s} size={18} />
              </a>
            ))}
          </div>
        </div>
        <div><h4>Explore</h4>{NAV.map(([l, id]) => <a key={id} onClick={() => go(id)}>{l}</a>)}</div>
        <div><h4>Services</h4><a onClick={() => go('how')}>Garden design</a><a onClick={() => go('how')}>Installation</a><a onClick={() => go('how')}>Maintenance membership</a><a onClick={() => go('residential')}>Residential</a></div>
        <div><h4>Visit</h4><a href="https://maps.google.com/?q=1515+N+Dixie+Hwy+Lake+Worth+Beach+FL+33460" target="_blank" rel="noreferrer">1515 N. Dixie Hwy, Lake Worth Beach</a><a>Tues–Sat, 8:30–5pm</a><a href="tel:5613191272">561-319-1272</a><a href="mailto:info@urbanabundance.com">info@urbanabundance.com</a></div>
      </div>
      <div className="bottom">
        <span>© Urban Abundance 2026 · Lake Worth Beach, FL</span>
        <span>Privacy · Terms</span>
      </div>
    </div></footer>
  );
}

// CTA band reused across pages
function CTABand({ go }) {
  return (
    <section className="section band-dark"><div className="wrap" style={{ textAlign: 'center' }}>
      <p className="eyebrow on-dark" style={{ textAlign: 'center' }}>Your garden is waiting</p>
      <h2 className="display" style={{ fontSize: 60, margin: '0 auto 20px', maxWidth: 760 }}>Let's grow something <span className="hl">delicious.</span></h2>
      <p className="lede" style={{ maxWidth: 540, margin: '0 auto 34px' }}>Book a free, no-pressure garden assessment. We'll walk your space and design your food future.</p>
      <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
        <a className="btn btn-lime lg" onClick={() => go('contact')}>Book a free assessment →</a>
        <a className="btn btn-ghost-l lg" href="tel:5613191272">Call 561-319-1272</a>
      </div>
    </div></section>
  );
}

function Reveal({ children, style }) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} style={{ opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(22px)', transition: 'opacity .7s var(--ease-grow), transform .7s var(--ease-grow)', ...style }}>{children}</div>;
}

Object.assign(window, { Ticker, Header, Footer, CTABand, Reveal, UA_NAV: NAV });
