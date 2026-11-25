import Countdown from './Countdown'
import { wedding } from './content'

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <p className="kicker">We're getting married</p>
        <h1 className="names">
          {wedding.bride} <span className="amp">&amp;</span> {wedding.groom}
        </h1>
        <p className="date">{wedding.dateLabel}</p>
        <p className="muted">
          {wedding.venue} · Ceremony at {wedding.timeLabel}
        </p>
      </header>

      <section className="section">
        <h2>Counting down</h2>
        <Countdown target={wedding.dateTime} />
      </section>

      <section className="section">
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
      </section>

      <section className="section">
        <h2>Photos</h2>
        <p className="muted">Share your photos from the day with us.</p>
        <a className="link" href={wedding.photosUrl} target="_blank" rel="noreferrer">
          Open the shared album
        </a>
      </section>

      <footer className="footer">
        <p className="muted">
          {wedding.bride} &amp; {wedding.groom} · {wedding.dateLabel}
        </p>
      </footer>
    </main>
  )
}
