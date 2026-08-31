import { useEffect, useState } from 'react'

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
const Check = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4.2 4.2L19 6.5" /></svg>
const Spark = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" /></svg>

const milestones = [
  { year: '2013', title: 'A clearer start', text: 'Marcus Wolsdorf and Robert Haselsteiner start Finanztip with one question: why should smart money decisions feel so hard?' },
  { year: '2014', title: 'Journalism takes the lead', text: 'The consumer-information company is formally established. Former Finanztest editor-in-chief Hermann-Josef Tenhagen joins to shape the editorial voice.' },
  { year: '2018', title: 'Knowledge leaves the screen', text: 'Finanztip Schule begins bringing practical financial education into classrooms, starting with real-life decisions young people face.' },
  { year: '2020', title: 'The promise is protected', text: 'The founders transfer all company shares to the charitable Finanztip Stiftung—making financial education the long-term destination for distributable profits.' },
  { year: 'Today', title: 'A daily habit for millions', text: 'Guides, newsletters, video, podcasts and tools help people make financial choices with more confidence and less noise.' },
]

const principles = [
  ['Start with the reader', 'The editorial work begins with the consumer problem—not a product to sell.'],
  ['Show the work', 'Recommendations explain their criteria, so readers can understand the “why”, not just the result.'],
  ['Keep learning accessible', 'Free guides turn complicated money moments into clear next steps.'],
]

const work = [
  { no: '01', title: 'Make the complicated useful', text: 'We translate fine print, market shifts and policy changes into practical choices for real lives.', tone: 'peach' },
  { no: '02', title: 'Test before we recommend', text: 'Experts research providers, compare conditions and revisit advice when the market changes.', tone: 'blue' },
  { no: '03', title: 'Build financial confidence', text: 'From a first account to retirement planning, our work helps people act for themselves.', tone: 'mint' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeYear, setActiveYear] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible'))
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const goTo = (id) => {
    setMenuOpen(false)
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <button className="brand" onClick={() => goTo('#top')} aria-label="Back to top"><span>finanz</span>tip<span className="brand-dot">.</span></button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => goTo('#story')}>Our story</button>
          <button onClick={() => goTo('#work')}>What we do</button>
          <button onClick={() => goTo('#impact')}>Why it matters</button>
        </div>
        <button className="nav-cta" onClick={() => goTo('#impact')}>Explore impact <Arrow /></button>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu"><i /><i /></button>
      </nav>

      <section id="top" className="hero">
        <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
        <div className="hero-copy reveal is-visible">
          <p className="eyebrow"><Spark /> Since 2013 · Germany</p>
          <h1>Money has never been <em>just</em> about money.</h1>
          <p className="hero-lede">It is about choices, confidence and the freedom to take the next step. Finanztip makes the important ones clearer.</p>
          <div className="hero-actions">
            <button className="button primary" onClick={() => goTo('#story')}>Discover our story <Arrow /></button>
            <button className="text-button" onClick={() => goTo('#work')}>How we help <span>↓</span></button>
          </div>
        </div>
        <div className="hero-art reveal is-visible" aria-hidden="true">
          <div className="orb orb-coral" /><div className="orb orb-lime" />
          <div className="paper paper-main"><div className="paper-top"><b>your next move</b><span>✦</span></div><div className="paper-line w-78" /><div className="paper-line w-52" /><div className="chart"><i /><i /><i /><i /><i /><i /></div><div className="paper-note"><span>clear</span><b> + confident</b></div></div>
          <div className="paper paper-small"><span className="mini-icon">↗</span><small>more clarity</small><strong>for every €</strong></div>
          <div className="hero-stamp">made<br/>for life</div>
        </div>
        <div className="hero-foot"><span>Scroll to unpack the story</span><div className="scroll-line" /></div>
      </section>

      <section id="story" className="story section">
        <div className="section-intro reveal"><p className="eyebrow">The story</p><h2>Built for the moment people say,<br/><em>“I don’t know where to start.”</em></h2></div>
        <div className="story-grid">
          <div className="story-sticky reveal"><p>Personal finance can make people feel behind before they have even begun. Finanztip was built to change that.</p><div className="story-mark"><span>13</span><small>years of making<br/>money make sense</small></div></div>
          <div className="timeline reveal">
            {milestones.map((milestone, index) => <button className={`milestone ${activeYear === index ? 'active' : ''}`} key={milestone.year} onClick={() => setActiveYear(index)}>
              <span className="year">{milestone.year}</span><span className="milestone-copy"><b>{milestone.title}</b><span>{milestone.text}</span></span><span className="milestone-plus">{activeYear === index ? '—' : '+'}</span>
            </button>)}
          </div>
        </div>
      </section>

      <section id="work" className="work section">
        <div className="work-head reveal"><p className="eyebrow">What we do</p><h2>Less noise.<br/><em>More “now I know.”</em></h2><p>We help people understand what matters, avoid costly missteps and choose a path that works for their life.</p></div>
        <div className="work-list">
          {work.map((item) => <article className={`work-card ${item.tone} reveal`} key={item.no}><span className="card-no">{item.no}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="card-arrow"><Arrow /></span></article>)}
        </div>
      </section>

      <section id="impact" className="impact section">
        <div className="impact-sun" aria-hidden="true" /><div className="impact-grid">
          <div className="impact-copy reveal"><p className="eyebrow light">Why it matters</p><h2>Financial knowledge is a form of <em>freedom.</em></h2><p>When information is hard to access, expensive mistakes become normal. Clear, independent consumer information gives people a fairer chance to make their own decisions.</p><button className="button white" onClick={() => goTo('#trust')}>See our promise <Arrow /></button></div>
          <div className="impact-stat reveal"><b>2m<span>+</span></b><p>people are part of the Finanztip community today.</p><div className="avatar-row"><i>J</i><i>M</i><i>A</i><i>S</i><i>+</i></div></div>
        </div>
      </section>

      <section id="trust" className="trust section">
        <div className="trust-top reveal"><p className="eyebrow">Our promise</p><h2>Trust is not a claim.<br/>It is a practice.</h2></div>
        <div className="principles">
          {principles.map(([title, text], index) => <article className="principle reveal" key={title}><span>0{index + 1}</span><div className="check"><Check /></div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <p className="source-note reveal">This page tells Finanztip’s public story. Historical details draw on Finanztip’s company, foundation and newsroom materials. For current methodology and funding disclosure, see <a href="https://www.finanztip.de/ueber-uns/" target="_blank" rel="noreferrer">finanztip.de</a>.</p>
      </section>

      <footer><button className="brand" onClick={() => goTo('#top')}><span>finanz</span>tip<span className="brand-dot">.</span></button><p>Money, made clear.</p><button className="back-top" onClick={() => goTo('#top')}>Back to top ↑</button></footer>
    </main>
  )
}

export default App
