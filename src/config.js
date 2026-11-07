// Everything you'll want to edit lives here.

export const site = {
  partner1: 'Christina',
  partner2: 'Nathan',
  domain: 'https://nathanandchristinasayido.com',
  hashtag: '#ChristinaAndNathanSayIDo',
  location: 'Manakiki Golf Course · Willoughby, Ohio',
  city: 'Willoughby, Ohio',
  weekendDates: 'April 15 – 18, 2027',

  // Ceremony start/end in local time (Eastern). Change once the venue confirms.
  ceremony: {
    start: '2027-04-17T17:00:00-04:00',
    end: '2027-04-17T23:00:00-04:00',
    venue: 'Manakiki Golf Course, Willoughby, OH',
  },

  rsvpDeadline: 'January 15, 2027',
}

// ---- Access ----
// The password is stored as a SHA-256 hash, not as plain text.
// Guests' input is lowercased before checking, so pick a lowercase password. To change it, run:
//   node -e "console.log(require('crypto').createHash('sha256').update('NEWPASSWORD').digest('hex'))"
// Current placeholder password: hiltonhead2027
export const passwordHash = '14385f7e900d3bcf055b9fc68cea6328d76e119638039f27ea33a66a41f9bf8b'

// The QR code links to  <domain>/?key=<qrKey>, which unlocks the site with no typing.
// Change this to any random string if you ever need to revoke old QR codes.
export const qrKey = 'jlHx5lkwjVAq'

// ---- Integrations ----
// RSVP: create a free form at https://formspree.io and paste its endpoint here,
// e.g. 'https://formspree.io/f/abcdwxyz'. Leave empty until it's set up.
export const rsvpEndpoint = ''

// Photo booth: a shared album guests can add to (Google Photos shared album,
// or a Dropbox/Google Drive "file request" link).
export const photoUploadUrl = ''
export const photoAlbumUrl = ''

// Hero slideshow. Drop photos into /public/images and list them here.
// Missing files fall back to a soft blue gradient, so it still looks fine before photos exist.
export const slides = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
  '/images/slide4.jpg',
]

export const couplePhoto = '/images/couple.jpg'

export const schedule = [
  { day: 'Thursday · April 15', title: 'Arrivals', text: 'Settle in and get to know Willoughby.' },
  { day: 'Friday · April 16', title: 'Welcome Party', text: 'Time and location TBD. Casual drinks and bites.' },
  { day: 'Saturday · April 17', title: 'The Wedding', text: 'Ceremony at 5:00 PM at Manakiki Golf Course, reception to follow.', featured: true },
  { day: 'Sunday · April 18', title: 'Farewell Brunch', text: 'One last hug before heading home.' },
]

export const attractions = [
  { title: 'Downtown Willoughby', text: 'A walkable historic downtown with local restaurants, breweries, and shops.' },
  { title: 'Holden Arboretum', text: 'Trails, gardens, and the Murch Canopy Walk and Kalberer Emergent Tower high above the forest.' },
  { title: 'Headlands Beach State Park', text: "Ohio's longest natural beach on Lake Erie, with a walk out to the lighthouse." },
  { title: 'Chagrin Falls', text: 'A charming village built around a waterfall, with shops and the famous popcorn shop.' },
  { title: 'Cleveland', text: 'About 25 minutes away: the Rock & Roll Hall of Fame, West Side Market, and University Circle museums.' },
  { title: 'Wine Country', text: "Grand River Valley wineries in Ohio's wine country, about 30 minutes east." },
]

export const faqs = [
  { q: 'Where should we stay?', a: 'We have room blocks at [Hotel Name]. Use code [CODE] or book through [link] by [date].' },
  { q: "What's the closest airport?", a: 'Cleveland Hopkins International (CLE) is the closest major airport, about 35 minutes from Willoughby.' },
  { q: 'Can I bring a plus one?', a: "We've included everyone invited by name on your invitation. Please reach out with any questions!" },
  { q: 'Are kids welcome?', a: '[Let guests know your policy here.]' },
  { q: 'Will the ceremony be outdoors?', a: 'Yes, weather permitting. We have a backup plan just in case.' },
  { q: 'Do you have a registry?', a: 'Your presence is the greatest gift. If you would like, you can find our registry [here].' },
  { q: "What's the weather like in April?", a: 'Spring in northeast Ohio is unpredictable: usually highs in the upper 50s to low 60s °F, and chilly in the evenings. Bring a warm layer.' },
]
