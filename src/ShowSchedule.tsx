import { convertTimes as pretty } from './convertTimes'
import { getNextTimeIndex } from './getNextTimeIndex'
import { NextUpCountdown } from './NextUpCountdown'
import {
  Schedule,
  baseGongSchedule,
  nonCourseSchedule,
  vipassanaDaySchedule,
} from './schedule'
import { useCurrentTimeWithoutSeconds } from './useCurrentTime'
import { useTestCountdown } from './useTestCountdown'

export const ShowSchedule = ({
  isNonCourse,
  isTestCountdown,
  isVipassanaDay,
}: {
  isNonCourse: boolean
  isTestCountdown: boolean
  isVipassanaDay: boolean
}) => {
  const testSchedule = useTestCountdown()

  let schedule: Schedule = baseGongSchedule
  if (isTestCountdown) schedule = testSchedule
  if (isNonCourse) schedule = nonCourseSchedule
  if (isVipassanaDay) schedule = vipassanaDaySchedule

  const nextTimeIndex = getNextTimeIndex(
    useCurrentTimeWithoutSeconds(),
    Object.keys(schedule).map(Number),
  )
  return (
    <section>
      {nextTimeIndex === -1 && (
        <div style={{ textAlign: 'center' }}>
          <p className="no-more">🛏️ &nbsp;No more gongs left today.</p>
        </div>
      )}

      <h2>
        {isVipassanaDay ? 'Vipassana Day ' : ''}
        {isNonCourse ? 'Non Course ' : ''}
        {isTestCountdown ? 'Test ' : ''}
        Gong Schedule
      </h2>

      {isTestCountdown && (
        <p style={{ opacity: 0.7 }}>
          This helps to test what happens when the countdowns hit zero
        </p>
      )}

      {Object.entries(schedule).map(
        ([time, amount], index, list) =>
          amount && (
            <p key={index}>
              <span style={{ width: 70 }}>{pretty(+time)}</span>
              <span style={{ opacity: 0.4, width: 23 }}>—</span>
              <span>{amount} times</span>
              {(nextTimeIndex === -1
                ? index == list.length - 1 // Handling for last item
                : [index, index + 1].includes(nextTimeIndex)) && (
                <NextUpCountdown {...{ amount, targetTime: +time }} />
              )}
            </p>
          ),
      )}

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
