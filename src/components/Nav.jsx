import { useEffect, useState } from 'react'

const links = [
  ['story', 'Our Story'],
  ['weekend', 'Weekend'],
  ['explore', 'Explore'],
  ['attire', 'Attire'],
  ['rsvp', 'RSVP'],
  ['photos', 'Photo Booth'],
  ['faq', 'Q&A'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled || open ? 'nav-solid' : ''}`}>
      <a href="#home" className="nav-logo" onClick={() => setOpen(false)}>
        C <span>&amp;</span> N
      </a>
      <button className="nav-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? '✕' : '☰'}
      </button>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(([id, label]) => (
          <li key={id}>
            <a href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
