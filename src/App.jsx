import { useEffect, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import everydayClarity from './assets/everyday-clarity.jpg'
import editorialWork from './assets/editorial-work.jpg'
import financialConfidence from './assets/financial-confidence.jpg'

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
const work = [
  { no: '01', title: 'Make the complicated useful', text: 'We translate fine print, market shifts and policy changes into practical choices for real lives.', tone: 'peach' },
  { no: '02', title: 'Test before we recommend', text: 'Experts research providers, compare conditions and revisit advice when the market changes.', tone: 'blue' },
  { no: '03', title: 'Build financial confidence', text: 'From a first account to retirement planning, our work helps people act for themselves.', tone: 'mint' },
]

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  useEffect(() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'auto' }) }, [location.pathname])
  return <><nav className="nav site-nav" aria-label="Main navigation">
    <Link className="brand" to="/" aria-label="Finanztip home"><span>finanz</span>tip<span className="brand-dot">.</span></Link>
    <div className={`nav-links ${menuOpen ? 'open' : ''}`}><NavLink to="/" end>Our story</NavLink><NavLink to="/how-we-work">How we work</NavLink><NavLink to="/impact">Our impact</NavLink></div>
    <Link className="nav-cta" to="/impact">Explore impact <Arrow /></Link>
    <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu"><i /><i /></button>
  </nav>{children}<Footer /></>
}
function Footer() { return <footer><Link className="brand" to="/"><span>finanz</span>tip<span className="brand-dot">.</span></Link><p>Money, made clear.</p><Link className="back-top" to="/">Back to top ↑</Link></footer> }
function Page({ children, name }) { return <main className="page" key={name}>{children}</main> }

function Home() {
  const [activeYear, setActiveYear] = useState(0)
  useReveal()
  return <Page name="home"><section className="hero">
    <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
    <div className="hero-copy reveal is-visible"><p className="eyebrow"><Spark /> Since 2013 · Germany</p><h1>Money has never been <em>just</em> about money.</h1><p className="hero-lede">It is about choices, confidence and the freedom to take the next step. Finanztip makes the important ones clearer.</p><div className="hero-actions"><Link className="button primary" to="/how-we-work">Discover our approach <Arrow /></Link><a className="text-button" href="#story">Our story <span>↓</span></a></div></div>
    <div className="hero-art reveal is-visible" aria-hidden="true"><div className="orb orb-coral" /><div className="orb orb-lime" /><div className="paper paper-main"><div className="paper-top"><b>your next move</b><span>✦</span></div><div className="paper-line w-78" /><div className="paper-line w-52" /><div className="chart"><i /><i /><i /><i /><i /><i /></div><div className="paper-note"><span>clear</span><b> + confident</b></div></div><div className="paper paper-small"><span className="mini-icon">↗</span><small>more clarity</small><strong>for every €</strong></div><div className="hero-stamp">made<br/>for life</div></div>
    <div className="hero-foot"><span>Scroll to unpack the story</span><div className="scroll-line" /></div>
  </section>
  <section id="story" className="story section"><div className="section-intro reveal"><p className="eyebrow">The story</p><h2>Built for the moment people say,<br/><em>“I don’t know where to start.”</em></h2></div><div className="story-grid"><div className="story-sticky reveal"><p>Personal finance can make people feel behind before they have even begun. Finanztip was built to change that.</p><div className="story-mark"><span>13</span><small>years of making<br/>money make sense</small></div></div><div className="timeline reveal">{milestones.map((milestone, index) => <button className={`milestone ${activeYear === index ? 'active' : ''}`} key={milestone.year} onClick={() => setActiveYear(index)}><span className="year">{milestone.year}</span><span className="milestone-copy"><b>{milestone.title}</b><span>{milestone.text}</span></span><span className="milestone-plus">{activeYear === index ? '—' : '+'}</span></button>)}</div></div></section>
  <section className="story-photo section"><div className="photo-frame reveal"><img src={everydayClarity} alt="A woman calmly reviewing paperwork at her kitchen table" loading="lazy" /></div><div className="photo-caption reveal"><p className="eyebrow">The everyday reality</p><h2>Big decisions rarely arrive with a <em>warning label.</em></h2><p>They arrive in an email, a renewal notice, a new job, a letter from the tax office. Our job is to be useful when life asks something complicated.</p><span>Clarity starts with a trusted next step.</span></div></section>
  <section className="topic-strip section"><p className="eyebrow reveal">The questions we make clearer</p><div className="topic-grid">{['Your first account', 'A fair energy tariff', 'Investing for tomorrow', 'Understanding insurance', 'Taxes without dread', 'A stronger retirement'].map((topic, index) => <div className="topic-pill reveal" key={topic}><span>0{index + 1}</span><b>{topic}</b><i>↗</i></div>)}</div></section>
  <section className="home-bridge section"><div className="bridge-shape" /><div className="bridge-copy reveal"><p className="eyebrow">A useful kind of independence</p><h2>Trust should feel<br/><em>easy to inspect.</em></h2><p>Our work is designed to give people the information, context and confidence to take the next step themselves.</p><Link className="button primary" to="/how-we-work">How we work <Arrow /></Link></div><div className="bridge-quote reveal"><span>“</span><p>We turn a difficult decision into a clear next move.</p><small>— The Finanztip approach</small></div></section></Page>
}

function HowWeWork() {
  useReveal()
  const [selected, setSelected] = useState(0)
  const stages = [
    ['01', 'Find the real question', 'Every topic starts with the consumer’s actual problem: what is confusing, expensive or difficult to compare?'],
    ['02', 'Research the market', 'We examine offers, conditions, limitations and the details that can change a decision.'],
    ['03', 'Stress-test the answer', 'Editorial findings are checked against transparent criteria before a recommendation is published.'],
    ['04', 'Keep it current', 'Advice is reviewed as products, prices and regulation move—because a good answer has an expiry date.'],
  ]
  return <Page name="work"><section className="sub-hero work-hero"><div className="sub-hero-copy reveal is-visible"><p className="eyebrow"><Spark /> How we work</p><h1>A better question changes <em>everything.</em></h1><p>Good financial advice does not start with a product. It starts by understanding what a person needs to decide.</p></div><div className="process-orbit" aria-hidden="true"><span>research</span><span>review</span><span>clarity</span><div className="orbit-core">✦</div></div></section>
  <section className="method section"><div className="method-intro reveal"><p className="eyebrow">Our method</p><h2>Rigour, without the <em>fog.</em></h2><p>Behind every clear recommendation is a deliberate process. Select a stage to see how the work moves forward.</p></div><div className="method-steps reveal">{stages.map((stage, index) => <button className={`method-step ${selected === index ? 'selected' : ''}`} onClick={() => setSelected(index)} key={stage[0]}><span>{stage[0]}</span><div><b>{stage[1]}</b><p>{stage[2]}</p></div><i>{selected === index ? '—' : '+'}</i></button>)}</div></section>
  <section className="editorial-photo section"><div className="editorial-photo-copy reveal"><p className="eyebrow">People behind the pages</p><h2>Independent thought is a <em>team sport.</em></h2><p>Clarity is not created in isolation. Researchers, editors, analysts and product specialists test assumptions, challenge each other’s conclusions and make sure the final work earns a reader’s attention.</p><div className="photo-facts"><span><b>20+</b> editorial specialists</span><span><b>1,000+</b> free guides</span></div></div><div className="editorial-image reveal"><img src={editorialWork} alt="A team of researchers reviewing information together" loading="lazy" /><i>desk notes<br/>become useful answers</i></div></section>
  <section className="work-showcase section"><div className="showcase-panel reveal"><p className="eyebrow light">From detail to decision</p><h2>We make room for the <em>important</em> part.</h2><div className="signal-lines"><i /><i /><i /><i /></div><p>Not more information. Better orientation.</p></div><div className="showcase-side reveal"><div className="micro-card"><span>01</span><b>Editorial first</b><p>Commercial partnerships cannot write the recommendation.</p></div><div className="micro-card"><span>02</span><b>Clear criteria</b><p>The “why” behind the choice should be visible.</p></div><Link className="inline-link" to="/impact">See what this enables <Arrow /></Link></div></section>
  <section className="standards section"><div className="standards-head reveal"><p className="eyebrow">A standard worth keeping</p><h2>Clear enough to use.<br/><em>Strong enough to trust.</em></h2></div><div className="standards-list">{[['No hidden language', 'We favour helpful explanation over impressive-sounding complexity.'], ['No static answers', 'Advice is revisited when the world around it changes.'], ['No closed doors', 'The work remains free and accessible at the moment people need it.']].map(([title, text], index) => <article className="reveal" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  <section className="work section compact"><div className="work-head reveal"><p className="eyebrow">The work in practice</p><h2>Less noise.<br/><em>More “now I know.”</em></h2></div><div className="work-list">{work.map((item) => <article className={`work-card ${item.tone} reveal`} key={item.no}><span className="card-no">{item.no}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="card-arrow"><Arrow /></span></article>)}</div></section></Page>
}

function Impact() {
  useReveal()
  const principles = [['Start with the reader', 'The editorial work begins with the consumer problem—not a product to sell.'], ['Show the work', 'Recommendations explain their criteria, so readers can understand the “why”, not just the result.'], ['Keep learning accessible', 'Free guides turn complicated money moments into clear next steps.']]
  return <Page name="impact"><section className="sub-hero impact-hero"><div className="sub-hero-copy reveal is-visible"><p className="eyebrow"><Spark /> Our impact</p><h1>Financial knowledge is a form of <em>freedom.</em></h1><p>Clear, practical information gives people a fairer chance to make their own choices—at the moments where those choices matter most.</p><Link className="button primary" to="/how-we-work">Our approach <Arrow /></Link></div><div className="impact-rings" aria-hidden="true"><i /><i /><i /><span>more<br/>possible</span></div></section>
  <section className="impact-numbers section"><div className="numbers-lede reveal"><p className="eyebrow">A growing public good</p><h2>Millions of decisions, made <em>more confidently.</em></h2></div><div className="numbers-grid reveal"><article><b>2m<span>+</span></b><p>people are part of the Finanztip community.</p></article><article><b>1k<span>+</span></b><p>guides across the money questions of everyday life.</p></article><article><b>13</b><p>years of helping people make their finances themselves.</p></article></div></section>
  <section className="impact-photo-section section"><div className="impact-image reveal"><img src={financialConfidence} alt="Two generations discussing a budget together at a table" loading="lazy" /></div><div className="impact-image-copy reveal"><p className="eyebrow">Knowledge travels</p><h2>When one person understands, <em>it rarely stops there.</em></h2><p>A better decision can travel through a household, across generations and into conversations with friends. Financial education creates a quiet kind of momentum.</p><div className="mini-rule" /><p className="impact-small">That is why accessible, practical guidance matters—not just to an individual, but to the people around them.</p></div></section>
  <section className="impact-story section"><div className="impact-story-copy reveal"><p className="eyebrow light">Why this changes things</p><h2>A small financial decision can have a <em>long shadow.</em></h2><p>A missed tax refund, unsuitable insurance or expensive long-term product can follow someone for years. Accessible information helps people recognise the trade-offs before they commit.</p></div><div className="impact-pulse reveal" aria-label="Illustration showing compounding confidence"><div className="pulse-dot">1</div><div className="pulse-dot">2</div><div className="pulse-dot">3</div><div className="pulse-dot">4</div><span>one clear decision<br/>can create momentum</span></div></section>
  <section className="impact-paths section"><div className="paths-heading reveal"><p className="eyebrow">Where impact begins</p><h2>Every stage of life asks a different <em>money question.</em></h2></div><div className="paths-grid">{[['Starting out', 'Your first account, first home or first serious savings decision.'], ['Building a life', 'The insurance, taxes and trade-offs that arrive as life becomes more complex.'], ['Looking ahead', 'Retirement, investing and the confidence to prepare for the next chapter.']].map(([title, text], index) => <article className="reveal" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><i>↗</i></article>)}</div></section>
  <section className="trust section"><div className="trust-top reveal"><p className="eyebrow">Our promise</p><h2>Trust is not a claim.<br/>It is a practice.</h2></div><div className="principles">{principles.map(([title, text], index) => <article className="principle reveal" key={title}><span>0{index + 1}</span><div className="check"><Check /></div><h3>{title}</h3><p>{text}</p></article>)}</div><div className="source-note reveal">This page tells Finanztip’s public story. Historical details draw on Finanztip’s company, foundation and newsroom materials. For current methodology and funding disclosure, see <a href="https://www.finanztip.de/ueber-uns/" target="_blank" rel="noreferrer">finanztip.de</a>.</div></section></Page>
}

function App() { return <BrowserRouter><Layout><Routes><Route path="/" element={<Home />} /><Route path="/how-we-work" element={<HowWeWork />} /><Route path="/impact" element={<Impact />} /></Routes></Layout></BrowserRouter> }
export default App
