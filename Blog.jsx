// UA 2.0 — Blog / Journal (real posts + images from urbanabundance.com)
const POSTS = [
  { title: 'We’re on WPBF 25 News: Your Lettuce Wasn’t Put on a Truck', date: 'Jul 22, 2026', tag: 'Press', cats: ['Press', 'Company', 'Featured', 'Edible Gardening', 'Vegetables'], img: './assets/blog/wpbf-feature.png', url: '#', excerpt: 'WPBF 25 News featured our founder Ryan Boylston on why more South Florida families are growing their own food as a cyclospora outbreak spreads.', body: ['When a cyclospora outbreak linked to about 7,000 cases nationwide put store-bought lettuce in the headlines, WPBF 25 News came looking for answers — and found us.', 'Reporter Ari Hait sat down with our founder, Ryan Boylston, to talk about why so many South Florida families are suddenly trading the grocery aisle for their own backyard.', { h: '“Your lettuce wasn’t put on a truck”' }, 'That line says it all. Food from your own garden didn’t ride across the country in a refrigerated truck or sit in a warehouse. It goes from your yard straight to your table.', '“Your lettuce out of your garden wasn’t put on a truck, wasn’t put in a refrigerator, wasn’t moved across the country or across the world,” Ryan told WPBF.', { h: 'The whole garden, handled for you' }, 'Our model is simple, and it’s the same one we’ve run for three years: we meet with homeowners, design a garden specific to their yard, install it, and then maintain it for them — peppers, pineapples, and several kinds of lettuce included.', { h: 'Why the phones are ringing' }, 'Food safety is the spark, but it’s rarely the whole story. More people are growing their own food with us than ever before — and once they start, they discover the rest: knowing exactly what goes into their food, and the confidence of eating something they watched grow.', '“There’s all these other great reasons to grow food,” Ryan said. “But if that’s the thing that sparks your interest, then great — we’ll talk to you about all the other benefits.”', { h: 'The safety case for a home garden' }, 'A backyard garden shortens the supply chain to a few steps: no truck, no warehouse, no cross-country trip. You control what’s sprayed — or not — and you pick it the day you eat it. It isn’t a cure-all — safe growing and good washing still matter — but for a lot of families, a raised bed of lettuce is peace of mind they can see.', { h: 'Grow yours with us' }, 'Whether you want a couple of raised beds of greens or a full edible landscape, we design it, install it, and keep it thriving. Ready to trust your salad again?'] },
  { title: 'Garden Friend or Foe? Let\u2019s Talk About Rabbits', date: 'Jan 20, 2026', tag: 'For Kids', cats: ['Edible Gardening', 'For Kids'], img: './assets/blog/rabbit.webp', url: 'https://urbanabundance.com/garden-friend-or-foe-lets-talk-about-rabbits/', excerpt: 'They\u2019re fluffy, fast, and love your veggies as much as you do. Are rabbits helping — or hindering — your harvest?', body: ['They’re fluffy. They’re fast. And they love your veggies just as much as you do.', 'Rabbits are some of the most adorable visitors you might spot in the garden, but are they helping — or hindering — your harvest?', { h: 'The truth about rabbits in the garden' }, 'While they may seem harmless, rabbits are true garden foes. These little foragers have a big appetite for tender greens, young seedlings, and fresh flowers. A single bunny can nibble through an entire row of lettuce overnight.', 'You might notice:', { ul: ['Neatly clipped stems (they have sharp teeth!)', 'Missing seedlings or flower heads', 'Small round droppings left behind'] }, 'Unlike garden allies like ladybugs or bees, rabbits don’t pollinate or protect. They just snack — and disappear.', { h: 'What can you do?' }, 'At Urban Abundance, we like to keep things kind and effective. Here are our go-to strategies to keep rabbits out of your raised beds:', { ul: ['Use fencing — a simple, low barrier about 2 feet tall works wonders.', 'Add strong scents. Rabbits dislike herbs like mint, thyme, and rosemary — plant them along your borders.', 'Try raised beds with drip irrigation. They look great and keep things tidy and less inviting for wildlife.'] }, { h: 'Make it a learning moment' }, 'Got kids at home? Download our newest Garden Friend or Foe? coloring sheet featuring the rabbit — a fun way to teach little gardeners which critters help and which ones hop off with the harvest.', 'Then share your kiddo’s colorful creation and tag us @urbanabundance with #GardenFriendOrFoe.', { cta: { label: 'Download the coloring sheet', href: 'https://urbanabundance.com/wp-content/uploads/2026/01/RABBIt-UA-Coloring-Sheet.pdf' } }] },
  { title: '2025/26 Winter Harvest How-To Guide', date: 'Jan 5, 2026', tag: 'Plants', cats: ['Edible Gardening', 'Company', 'Plants'], img: './assets/blog/february-harvest.webp', url: 'https://urbanabundance.com/2025-26-urban-abundance-winter-harvest-how-to-guide/', excerpt: 'Your GreenThumb companion for peak flavor and perfect timing — a step-by-step guide to every crop on the winter list.', body: ['Welcome to your step-by-step guide to harvesting every crop from the official Urban Abundance Winter Crop List. Aligned with our South Florida seasonal rhythms, it\u2019s built to help you pick at peak flavor with perfect timing.', 'From tomatoes and leafy greens to roots, brassicas, and herbs, each crop has its own tells for when it\u2019s ready. We\u2019ll walk you through what to look for and how to keep the harvest coming all season.'] },
  { title: '7 Essential Crops to Combat Rising Grocery Costs', date: 'Dec 12, 2025', tag: 'Vegetables', cats: ['Edible Gardening', 'Vegetables', 'Plants'], img: './assets/blog/grocery-costs.jpg', url: 'https://urbanabundance.com/', excerpt: 'Grocery prices keep climbing. These seven easy-to-grow Florida crops put the savings — and the freshness — back in your hands.', body: ['Every trip to the store seems to cost more than the last. The best hedge against rising grocery bills grows a few steps from your kitchen.', 'These seven crops are proven performers in South Florida beds — high-yield, low-fuss, and far tastier than anything shipped across the country. Plant them once and harvest for months.'] },
  { title: 'Jicama: The Crunchy Winter Crop You\u2019ll Love', date: 'Dec 2, 2025', tag: 'Recipes', cats: ['Recipes', 'Vegetables', 'Plants'], img: './assets/blog/jicama.png', url: 'https://urbanabundance.com/', excerpt: 'Sweet, crunchy, and refreshing — meet jicama, the South Florida winter root that shines in a bright, zesty slaw.', body: ['Sweet, crisp, and endlessly refreshing, jicama is one of winter\u2019s most underrated crops — and it thrives in our climate.', 'Shred it into a bright slaw with peppers, citrus, and fresh herbs for a crunchy side that disappears fast at any table. Here\u2019s how we grow it and our favorite way to serve it.'] },
  { title: 'Iguanas in the Garden: Hungry Invaders', date: 'Sep 22, 2025', tag: 'For Kids', cats: ['Edible Gardening', 'For Kids'], img: './assets/blog/drought.jpg', url: 'https://urbanabundance.com/iguanas-in-the-garden-hungry-invaders-you-dont-want-as-neighbors/', excerpt: 'They look cool with their prehistoric swagger, but in South Florida gardens these invasive lizards are big trouble.', body: ['Iguanas may look cool with their prehistoric vibes and sun-basking swagger, but in South Florida gardens they\u2019re big trouble.', 'These hungry, invasive lizards don\u2019t just nibble — they devour, from tender leafy greens to juicy fruit. We\u2019ll show you how to protect your beds and keep these unwanted neighbors moving along.'] },
  { title: 'Healthy Soil: CropFest & the Magic Mix', date: 'Sep 22, 2025', tag: 'Edible Gardening', cats: ['Edible Gardening', 'For Kids'], img: './assets/blog/cropfest.webp', url: 'https://urbanabundance.com/healthy-soil-for-gardens-rocking-out-with-cropfest-and-urban-abundance-magic-mix/', excerpt: 'A thriving garden starts with one thing: soil. It\u2019s not flashy, but it\u2019s the stage where every act of abundance begins.', body: ['At Urban Abundance, we know a thriving garden starts with one thing: soil. It\u2019s not the flashiest part of the garden — no polka dots like ladybugs, no vibrant blooms — but soil is the stage where every act of abundance begins.', 'Our Magic Mix is built to feed the living web beneath your beds. Celebrate it with the kids at CropFest and grab the coloring page below.'] },
  { title: 'Earthworm: Garden Friend?', date: 'Sep 1, 2025', tag: 'For Kids', cats: ['Edible Gardening', 'For Kids'], img: './assets/blog/earthworm.png', url: 'https://urbanabundance.com/', excerpt: 'Wiggly, slimy, and secretly amazing — earthworms are your soil\u2019s tiny superheroes. Grab the coloring page and dig in!', body: ['Wiggly, slimy, and secretly amazing — earthworms are the unsung heroes beneath every great garden.', 'As they burrow, they aerate the soil, break down organic matter, and leave behind nutrient-rich castings that feed your plants. Meet the garden\u2019s tiniest superhero with the free coloring page below.'] },
  { title: 'From Basil Bouquets to Tarragon Tea', date: 'Aug 11, 2025', tag: 'Herbs', cats: ['Edible Gardening', 'Herbs', 'Plants'], img: './assets/photos/patio-garden.avif', url: 'https://urbanabundance.com/from-basil-bouquets-to-tarragon-tea-making-the-most-of-your-south-florida-summer-herbs/', excerpt: 'When summer hits full stride, your herb bed becomes a fragrant jungle overnight. Here\u2019s how to make the most of it.', body: ['When summer hits full stride in South Florida, your herb bed can transform into a lush, fragrant jungle seemingly overnight.', 'Our heat-tolerant herb lineup is no accident — these culinary and medicinal powerhouses are chosen to thrive in our heat. Here\u2019s how to harvest, preserve, and enjoy every last leaf.'] },
  { title: 'We\u2019re Hiring: North County GreenThumb', date: 'Jul 28, 2025', tag: 'Careers', cats: ['Careers', 'Company'], img: './assets/photos/poolside-beds.png', url: 'https://urbanabundance.com/were-hiring-north-county-greenthumb/', excerpt: 'Grow with us — literally. We\u2019re looking for a passionate, hands-in-the-dirt person to join the team.', body: ['Grow with us — literally. Urban Abundance is on a mission to reconnect people with their food, their health, and their community, one garden at a time.', 'As demand sprouts across North Palm Beach County, we\u2019re looking for a passionate, hands-in-the-dirt kind of person to join our GreenThumb team. Sound like you?'] },
  { title: 'Ladybugs: Your Spotted Sidekicks', date: 'Jul 28, 2025', tag: 'For Kids', cats: ['Edible Gardening', 'For Kids'], img: './assets/blog/ladybug.webp', url: 'https://urbanabundance.com/ladybugs-in-the-garden/', excerpt: 'Few garden heroes are as mighty (or as cute) as the ladybug — pest-fighting powerhouses in polka dots.', body: ['Let’s hear it for the ladybug!', 'At Urban Abundance, we love a good garden hero — and few are as mighty (or as cute) as the ladybug. With their red-and-black polka dots and tiny fluttery wings, these beetles are more than just pretty. They’re pest-fighting powerhouses that help our GreenThumbs protect your garden the natural way.', { h: 'Why ladybugs are legends' }, 'One ladybug can eat up to 50 aphids a day. Their larvae? Even hungrier. And here’s the kicker — they don’t nibble your plants. They only eat the pests that do.', 'That’s why our GreenThumbs do a little happy dance when they spot ladybugs in your beds. Fewer pests, healthier plants, no chemicals — just good, old-fashioned garden teamwork.', { h: 'Our GreenThumbs & their spotted friends' }, 'Our team knows what ladybugs love — diverse flowers, healthy soil, and no harsh sprays. We plant companion flowers like marigolds and yarrow to invite ladybugs to stick around and lay their eggs.', { h: 'Ladybug tips for home gardeners' }, { ul: ['Plant pollen-rich flowers like calendula or cosmos', 'Avoid synthetic pesticides', 'Keep your garden diverse and full of leafy hiding spots'] }, 'Ladybugs aren’t just good bugs — they’re great partners in cultivating abundance. When they show up, they’re not guests. They’re family.', { cta: { label: 'Download the coloring sheet', href: 'https://urbanabundance.com/wp-content/uploads/2025/07/Lady-Bug-urban-abundance-coloring-sheet.pdf' } }] },
  { title: 'Homegrown Food Is the Key to Wellness', date: 'Jul 10, 2025', tag: 'Plants', cats: ['Edible Gardening', 'Plants'], img: './assets/photos/customer-garden.jpg', url: 'https://urbanabundance.com/why-homegrown-food-in-south-florida-is-the-key-to-wellness-lessons-from-swedens-tiny-urban-gardens/', excerpt: 'Inspired by Sweden\u2019s tiny urban gardens, homegrown food in South Florida is becoming a wellness revolution.', body: ['Homegrown food in South Florida is no longer just a lifestyle choice — it\u2019s becoming a wellness revolution.', 'Inspired by the tiny urban gardens of Sweden, where allotment plots are woven into the city\u2019s social and public-health fabric, we\u2019re reimagining what a backyard can do for a family\u2019s health.'] },
  { title: 'Urban Abundance in the Spotlight', date: 'Jul 7, 2025', tag: 'Company', cats: ['Company', 'Plants'], img: './assets/blog/referral.jpg', url: 'https://urbanabundance.com/urban-abundance-in-the-spotlight-why-press-matters-for-the-yard-farming-movement/', excerpt: 'We were featured in Florida Weekly\u2019s \u201cBlooming Business\u201d — why press matters for the yard-farming movement.', body: ['We\u2019re thrilled to share that Urban Abundance was recently featured in Florida Weekly in a full-length feature titled \u201cBlooming Business.\u201d', 'The article highlights our mission, our services, and the growing demand for sustainable, productive gardens across South Florida. Press like this helps grow the whole yard-farming movement.'] },
  { title: 'The End of the Can', date: 'Jul 2, 2025', tag: 'Vegetables', cats: ['Edible Gardening', 'Vegetables', 'Plants'], img: './assets/blog/del-monte.webp', url: 'https://urbanabundance.com/the-end-of-the-can-why-homegrown-food-in-south-florida-is-the-future-of-wellness/', excerpt: 'Del Monte just filed for bankruptcy. Canned food was born in an era of convenience — here\u2019s what comes next.', body: ['Del Monte just filed for bankruptcy. For a brand that once defined American pantries, that headline should hit hard — but honestly, it shouldn\u2019t be a surprise.', 'Canned food was born in an era of convenience. Today, more families are choosing fresh, homegrown produce over shelf-stable cans — and that shift is reshaping what wellness looks like in South Florida.'] },
];
const CATS = ['All', 'Press', 'Edible Gardening', 'Plants', 'Herbs', 'Vegetables', 'For Kids', 'Recipes', 'Careers', 'Company'];

function Blog({ go }) {
  const { CTABand, Icon } = window;
  const [cat, setCat] = React.useState('All');
  const [open, setOpen] = React.useState(null);
  const openPost = (p) => { setOpen(p); window.scrollTo({ top: 0 }); };

  const Meta = ({ p }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--taupe)' }}>
      <span style={{ fontWeight: 700, color: 'var(--green-deep)', letterSpacing: '.08em', textTransform: 'uppercase', fontSize: 12 }}>{p.tag}</span>
      <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--taupe-300)' }} />
      <span>{p.date}</span>
    </div>
  );

  // ---- Article reader ----
  if (open) {
    const related = POSTS.filter(p => p !== open && p.cats.some(c => open.cats.includes(c))).slice(0, 3);
    return (
      <div>
        <article style={{ padding: '40px 0 20px' }}><div className="narrow">
          <a onClick={() => setOpen(null)} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 14, color: 'var(--green-deep)', cursor: 'pointer', marginBottom: 24 }}>← Back to the Journal</a>
          <Meta p={open} />
          <h1 className="display" style={{ fontSize: 52, margin: '12px 0 24px', lineHeight: 1.03 }}>{open.title}</h1>
          <img src={open.img} alt={open.title} style={{ width: '100%', height: 420, objectFit: 'cover', borderRadius: 22, boxShadow: '0 24px 50px rgba(51,48,42,.14)', marginBottom: 32 }} />
          {open.body.map((b, i) => {
            if (typeof b !== 'string') {
              if (b.h) return <h3 key={i} className="display" style={{ fontSize: 28, margin: '28px 0 10px' }}>{b.h}</h3>;
              if (b.ul) return <ul key={i} style={{ margin: '0 0 20px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>{b.ul.map((li, j) => <li key={j} style={{ display: 'flex', gap: 11, fontSize: 18, lineHeight: 1.6, color: 'var(--soil-700)' }}><span style={{ color: 'var(--green-deep)', flex: 'none', marginTop: 2 }}><Icon name="leaf" size={18} /></span>{li}</li>)}</ul>;
              if (b.cta) return <a key={i} className="btn btn-green" href={b.cta.href} target="_blank" rel="noreferrer" style={{ margin: '6px 0 12px' }}>{b.cta.label}</a>;
              return null;
            }
            return <p key={i} style={{ fontSize: i === 0 ? 21 : 18, lineHeight: 1.7, color: i === 0 ? 'var(--soil-900)' : 'var(--soil-700)', fontWeight: 400, marginBottom: 20, fontFamily: i === 0 ? 'var(--display)' : 'var(--font-body)', letterSpacing: i === 0 ? '-.005em' : 0 }}>{b}</p>;
          })}
          <div style={{ borderTop: '1px solid var(--sand-200)', marginTop: 28, paddingTop: 24, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <a className="btn btn-lime" onClick={() => go('contact')}>Book a free assessment →</a>
            <a className="btn btn-ghost" onClick={() => setOpen(null)}>← Back to the Journal</a>
          </div>
        </div></article>

        {related.length > 0 && (
          <section className="section band-bone"><div className="wrap">
            <div className="sec-head" style={{ marginBottom: 32 }}><h2 className="display" style={{ fontSize: 32, margin: 0 }}>Keep reading</h2></div>
            <div className="grid-3">
              {related.map(p => (
                <div key={p.title} className="card" style={{ cursor: 'pointer' }} onClick={() => openPost(p)}>
                  <div className="ph"><img src={p.img} alt={p.title} /></div>
                  <div className="bd" style={{ gap: 10 }}><Meta p={p} /><h3 style={{ fontSize: 20, lineHeight: 1.12 }}>{p.title}</h3></div>
                </div>
              ))}
            </div>
          </div></section>
        )}
        <CTABand go={go} />
      </div>
    );
  }

  // ---- Listing ----
  const posts = cat === 'All' ? POSTS : POSTS.filter(p => p.cats.includes(cat));
  const [featured, ...rest] = posts;
  return (
    <div>
      <section style={{ padding: '64px 0 40px' }}><div className="narrow" style={{ textAlign: 'center' }}>
        <p className="eyebrow" style={{ textAlign: 'center' }}>The Journal</p>
        <h1 className="display" style={{ fontSize: 68, marginBottom: 16 }}>Seasonal wisdom, <span className="hl">straight from the garden.</span></h1>
        <p className="lede" style={{ maxWidth: 540, margin: '0 auto' }}>Tips, stories, and South Florida growing know-how from our GreenThumbs.</p>
      </div></section>

      <div className="wrap" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }}>
        {CATS.map(c => (
          <button key={c} onClick={() => setCat(c)} style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 14, padding: '9px 16px', borderRadius: 8, cursor: 'pointer', border: `1.5px solid ${cat === c ? 'var(--green-deep)' : 'var(--sand-200)'}`, background: cat === c ? 'var(--green-mist)' : '#fff', color: cat === c ? 'var(--green-forest)' : 'var(--soil-700)' }}>{c}</button>
        ))}
      </div>

      <section style={{ paddingBottom: 40 }}><div className="wrap">
        {featured && (
          <div className="card ua-split" onClick={() => openPost(featured)} style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 0, marginBottom: 36, cursor: 'pointer' }}>
            <div style={{ padding: 14 }}><img src={featured.img} alt={featured.title} style={{ width: '100%', height: 340, objectFit: 'cover', borderRadius: '16px 16px 90px 16px' }} /></div>
            <div className="bd" style={{ justifyContent: 'center', gap: 14, padding: '30px 34px' }}>
              <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--green-deep)' }}>Latest</span>
              <Meta p={featured} />
              <h2 className="display" style={{ fontSize: 38, margin: 0, lineHeight: 1.05 }}>{featured.title}</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--soil-700)', margin: 0 }}>{featured.excerpt}</p>
              <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, color: 'var(--green-deep)', display: 'inline-flex', alignItems: 'center', gap: 7 }}>Read the post <Icon name="leaf" size={16} /></span>
            </div>
          </div>
        )}
        <div className="grid-3">
          {rest.map(p => (
            <div key={p.title} className="card" onClick={() => openPost(p)} style={{ cursor: 'pointer' }}>
              <div className="ph"><img src={p.img} alt={p.title} /></div>
              <div className="bd" style={{ gap: 10 }}>
                <Meta p={p} />
                <h3 style={{ fontSize: 21, lineHeight: 1.12 }}>{p.title}</h3>
                <p style={{ fontSize: 14.5 }}>{p.excerpt}</p>
                <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 14, color: 'var(--green-deep)', display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 2 }}>Read more →</span>
              </div>
            </div>
          ))}
        </div>
      </div></section>

      <CTABand go={go} />
    </div>
  );
}
window.Blog = Blog;
