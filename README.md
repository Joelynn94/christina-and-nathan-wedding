# Christina & Nathan · nathanandchristinasayido.com

Wedding website: Hilton Head Island, March 11–14, 2027.

```bash
npm install
npm run dev      # http://localhost:5173  (password: christina+nathan+2027)
npm run build    # outputs to dist/
```

## Editing

- **All details** (names, date, venue, password, schedule, attractions, Q&A, links) are in `src/config.js`.
- **Photos**: put them in `public/images/` as `slide1.jpg`–`slide4.jpg` and `couple.jpg` (or change the list in config). Use landscape photos about 2000px wide for the slideshow.
- **Our Story text**: `src/components/Sections.jsx`.
- **Colors / fonts**: top of `src/index.css`.

## Access

- Guests type the password from their invitation, **or** scan the QR code, which links to `/?key=<qrKey>` and unlocks the site with no typing.
- To get the printable QR code: unlock the site, then open `/?qr`.
- This gate keeps casual visitors and search engines out, but it is not strong security: the content ships in the page's JavaScript. Don't put anything truly private (like a home address) on the site.

## Still to set up

1. **RSVP**: make a free form at formspree.io and paste its endpoint into `rsvpEndpoint`.
2. **Photo booth**: create a Google Photos shared album with "collaborate" turned on and paste its link into `photoUploadUrl` / `photoAlbumUrl`.
3. **Hosting**: push to GitHub and import into Netlify or Vercel (free), then point the domain at it.
