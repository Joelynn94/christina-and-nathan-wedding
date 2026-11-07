import { useEffect, useState } from 'react'
import { checkExistingAccess } from './lib/auth'
import PasswordGate from './components/PasswordGate'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Rsvp from './components/Rsvp'
import PhotoBooth from './components/PhotoBooth'
import QrPage from './components/QrPage'
import { Attire, Explore, Faq, Footer, OurStory, Weekend } from './components/Sections'

// Fades sections in as they scroll into view.
function useReveal(enabled) {
  useEffect(() => {
    if (!enabled) return
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.15 },
    )
    document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [enabled])
}

// Checked once on load (outside React so StrictMode's double render can't consume the QR key twice).
const initialAccess = checkExistingAccess()

export default function App() {
  const [unlocked, setUnlocked] = useState(initialAccess)
  useReveal(unlocked)

  if (!unlocked) return <PasswordGate onUnlock={() => setUnlocked(true)} />
  if (new URLSearchParams(window.location.search).has('qr')) return <QrPage />

  return (
    <>
      <Nav />
      <Hero />
      <main>
        <OurStory />
        <Weekend />
        <Explore />
        <Attire />
        <Rsvp />
        <PhotoBooth />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
