import { useEffect, useState } from 'react'

import { Schedule } from './schedule'
import { useCurrentTimeWithoutSeconds } from './useCurrentTime'

/** "Test Countdown" scheduler

Generate its schedule on the fly to always start one set of 4 gongs in 10 seconds, then another 2 in the next minute, then another 5 in the next minute.

This makes it easier to see what happens when the countdowns hit zero, instead of needing to wait for potentially hours. */
export const useTestCountdown = (): Schedule => {
  const currentTime = useCurrentTimeWithoutSeconds()

  const [initTime, setInitTime] = useState(-1)

  useEffect(() => {
    setInitTime(currentTime)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (initTime < 0) return {}

  return {
    [initTime + 1]: 4,
    [initTime + 2]: 2,
    [initTime + 3]: 5,
  }
}
