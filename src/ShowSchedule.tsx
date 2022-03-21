import { baseGongSchedule } from './schedule'
import { convertTimes as pretty } from './convert-times'
import { getNextTimeIndex } from './get-next-time-index'
import { CurrentTime } from './CurrentTime'
import { useCurrentTimeWithoutSeconds } from './useCurrentTime'

export const ShowSchedule = () => {
  const nextTimeIndex = getNextTimeIndex(
    useCurrentTimeWithoutSeconds(),
    Object.keys(baseGongSchedule).map(Number)
  )
  return (
    <main>
      <CurrentTime />

      {nextTimeIndex === -1 ? (
        <div style={{ textAlign: 'center' }}>
          <p className="no-more">🛏️ &nbsp;No more gongs left today.</p>
        </div>
      ) : (
        <defs>
          ⚠️ Warning — Still a Work-in-Progress
          <br />
          Gongs do not play automatically yet!
        </defs>
      )}

      <h2>Gong Schedule</h2>

      {Object.entries(baseGongSchedule).map(([time, amount], index) => (
        <p key={index}>
          <span style={{ width: 77 }}>{pretty(+time)}</span>
          <span style={{ width: 26, opacity: 0.4 }}>—</span>
          <span>{amount} times</span>
          {index === nextTimeIndex && (
            <span style={{ marginLeft: 15, fontStyle: 'italic', opacity: 0.7 }}>
              Starts in mm:ss
            </span>
          )}
        </p>
      ))}

      <style jsx>{`
        defs {
          margin-top: 1.5rem;
          display: block;
          font-style: italic;
        }

        .no-more {
          border: 1px solid #fff3;
          display: inline-block;
          padding: 10px 15px;
          font-style: italic;

          align-self: center;
        }

        span {
          display: inline-block;
        }
      `}</style>
    </main>
  )
}
