import { useEffect, useState } from 'react'

function parts(msLeft: number) {
  const s = Math.max(0, Math.floor(msLeft / 1000))
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  }
}

export default function Countdown({ target }: { target: string }) {
  const targetMs = new Date(target).getTime()
  const [left, setLeft] = useState(() => targetMs - Date.now())

  useEffect(() => {
    const id = setInterval(() => setLeft(targetMs - Date.now()), 1000)
    return () => clearInterval(id)
  }, [targetMs])

  if (left <= 0) return <p className="muted">The big day is here!</p>

  const { days, hours, minutes, seconds } = parts(left)

  return (
    <ul className="countdown">
      {[
        ['Days', days],
        ['Hours', hours],
        ['Minutes', minutes],
        ['Seconds', seconds],
      ].map(([label, value]) => (
        <li key={label}>
          <span className="countdown-value">{value}</span>
          <span className="countdown-label">{label}</span>
        </li>
      ))}
    </ul>
  )
}
