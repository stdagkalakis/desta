import { downloadIcs, googleCalendarUrl } from './calendar'

function CalendarIcon() {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  )
}

export default function AddToCalendar() {
  return (
    <div className="calendar-actions">
      <a className="button" href={googleCalendarUrl()} target="_blank" rel="noreferrer">
        <CalendarIcon />
        Add to Google Calendar
      </a>
      <button className="button" type="button" onClick={downloadIcs}>
        <CalendarIcon />
        Apple / Outlook (.ics)
      </button>
    </div>
  )
}
