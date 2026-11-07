import { useState } from 'react'
import { site } from '../config'
import { tryPassword } from '../lib/auth'

export default function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [checking, setChecking] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setChecking(true)
    try {
      if (await tryPassword(value)) onUnlock()
      else setError("Hmm, that's not quite right. Try again?")
    } catch {
      // crypto.subtle only works over https (or localhost).
      setError('Something went wrong. Try scanning the QR code on your invitation.')
    }
    setChecking(false)
  }

  return (
    <div className="gate">
      <div className="gate-card">
        <p className="script gate-names">
          {site.partner1} &amp; {site.partner2}
        </p>
        <p className="eyebrow">Enter the password from your invitation</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            autoFocus
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
              setError('')
            }}
            required
          />
          <button type="submit" className="btn" disabled={checking}>
            Enter
          </button>
        </form>
        {error && <p className="gate-error">{error}</p>}
      </div>
    </div>
  )
}
