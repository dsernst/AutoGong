import { diffMilTime } from './diffMilTime'
import { useCurrentTime } from './useCurrentTime'
import { useScheduledAudio } from './useScheduledAudio'

export const NextUpCountdown = ({
  amount,
  targetTime,
}: {
  amount: number
  targetTime: number
}) => {
  const timeWithSeconds = targetTime * 100
  const timeLeft = diffMilTime(timeWithSeconds, useCurrentTime())
  const { amountDone, isAnotherPlaying, playing } = useScheduledAudio(
    timeLeft,
    amount,
  )

  // Wait for another to finish playing before showing countdown
  if (isAnotherPlaying) return null

  // Don't show negative times
  if (!playing && timeLeft.includes('-')) return null

  return (
    <span
      style={{
        fontFamily: 'Courier',
        fontStyle: 'italic',
        marginLeft: 20,
        opacity: 0.7,
      }}
    >
      {playing ? `Playing ${amountDone} of ${amount}` : `${timeLeft} from now`}
    </span>
  )
}
