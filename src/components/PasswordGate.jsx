import { useState } from 'react'
import { site } from '../config'
import { tryPassword } from '../lib/auth'

export default function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [checking, setChecking] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

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
          <div className="gate-field">
            <input
              type={showPassword ? 'text' : 'password'}
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
            <button
              type="button"
              className="gate-toggle"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              aria-pressed={showPassword}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button type="submit" className="btn" disabled={checking}>
            Enter
          </button>
        </form>
        {error && <p className="gate-error">{error}</p>}
      </div>
    </div>
  )
}
