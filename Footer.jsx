window.Footer = Footer;  // hoisted; expose to sibling Babel scripts

const FOOTER_CSS = `
  .sp-ft-grid { display: grid; grid-template-columns: 1.4fr repeat(3, 1fr); gap: clamp(24px, 4vw, 56px); align-items: start; }
  @media (max-width: 760px) { .sp-ft-grid { grid-template-columns: 1fr 1fr; gap: 32px 24px; } }
  @media (max-width: 440px) { .sp-ft-grid { grid-template-columns: 1fr; gap: 28px; } }
`;

function Footer() {
  const cols = [
    { h: 'Shop', links: ['Full sun', 'Shade & patio', 'Native plants', 'Pots & soil', 'Gift cards'] },
    { h: 'Services', links: ['Design consult', 'Install & planting', 'Plant care plans', 'Events'] },
    { h: 'Visit', links: ['1515 N. Dixie Hwy', 'Lake Worth Beach, FL', 'Tue–Sat 8:30am–5pm', 'Directions'] },
  ];

  // Newsletter (Mailchimp via JSONP)
  const [nlEmail, setNlEmail] = React.useState('');
  const [nlStatus, setNlStatus] = React.useState('idle'); // idle | loading | success | error
  const [nlMsg, setNlMsg] = React.useState('');
  const subscribe = (e) => {
    if (e) e.preventDefault();
    const email = nlEmail.trim();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setNlStatus('error'); setNlMsg('Enter a valid email.'); return;
    }
    setNlStatus('loading'); setNlMsg('');
    const cb = 'mcjsonp_ft_' + Date.now();
    const params =
      'u=1c8663a77dff521ad9b201a73&id=625dc0ca04&f_id=005b14e1f0' +
      '&EMAIL=' + encodeURIComponent(email) +
      '&b_1c8663a77dff521ad9b201a73_625dc0ca04=' +
      '&c=' + cb;
    const url = 'https://sommabrands.us8.list-manage.com/subscribe/post-json?' + params;
    const script = document.createElement('script');
    const cleanup = () => { delete window[cb]; if (script.parentNode) script.parentNode.removeChild(script); };
    const timer = setTimeout(() => { cleanup(); setNlStatus('error'); setNlMsg('Try again in a moment.'); }, 9000);
    window[cb] = (data) => {
      clearTimeout(timer); cleanup();
      if (data && data.result === 'success') {
        setNlStatus('success'); setNlMsg(''); setNlEmail('');
      } else {
        let m = (data && data.msg) || 'Something went wrong.';
        if (/already subscribed/i.test(m)) m = "You're already on the list.";
        else m = m.replace(/^\d+\s*-\s*/, '');
        setNlStatus('error'); setNlMsg(m);
      }
    };
    script.src = url;
    script.onerror = () => { clearTimeout(timer); cleanup(); setNlStatus('error'); setNlMsg('Try again in a moment.'); };
    document.body.appendChild(script);
  };
  return (
    <footer style={{ background: 'var(--sp-canopy)', color: 'var(--text-on-dark-muted)', padding: 'clamp(40px, 6vw, 64px) clamp(20px, 5vw, 56px) 32px' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <style>{FOOTER_CSS}</style>
        <div className="sp-ft-grid">
          <div>
            <img src="../../assets/logo-wordmark-cream.png" alt="SmartyPlants" style={{ height: 39, marginBottom: 16 }} />
            <p style={{ fontSize: 'var(--text-sm)', maxWidth: 260, lineHeight: 1.6, margin: 0, color: 'var(--text-on-dark-muted)' }}>
              The easiest way to fix your outdoor space. Start here.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              {[
                { label: 'Instagram', href: 'https://www.instagram.com/smartyplantsfl', path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.59-.07-4.74-.07Zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 1.62a3.68 3.68 0 1 0 0 7.36 3.68 3.68 0 0 0 0-7.36Zm5.5-1.04a1.24 1.24 0 1 1-2.48 0 1.24 1.24 0 0 1 2.48 0Z' },
                { label: 'Facebook', href: 'https://www.facebook.com/SmartyPlantsFL/', path: 'M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.78-1.63 1.57v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38,
                    borderRadius: '50%', border: '0.5px solid var(--border-on-dark)', color: 'var(--text-on-dark)',
                    background: 'rgba(242,237,223,0.06)', textDecoration: 'none', transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--text-on-dark)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(242,237,223,0.06)'; e.currentTarget.style.color = 'var(--text-on-dark)'; }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
            <div style={{ marginTop: 22, maxWidth: 290 }}>
              <div className="sp-eyebrow" style={{ color: 'var(--accent)', marginBottom: 10 }}>Get The Dirt</div>
              {nlStatus === 'success' ? (
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-on-dark)', margin: 0, lineHeight: 1.5 }}>You're in. 🌱 Check your inbox to confirm.</p>
              ) : (
                <form onSubmit={subscribe} noValidate>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <input
                      type="email"
                      value={nlEmail}
                      onChange={(ev) => { setNlEmail(ev.target.value); if (nlStatus === 'error') { setNlStatus('idle'); setNlMsg(''); } }}
                      placeholder="you@email.com"
                      aria-label="Email address"
                      style={{
                        flex: '1 1 auto', minWidth: 0, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)',
                        color: 'var(--text-on-dark)', background: 'rgba(242,237,223,0.08)', border: '0.5px solid var(--border-on-dark)',
                        borderRadius: 'var(--radius-pill)', padding: '11px 16px', outline: 'none',
                      }}
                    />
                    <button type="submit" disabled={nlStatus === 'loading'} aria-label="Sign up" style={{
                      flex: 'none', fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-semibold)', fontSize: 'var(--text-sm)',
                      color: 'var(--text-on-dark)', background: 'var(--accent)', border: 'none', cursor: 'pointer',
                      borderRadius: 'var(--radius-pill)', padding: '11px 18px',
                    }}>{nlStatus === 'loading' ? '…' : '→'}</button>
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', marginTop: 8, color: nlStatus === 'error' ? 'var(--accent)' : 'var(--text-faint)' }}>
                    {nlStatus === 'error' ? nlMsg : 'One short email a week. No spam.'}
                  </div>
                </form>
              )}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div className="sp-eyebrow" style={{ color: 'var(--accent)', marginBottom: 12 }}>{c.h}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {c.links.map((l) => (
                  <a key={l} href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 'var(--text-sm)', color: 'var(--text-on-dark-muted)', textDecoration: 'none' }}>{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, paddingTop: 20, borderTop: '0.5px solid var(--border-on-dark)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-faint)' }}>© 2026 SmartyPlants Nursery + Cafe</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18 }}>
            {[
              { label: 'Terms & Conditions', href: '/terms' },
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Return Policy', href: '/returns' },
            ].map((l) => (
              <a key={l.href} href={l.href} style={{ fontSize: 'var(--text-xs)', color: 'var(--text-faint)', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-faint)'; }}
              >{l.label}</a>
            ))}
          </div>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-faint)' }}>One trip. Done.</span>
        </div>
      </div>
    </footer>
  );
}
