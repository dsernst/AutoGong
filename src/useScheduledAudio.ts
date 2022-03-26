let nextUp: null | ReturnType<typeof setTimeout> = null

export const useScheduledAudio = (timeLeft: string) => {
  // If we don't already have something enqueued,
  if (!nextUp) {
    // and something needs to start in the next 60 seconds
    if (!timeLeft.includes('m')) {
      // enqueue it.
      const secondsLeft = timeLeft.split('s')[0]
      enqueueGong(+secondsLeft)
    }
  }
}

let audio: HTMLAudioElement
if (typeof window !== 'undefined') {
  audio = new Audio('./gong-3.mp3')
  console.log('💁 Initialized audio')
}

const enqueueGong = (secondsLeft: number) => {
  console.log('Enqueuing to start in', secondsLeft, 'seconds')
  nextUp = setTimeout(() => {
    audio.play()
    console.log('🎶 Playing')

    // Wait a few seconds then clear nextUp
    setTimeout(() => {
      nextUp = null
    }, 5 * 1000)
  }, secondsLeft * 1000)
}
