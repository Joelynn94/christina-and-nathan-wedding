import { useEffect, useState } from 'react'
import { site } from '../config'

const target = new Date(site.ceremony.start).getTime()

function remaining() {
  const ms = Math.max(0, target - Date.now())
  return {
    Days: Math.floor(ms / 86400000),
    Hours: Math.floor(ms / 3600000) % 24,
    Minutes: Math.floor(ms / 60000) % 60,
    Seconds: Math.floor(ms / 1000) % 60,
  }
}

export default function Countdown() {
  const [time, setTime] = useState(remaining)

  useEffect(() => {
    const id = setInterval(() => setTime(remaining()), 1000)
    return () => clearInterval(id)
  }, [])

  const done = Object.values(time).every((v) => v === 0)

  return (
    <section id="countdown" className="section countdown-section">
      <p className="eyebrow">{done ? 'We said I do!' : 'Counting down to forever'}</p>
      {!done && (
        <div className="countdown">
          {Object.entries(time).map(([label, value]) => (
            <div key={label}>
              <span>{String(value).padStart(2, '0')}</span>
              <small>{label}</small>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
