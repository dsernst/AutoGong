import { baseGongSchedule } from './schedule'
import { convertTimes as p } from './convert-times'

export const ShowSchedule = () => {
  return (
    <main>
      <h2>Gong Schedule</h2>

      <defs>⚠️ Warning: Gongs do not play automatically yet!</defs>

      {Object.entries(baseGongSchedule).map(([time, amount]) => (
        <p key={time}>
          {p(+time)} - {amount} times
        </p>
      ))}

      <style jsx>{`
        defs {
          font-style: italic;
        }
      `}</style>
    </main>
  )
}
