// Helper page for printing invitations: open  /?qr  after unlocking the site.
// Its QR code links straight in, so guests never type the password.
import { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import { qrKey, site } from '../config'

export default function QrPage() {
  const url = `${site.domain}/?key=${qrKey}`
  const [svg, setSvg] = useState('')

  useEffect(() => {
    QRCode.toString(url, { type: 'svg', margin: 1, color: { dark: '#1f2a44', light: '#ffffff' } }).then(setSvg)
  }, [url])

  const download = () => {
    const a = document.createElement('a')
    a.href = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
    a.download = 'wedding-qr.svg'
    a.click()
  }

  return (
    <main className="qr-page">
      <p className="script">
        {site.partner1} &amp; {site.partner2}
      </p>
      <div className="qr-code" dangerouslySetInnerHTML={{ __html: svg }} />
      <p className="small">{url}</p>
      <button className="btn" onClick={download} disabled={!svg}>
        Download SVG (for print)
      </button>
      <a href="/" className="small">← Back to site</a>
    </main>
  )
}
