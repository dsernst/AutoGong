import { baseGongSchedule } from './schedule'
import { convertTimes as pretty } from './convertTimes'
import { getNextTimeIndex } from './getNextTimeIndex'
import { useCurrentTimeWithoutSeconds } from './useCurrentTime'
import { NextUpCountdown } from './NextUpCountdown'

export const ShowSchedule = ({
  isVipassanaDay,
}: {
  isVipassanaDay: boolean
}) => {
  const nextTimeIndex = getNextTimeIndex(
    useCurrentTimeWithoutSeconds(),
    Object.keys(baseGongSchedule).map(Number)
  )
  return (
    <section>
      {nextTimeIndex === -1 && (
        <div style={{ textAlign: 'center' }}>
          <p className="no-more">🛏️ &nbsp;No more gongs left today.</p>
        </div>
      )}

      <h2>{isVipassanaDay ? 'Vipassana Day ' : ''}Gong Schedule</h2>

      {Object.entries(baseGongSchedule).map(([time, amount], index) => (
        <p key={index}>
          <span style={{ width: 70 }}>{pretty(+time)}</span>
          <span style={{ width: 23, opacity: 0.4 }}>—</span>
          <span>{amount} times</span>
          {[index, index + 1].includes(nextTimeIndex) && (
            <NextUpCountdown {...{ amount, targetTime: +time }} />
          )}
        </p>
      ))}

      <style jsx>{`
        section {
          padding: 0 2rem;
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
    </section>
  )
}
