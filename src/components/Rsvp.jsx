import { useState } from 'react'
import { rsvpEndpoint, site } from '../config'

export default function Rsvp() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [attending, setAttending] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!rsvpEndpoint) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(rsvpEndpoint, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="rsvp" className="section">
      <h2 className="section-title">RSVP</h2>
      <div className="divider" />
      <p className="lead">
        Kindly reply by <strong>{site.rsvpDeadline}</strong>
      </p>

      {status === 'sent' ? (
        <div className="rsvp-thanks reveal visible">
          <p className="script">Thank you!</p>
          <p>{attending === 'no' ? "We'll miss you, and we'll be thinking of you." : "We can't wait to celebrate with you."}</p>
        </div>
      ) : (
        <form className="rsvp-form reveal" onSubmit={handleSubmit}>
          <div className="row">
            <label>
              Full name(s)
              <input name="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" required />
            </label>
          </div>

          <fieldset className="attending">
            <legend>Will you be joining us?</legend>
            <label>
              <input type="radio" name="attending" value="yes" required onChange={() => setAttending('yes')} /> Joyfully
              accepts
            </label>
            <label>
              <input type="radio" name="attending" value="no" onChange={() => setAttending('no')} /> Regretfully declines
            </label>
          </fieldset>

          {attending === 'yes' && (
            <>
              <div className="row">
                <label>
                  Number of guests
                  <input name="guests" type="number" min="1" max="6" defaultValue="1" />
                </label>
                <label>
                  Joining us for
                  <select name="events" defaultValue="all">
                    <option value="all">The whole weekend</option>
                    <option value="wedding">Wedding day only</option>
                  </select>
                </label>
              </div>
              <label>
                Dietary restrictions or allergies
                <input name="dietary" />
              </label>
            </>
          )}

          <label>
            A song request or a note for us
            <textarea name="message" rows="3" />
          </label>

          <button type="submit" className="btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send RSVP'}
          </button>
          {status === 'error' && (
            <p className="form-error">
              {rsvpEndpoint
                ? 'Something went wrong. Please try again or reach out to us directly.'
                : 'RSVPs are not connected yet (set rsvpEndpoint in src/config.js).'}
            </p>
          )}
        </form>
      )}
    </section>
  )
}
