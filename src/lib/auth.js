import { passwordHash, qrKey } from '../config'

const STORAGE_KEY = 'cn-wedding-access'

// We store the current hash, so changing the password locks everyone out again.
function remember() {
  try {
    localStorage.setItem(STORAGE_KEY, passwordHash)
  } catch {
    // Private browsing etc. Access then lasts for this visit only.
  }
}

// Returns true if the visitor already unlocked the site, or arrived via the QR link.
export function checkExistingAccess() {
  const params = new URLSearchParams(window.location.search)
  if (params.get('key') === qrKey) {
    remember()
    params.delete('key')
    const query = params.toString()
    const clean = window.location.pathname + (query ? `?${query}` : '') + window.location.hash
    window.history.replaceState(null, '', clean)
    return true
  }
  try {
    return localStorage.getItem(STORAGE_KEY) === passwordHash
  } catch {
    return false
  }
}

async function sha256(text) {
  const bytes = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

export async function tryPassword(input) {
  // Case and surrounding spaces don't matter, which saves guests some frustration.
  const ok = (await sha256(input.trim().toLowerCase())) === passwordHash
  if (ok) remember()
  return ok
}
