import { useEffect, useState, useRef } from 'react'

let nextTimeout: null | ReturnType<typeof setTimeout> = null
let areAnyPlaying = false

export const useScheduledAudio = (timeLeft: string, amount: number) => {
  const [playing, setPlaying] = useState(false)
  const [amountDone, setAmountDone] = useState(1)
  const audio = useRef(new Audio('./gong-1.mp3'))

  useEffect(() => {
    // If we don't already have something enqueued,
    if (!nextTimeout) {
      // and something needs to start in the next 60 seconds
      if (!timeLeft.includes('m')) {
        // Enqueue it!
        const secondsLeft = +timeLeft.split('s')[0]

        console.log('Enqueuing', amount, 'to start in', secondsLeft, 'seconds')
        nextTimeout = setTimeout(() => {
          console.log('🎶 Playing')
          setPlaying(true)
          areAnyPlaying = true
          audio.current.play()
        }, secondsLeft * 1000 - 500)
      }
    }
  })

  useEffect(() => {
    audio.current.onpause = () => {
      setAmountDone((d) => d + 1)
      console.log('Did', amountDone, 'of', amount)
      if (amountDone < amount) {
        audio.current.play()
      } else {
        console.log('All done playing 👍')
        setPlaying(false)
        areAnyPlaying = false
        nextTimeout = null
      }
    }
  }, [amount, amountDone])

  return { amountDone, isAnotherPlaying: areAnyPlaying && !playing, playing }
}
