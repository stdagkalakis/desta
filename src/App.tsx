import Countdown from './Countdown'
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
        <div className="inner">
          <h2>Counting down</h2>
          <Countdown target={wedding.dateTime} />
        </div>
      </section>

      <section className="screen" id="where">
        <div className="inner">
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
        </div>
      </section>

      <section className="screen" id="photos">
        <div className="inner">
          <h2>Photos</h2>
          <p className="muted">Share your photos from the day with us.</p>
          <a className="link" href={wedding.photosUrl} target="_blank" rel="noreferrer">
            Upload your photos
          </a>
          <p className="note">A Google account is needed to upload.</p>
        </div>
        <footer className="footer">
          {wedding.bride} &amp; {wedding.groom} · {wedding.dateLabel}
        </footer>
      </section>
    </main>
  )
}
