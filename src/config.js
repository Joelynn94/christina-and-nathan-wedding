// Everything you'll want to edit lives here.

export const site = {
  partner1: 'Christina',
  partner2: 'Nathan',
  domain: 'https://nathanandchristinasayido.com',
  hashtag: '#NathanAndChristinaSayIDo',
  location: 'Hilton Head Island, South Carolina',
  weekendDates: 'March 11 – 14, 2027',

  // Ceremony start/end in local time (Eastern). Change once the venue confirms.
  ceremony: {
    start: '2027-03-13T17:00:00-05:00',
    end: '2027-03-13T23:00:00-05:00',
    venue: 'Venue TBD, Hilton Head Island, SC',
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
  { day: 'Thursday · March 11', title: 'Arrivals', text: 'Settle in, hit the beach, and enjoy the island.' },
  { day: 'Friday · March 12', title: 'Welcome Party', text: 'Time and location TBD. Casual drinks and bites.' },
  { day: 'Saturday · March 13', title: 'The Wedding', text: 'Ceremony at 5:00 PM, reception to follow.', featured: true },
  { day: 'Sunday · March 14', title: 'Farewell Brunch', text: 'One last hug before heading home.' },
]

export const attractions = [
  { title: 'Harbour Town Lighthouse', text: 'The iconic red-and-white lighthouse in Sea Pines, with shops and harbor views.' },
  { title: 'Coligny Beach', text: 'An easygoing beach with boardwalks, shops, and restaurants close by.' },
  { title: 'Biking the Island', text: 'Over 60 miles of paths. Rent bikes and ride the hard-packed sand at low tide.' },
  { title: 'Dolphin Tours', text: 'Kayak or boat tours through Broad Creek and Calibogue Sound.' },
  { title: 'Shelter Cove', text: 'Waterfront dining, live music, and sunset views.' },
  { title: 'Day Trip to Savannah', text: 'About 45 minutes away, with historic squares, River Street, and great food.' },
]

export const faqs = [
  { q: 'Where should we stay?', a: 'We have room blocks at [Hotel Name]. Use code [CODE] or book through [link] by [date].' },
  { q: "What's the closest airport?", a: 'Hilton Head Island Airport (HHH) is closest. Savannah/Hilton Head International (SAV) is about 45 minutes away and usually has more flight options.' },
  { q: 'Can I bring a plus one?', a: "We've included everyone invited by name on your invitation. Please reach out with any questions!" },
  { q: 'Are kids welcome?', a: '[Let guests know your policy here.]' },
  { q: 'Will the ceremony be outdoors?', a: 'Yes, weather permitting. We have a backup plan just in case.' },
  { q: 'Do you have a registry?', a: 'Your presence is the greatest gift. If you would like, you can find our registry [here].' },
  { q: "What's the weather like in March?", a: 'Usually highs in the upper 60s to low 70s °F, and cooler in the evenings. Bring a light layer.' },
]
