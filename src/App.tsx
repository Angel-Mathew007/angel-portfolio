import { portfolio as p } from './data/portfolio'
import { Frame } from './components/Frame'
import { FlipCard } from './components/FlipCard'
import { Reveal } from './components/Reveal'
import { Steps } from './components/Steps'
import { Gallery } from './components/Gallery'
import { ThemeToggle } from './components/ThemeToggle'

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-row">
          <a href="#top" className="logo">{p.firstName}. <span className="tag">{p.role}</span></a>
          <nav aria-label="Sections">
            <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#education">Education</a>
          </nav>
          <div className="nav-actions">
            <ThemeToggle />
            <a href="#contact" className="btn royal">Let's Talk</a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="wrap hero">
          <div>
            <span className="pill">{p.pill}</span>
            <p className="hand big">Hi, I'm</p>
            <h1>{p.firstName}</h1>
            <p className="tagline">{p.tagline.join(' | ')}</p>
            <p className="intro">{p.intro}</p>
            <div className="buttons">
              <a className="btn dark" href={`mailto:${p.email}`}>Email me</a>
              <a className="btn" href={p.resume} download>Download resume</a>
            </div>
          </div>
          <div className="hero-art">
            <figure className="polaroid tilt-r">
              <Frame src={p.photo} alt={`Portrait of ${p.fullName}`} label="PHOTO GOES HERE" lazy={false} />
              <figcaption className="hand">{p.fullName}</figcaption>
              <span className="sticky sky hand">{p.heroNote}</span>
            </figure>
            <ul className="checklist">{p.checklist.map(c => <li key={c}>{c}</li>)}</ul>
          </div>
        </section>

        <div className="ticker" aria-label={p.ticker.join(', ')}>
          <div className="track" aria-hidden="true">
            {[0, 1].map(n => <span key={n}>{p.ticker.map(t => <span key={t}>{t} ✦ </span>)}</span>)}
          </div>
        </div>

        <section id="about" className="wrap section two">
          <Reveal>
            <h2>{p.about.heading}</h2>
            {p.about.story.map(s => <p key={s}>{s}</p>)}
            <p className="highlight"><mark>{p.about.highlight}</mark></p>
          </Reveal>
          <Reveal className="about-side">
            <figure className="polaroid small tilt-l">
              <Frame src={p.about.photo} alt="Angel holding a trophy and certificate outside Fr. C. Rodrigues Institute of Technology" label="PHOTO GOES HERE" />
              <figcaption className="hand">{p.about.photoCaption}</figcaption>
            </figure>
            <div className="card royal">
              <h3>CURRENTLY</h3>
              <ul>{p.about.currently.map(c => <li key={c}>{c}</li>)}</ul>
            </div>
          </Reveal>
        </section>

        <section id="skills" className="wrap section">
          <h2>Things I can actually do.</h2>
          <p className="hand note">tap a card to see the tools ✦</p>
          <div className="grid four">{p.skills.map((s, i) => <FlipCard key={s.title} index={i} {...s} />)}</div>
        </section>

        <section id="projects" className="wrap section">
          <h2>Stuff I've worked on.</h2>
          <div className="grid two-col">
            {p.projects.map(pr => (
              <Reveal key={pr.title}>
                <article className="card project">
                  {pr.images.length > 0 && <Gallery images={pr.images} title={pr.title} />}
                  <span className="badge">{pr.badge}</span>
                  <h3>{pr.title}</h3>
                  <p className="meta">{pr.meta}</p>
                  <p>{pr.did}</p>
                  <ul>{pr.results.map(r => <li key={r}>{r}</li>)}</ul>
                </article>
              </Reveal>
            ))}
          </div>
          <p><a href={p.github} target="_blank" rel="noreferrer">More on GitHub ↗</a></p>
        </section>

        <section id="education" className="wrap section">
          <h2>The formal stuff.</h2>
          {p.education.map((e, i) => (
            <Reveal key={e.degree} className="slide" delay={i * 150}>
              <div className="card edu">
                <span className="year">{e.years}</span>
                <div><h3>{e.degree}</h3><p>{e.place}</p><p className="meta">{e.note}</p></div>
              </div>
            </Reveal>
          ))}
          <div className="grid two-col wins">
            {p.wins.map(w => (
              <Reveal key={w.title}>
                <div className="card"><h3>{w.title}</h3><ul>{w.items.map(x => <li key={x}>{x}</li>)}</ul></div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="wrap section">
          <h2>How I approach a project.</h2>
          <Steps steps={p.steps} />
        </section>

        <section id="contact" className="contact">
          <div className="wrap two">
            <div>
              <h2>Got something interesting?</h2>
              <p><a href={`mailto:${p.email}`}>{p.email}</a></p>
              <p><a href={p.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></p>
              <p><a href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a></p>
            </div>
            <div>
              <h3>OPEN TO</h3>
              <ul>{p.openTo.map(o => <li key={o}>{o}</li>)}</ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap">
        <span>{p.fullName} © {new Date().getFullYear()}</span>
        <span className="hand">{p.footerLine}</span>
      </footer>
    </>
  )
}
