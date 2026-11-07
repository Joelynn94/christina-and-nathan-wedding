import { useEffect, useRef, useState } from 'react'
import { site, slides } from '../config'
import Countdown from './Countdown'
import { googleCalendarUrl, icsDataUrl } from '../lib/calendar'

const SLIDE_MS = 6000

// Shown underneath each photo, so the slideshow still looks good before real photos are added.
const fallbacks = [
  'linear-gradient(135deg, #9fbfdc, #e8f0f8)',
  'linear-gradient(160deg, #1f2a44, #6f8fb3)',
  'linear-gradient(120deg, #c4cad1, #f4f6f8)',
  'linear-gradient(150deg, #7b9cc4, #1f2a44)',
]

const weddingDate = new Date(site.ceremony.start).toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'America/New_York',
})

export default function Hero() {
  const [active, setActive] = useState(0)
  const [calOpen, setCalOpen] = useState(false)
  const calRef = useRef(null)

  useEffect(() => {
    // Restarts the timer on every change, so clicking a dot gives that photo its full time.
    const id = setTimeout(() => setActive((active + 1) % slides.length), SLIDE_MS)
    return () => clearTimeout(id)
  }, [active])

  // Close the calendar menu when clicking elsewhere.
  useEffect(() => {
    if (!calOpen) return
    const close = (e) => !calRef.current?.contains(e.target) && setCalOpen(false)
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [calOpen])

  return (
    <header id="home" className="hero">
      <div className="slides">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`slide ${i === active ? 'active' : ''}`}
            style={{ backgroundImage: `url('${src}'), ${fallbacks[i % fallbacks.length]}` }}
          />
        ))}
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <Countdown />
        <p className="eyebrow light fade-in" style={{ '--d': '0.2s' }}>
          Save the Date
        </p>
        <h1 className="names fade-in" style={{ '--d': '0.5s' }}>
          {site.partner1} <span className="amp">&amp;</span> {site.partner2}
        </h1>
        <p className="hero-date fade-in" style={{ '--d': '0.9s' }}>
          {weddingDate}
        </p>
        <p className="hero-place fade-in" style={{ '--d': '1.1s' }}>
          {site.location}
        </p>

        <div className="cal-wrap fade-in" style={{ '--d': '1.4s' }} ref={calRef}>
          <button className="btn btn-light" onClick={() => setCalOpen(!calOpen)} aria-expanded={calOpen}>
            Add to Calendar
          </button>
          {calOpen && (
            <div className="cal-menu">
              <a href={googleCalendarUrl()} target="_blank" rel="noopener noreferrer">
                Google Calendar
              </a>
              <a href={icsDataUrl()} download="christina-nathan-wedding.ics">
                Apple / Outlook
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="slide-dots">
        {slides.map((src, i) => (
          <button
            key={src}
            className={i === active ? 'active' : ''}
            aria-label={`Show photo ${i + 1}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
      <a href="#story" className="scroll-cue" aria-label="Scroll down">
        ⌄
      </a>
    </header>
  )
}
