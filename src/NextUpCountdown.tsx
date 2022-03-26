import { diffMilTime } from './diffMilTime'
import { useCurrentTime } from './useCurrentTime'
import { useScheduledAudio } from './useScheduledAudio'

export const NextUpCountdown = ({ targetTime }: { targetTime: number }) => {
  const timeWithSeconds = targetTime * 100
  const timeLeft = diffMilTime(timeWithSeconds, useCurrentTime())
  useScheduledAudio(timeLeft)

  return (
    <span
      style={{
        marginLeft: 20,
        fontFamily: 'Courier',
        opacity: 0.7,
        fontStyle: 'italic',
      }}
    >
      {timeLeft} from now
    </span>
  )
}
