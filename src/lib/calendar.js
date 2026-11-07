import { site } from '../config'

const title = `${site.partner1} & ${site.partner2}'s Wedding`
const details = `We can't wait to celebrate with you! Details: ${site.domain}`

// 2027-03-13T22:00:00.000Z -> 20270313T220000Z
const toUtcStamp = (iso) => new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')

export function googleCalendarUrl() {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${toUtcStamp(site.ceremony.start)}/${toUtcStamp(site.ceremony.end)}`,
    details,
    location: site.ceremony.venue,
  })
  return `https://calendar.google.com/calendar/render?${params}`
}

export function icsDataUrl() {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//CN Wedding//EN',
    'BEGIN:VEVENT',
    `UID:wedding-${toUtcStamp(site.ceremony.start)}@nathanandchristinasayido.com`,
    `DTSTAMP:${toUtcStamp(new Date().toISOString())}`,
    `DTSTART:${toUtcStamp(site.ceremony.start)}`,
    `DTEND:${toUtcStamp(site.ceremony.end)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${details}`,
    `LOCATION:${site.ceremony.venue.replace(/,/g, '\\,')}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`
}
