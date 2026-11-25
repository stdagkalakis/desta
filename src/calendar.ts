import { wedding } from './content'

const start = new Date(wedding.dateTime)
const end = new Date(start.getTime() + wedding.durationHours * 60 * 60 * 1000)

const title = `Wedding of ${wedding.bride} & ${wedding.groom}`
const location = `${wedding.venue}, ${wedding.city}`

/** 20270903T153000Z */
function utc(date: Date) {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}

export function googleCalendarUrl() {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${utc(start)}/${utc(end)}`,
    location,
    details: wedding.mapLink,
  })
  return `https://calendar.google.com/calendar/render?${params}`
}

/** Minimal iCalendar file for Apple Calendar, Outlook, etc. */
export function icsContent() {
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//desta-wedd.ing//EN',
    'BEGIN:VEVENT',
    `UID:${utc(start)}-desta-wedd.ing`,
    `DTSTAMP:${utc(new Date())}`,
    `DTSTART:${utc(start)}`,
    `DTEND:${utc(end)}`,
    `SUMMARY:${title}`,
    `LOCATION:${location}`,
    `DESCRIPTION:${wedding.mapLink}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
}

export function downloadIcs() {
  const blob = new Blob([icsContent()], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'wedding.ics'
  a.click()
  URL.revokeObjectURL(url)
}
