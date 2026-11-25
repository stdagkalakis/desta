import AddToCalendar from './AddToCalendar'
import Countdown from './Countdown'
import Reveal from './Reveal'
import { wedding } from './content'

export default function App() {
  return (
    <main>
      <section className="screen hero">
        <div className="inner">
          <p className="kicker">We're getting married</p>
          <h1 className="names">
            {wedding.bride} <span className="amp">&amp;</span> {wedding.groom}
          </h1>
          <p className="date">{wedding.dateLabel}</p>
          <p className="muted">
            {wedding.venue} · Ceremony at {wedding.timeLabel}
          </p>
        </div>
        <a className="scroll-hint" href="#countdown" aria-label="Scroll down">
          ⌄
        </a>
      </section>

      <section className="screen" id="countdown">
        <Reveal>
          <h2>Counting down</h2>
          <Countdown target={wedding.dateTime} />
          <AddToCalendar />
        </Reveal>
      </section>

      <section className="screen" id="where">
        <Reveal>
          <h2>Where</h2>
          <p className="muted">
            {wedding.venue}
            <br />
            {wedding.city}
          </p>
          <div className="map">
            <iframe
              title="Venue location"
              src={wedding.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a className="link" href={wedding.mapLink} target="_blank" rel="noreferrer">
            Open in Google Maps
          </a>
        </Reveal>
      </section>

      <section className="screen" id="photos">
        <Reveal>
          <h2>Photos</h2>
          <p className="muted">Share your photos from the day with us.</p>
          <a className="link" href={wedding.photosUrl} target="_blank" rel="noreferrer">
            Upload your photos
          </a>
          <p className="note">A Google account is needed to upload.</p>
        </Reveal>
        <footer className="footer">
          {wedding.bride} &amp; {wedding.groom} · {wedding.dateLabel}
        </footer>
      </section>
    </main>
  )
}
