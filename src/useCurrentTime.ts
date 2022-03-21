import { useState, useEffect } from 'react'

/** React hook with the current time, updating every second. Displayed as HHmmss, e.g. 3:30:11pm = 153011. */
export function useCurrentTime(): number {
  const getTime = () => {
    const now = new Date()
    const hours = now.getHours()
    const minutes = `${now.getMinutes()}`.padStart(2, '0')
    const seconds = `${now.getSeconds()}`.padStart(2, '0')

    return +`${hours}${minutes}${seconds}`
  }

  const [currentTime, setCurrentTime] = useState<number>(getTime())

  useEffect(() => {
    const updateTime = () => setCurrentTime(getTime())
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return currentTime
}

export const useCurrentTimeWithoutSeconds = () =>
  Math.floor(useCurrentTime() / 100)
