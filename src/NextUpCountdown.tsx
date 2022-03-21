import { diffMilTime } from './diffMilTime'
import { useCurrentTime } from './useCurrentTime'

export const NextUpCountdown = ({ targetTime }: { targetTime: number }) => {
  const timeWithSeconds = targetTime * 100
  const timeLeft = diffMilTime(timeWithSeconds, useCurrentTime())

  return (
    <span style={{ marginLeft: 13, fontFamily: 'Courier', opacity: 0.7 }}>
      {timeLeft} from now
    </span>
  )
}
