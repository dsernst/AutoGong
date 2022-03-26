import { useEffect, useState } from 'react'

let nextTimeout: null | ReturnType<typeof setTimeout> = null

let audio: HTMLAudioElement
if (typeof window !== 'undefined') {
  audio = new Audio('./gong-3.mp3')
  console.log('💁 Initialized audio')
}

let areAnyPlaying = false

export const useScheduledAudio = (timeLeft: string) => {
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    // If we don't already have something enqueued,
    if (!nextTimeout) {
      // and something needs to start in the next 60 seconds
      if (!timeLeft.includes('m')) {
        // Enqueue it!
        const secondsLeft = +timeLeft.split('s')[0]

        console.log('Enqueuing to start in', secondsLeft, 'seconds')
        nextTimeout = setTimeout(() => {
          audio.play()
          console.log('🎶 Playing')
          setPlaying(true)
          areAnyPlaying = true

          audio.onpause = () => {
            console.log('Done playing 👍')
            setPlaying(false)
            areAnyPlaying = false
            nextTimeout = null
          }
        }, secondsLeft * 1000)
      }
    }
  })

  return { playing, isAnotherPlaying: areAnyPlaying && !playing }
}
