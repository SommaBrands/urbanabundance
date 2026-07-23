// UA 2.0 — Contact / Get Started (embeds the Jobber new-customer work request form)
//
// ▶ TO GO LIVE: paste your Jobber form URL + client hub id below.
//   Find them in Jobber → Marketing → Work Request form → "Embed on website".
//   The embed snippet looks like:
//     form_url="https://clienthub.getjobber.com/client_hubs/XXXX/public/work_request/new?source=embed"
//     clienthub_id="XXXX"
const JOBBER_FORM_URL = 'https://clienthub.getjobber.com/hubs/c319abfc-2bea-46a6-9f0c-2fa719699013/public/requests/4220680/new';
const JOBBER_CONFIGURED = !JOBBER_FORM_URL.includes('REPLACE_ME');

function Contact({ go }) {
  const { Icon } = window;
  return (
    <div>
      <section style={{ padding: '56px 0 40px' }}><div className="narrow" style={{ textAlign: 'center' }}>
        <p className="eyebrow" style={{ textAlign: 'center' }}>Get started</p>
        <h1 className="display" style={{ fontSize: 68, marginBottom: 16 }}>Book your <span className="hl">free</span> garden assessment.</h1>
        <p className="lede" style={{ maxWidth: 520, margin: '0 auto' }}>No pressure, no obligation. Fill out the form and a GreenThumb will reach out within one business day to design your food future.</p>
      </div></section>

      <section style={{ paddingBottom: 96 }}><div className="wrap">
        <div className="ua-split" style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 48, alignItems: 'start' }}>
          {/* JOBBER FORM */}
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '18px 24px', borderBottom: '1px solid var(--sand-200)', background: 'var(--bone)' }}>
              <span style={{ color: 'var(--green-deep)' }}><Icon name="calendar" size={20} /></span>
              <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 15, color: 'var(--soil-900)' }}>New Customer Request</span>
              <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-ui)', fontSize: 12, color: 'var(--taupe)' }}>Secure · Powered by Jobber</span>
            </div>
            {JOBBER_CONFIGURED ? (
              <iframe title="Urban Abundance new customer form" src={JOBBER_FORM_URL} style={{ width: '100%', height: 900, border: 'none', display: 'block' }} />
            ) : (
              <div style={{ padding: '54px 40px', textAlign: 'center' }}>
                <div style={{ width: 66, height: 66, borderRadius: '50%', background: 'var(--green-mist)', color: 'var(--green-deep)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><Icon name="sprout" size={32} /></div>
                <h3 className="display" style={{ fontSize: 26, marginBottom: 10 }}>Jobber form mounts here</h3>
                <p className="lede" style={{ fontSize: 16, maxWidth: 420, margin: '0 auto 22px' }}>Drop your Jobber work-request <b>form URL</b> into <code style={{ background: 'var(--bone)', padding: '2px 6px', borderRadius: 5, fontSize: 14 }}>JOBBER_FORM_URL</code> at the top of <code style={{ background: 'var(--bone)', padding: '2px 6px', borderRadius: 5, fontSize: 14 }}>Contact.jsx</code> and the live form appears in this panel.</p>
                <div style={{ textAlign: 'left', maxWidth: 440, margin: '0 auto', background: 'var(--bone)', borderRadius: 12, padding: '18px 20px' }}>
                  <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--taupe)', marginBottom: 12 }}>The form collects</div>
                  {['Full name & contact info', 'Property address', 'What you\u2019d like to grow', 'Preferred contact method & notes'].map(f => (
                    <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 15, color: 'var(--soil-700)', marginBottom: 9 }}>
                      <span style={{ color: 'var(--green-deep)' }}><Icon name="check" size={16} /></span>{f}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SIDE — WHAT HAPPENS NEXT */}
          <div>
            <div className="card" style={{ background: 'var(--oat)', border: 'none', padding: '30px 30px 32px', marginBottom: 22 }}>
              <h3 className="display" style={{ fontSize: 24, marginBottom: 18 }}>What happens next</h3>
              {[['We visit', 'A GreenThumb walks your space and listens to your goals.'], ['We design', 'You get a custom plan — layout, crops, and a transparent quote.'], ['We grow', 'We install and tend it bi-weekly. You harvest and enjoy.']].map(([t, b], i) => (
                <div key={t} style={{ display: 'flex', gap: 14, marginBottom: i < 2 ? 18 : 0 }}>
                  <span className="stepno" style={{ background: '#fff' }}>{i + 1}</span>
                  <div><div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 16, color: 'var(--soil-900)' }}>{t}</div><div style={{ fontSize: 14.5, color: 'var(--soil-700)', lineHeight: 1.5 }}>{b}</div></div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '4px 6px' }}>
              <div style={{ display: 'flex', gap: 11, alignItems: 'center', fontSize: 15.5, color: 'var(--soil-700)' }}><span style={{ color: 'var(--green-deep)' }}><Icon name="phone" size={19} /></span> <b style={{ color: 'var(--green-deep)' }}>561-319-1272</b></div>
              <div style={{ display: 'flex', gap: 11, alignItems: 'center', fontSize: 15.5, color: 'var(--soil-700)' }}><span style={{ color: 'var(--green-deep)' }}><Icon name="pin" size={19} /></span> 17035 Jupiter Farms Rd, Jupiter FL</div>
              <div style={{ display: 'flex', gap: 11, alignItems: 'center', fontSize: 15.5, color: 'var(--soil-700)' }}><span style={{ color: 'var(--green-deep)' }}><Icon name="leaf" size={19} /></span> Nursery · Wed–Fri 9–5, Sat 8–1</div>
              <div className="pill-note" style={{ marginTop: 6, alignSelf: 'flex-start' }}><Icon name="broadcast" size={16} style={{ color: 'var(--green-lime)' }} /> As seen on <b>WPBF&nbsp;25</b></div>
            </div>
          </div>
        </div>
      </div></section>
    </div>
  );
}
window.Contact = Contact;
