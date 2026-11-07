// Simple content sections. Edit the text right here, or the lists in config.js.
import { useState } from 'react'
import { attractions, couplePhoto, faqs, schedule, site } from '../config'

function SectionTitle({ children, lead }) {
  return (
    <>
      <h2 className="section-title">{children}</h2>
      <div className="divider" />
      {lead && <p className="lead">{lead}</p>}
    </>
  )
}

export function OurStory() {
  const [photoMissing, setPhotoMissing] = useState(false)
  return (
    <section id="story" className="section">
      <SectionTitle>Our Story</SectionTitle>
      <div className="story">
        <figure className={`story-photo reveal ${photoMissing ? 'placeholder' : ''}`}>
          {!photoMissing && <img src={couplePhoto} alt={`${site.partner1} and ${site.partner2}`} onError={() => setPhotoMissing(true)} />}
        </figure>
        <div className="story-text reveal">
          <h3 className="script">
            {site.partner1} &amp; {site.partner2}
          </h3>
          {/* TODO: write your story */}
          <p>
            Tell guests how you met, your first date, and the proposal. Two or three short paragraphs is plenty: a few
            fun details, maybe an inside joke or two.
          </p>
          <p>We can't wait to celebrate with you on Hilton Head Island.</p>
          <ul className="timeline">
            <li><strong>20XX</strong> We met</li>
            <li><strong>20XX</strong> First date</li>
            <li><strong>20XX</strong> The proposal</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Weekend() {
  return (
    <section id="weekend" className="section tinted">
      <SectionTitle lead={`${site.weekendDates} · Hilton Head Island`}>The Weekend</SectionTitle>
      <div className="cards">
        {schedule.map((item) => (
          <article key={item.title} className={`card reveal ${item.featured ? 'featured' : ''}`}>
            <p className="card-day">{item.day}</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Explore() {
  return (
    <section id="explore" className="section">
      <SectionTitle lead="Staying a few extra days? Here are a few of our favorites.">Explore Hilton Head</SectionTitle>
      <div className="cards three">
        {attractions.map((item) => (
          <article key={item.title} className="card reveal">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Attire() {
  const palette = [
    ['Powder Blue', 'var(--powder)'],
    ['Navy', 'var(--navy)'],
    ['Silver', 'var(--silver)'],
    ['White', '#fff'],
  ]
  return (
    <section id="attire" className="section tinted">
      <SectionTitle>Attire</SectionTitle>
      <div className="attire reveal">
        <p className="lead">Formal Coastal · Cocktail Attire</p>
        <p>
          Think elegant and breezy. Suits, or a jacket and tie, for gentlemen; cocktail dresses or dressy jumpsuits for
          ladies. The ceremony is outdoors, so consider block heels or wedges, and bring a light layer for the March
          evening breeze.
        </p>
        <p className="palette-label">Our colors</p>
        <div className="palette">
          {palette.map(([name, color]) => (
            <div key={name}>
              <span style={{ background: color }} />
              <small>{name}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section id="faq" className="section">
      <SectionTitle>Q &amp; A</SectionTitle>
      <div className="faq">
        {faqs.map(({ q, a }) => (
          <details key={q} className="reveal">
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export function Footer() {
  const date = new Date(site.ceremony.start)
  const stamp = [date.getMonth() + 1, date.getDate(), date.getFullYear()].map((n) => String(n).padStart(2, '0')).join(' · ')
  return (
    <footer className="footer">
      <p className="script">
        {site.partner1} &amp; {site.partner2}
      </p>
      <p>
        {stamp} · Hilton Head Island
      </p>
    </footer>
  )
}
