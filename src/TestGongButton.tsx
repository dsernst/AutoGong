import { useRef, useState } from 'react'
import { Button } from './Button'

export const TestGongButton = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  return (
    <>
      <Button
        onClick={() => {
          const a = audioRef.current
          !playing ? a?.play() : a?.pause()
        }}
        text="🔈 Test Gong"
      />

      <audio
        onPlay={() => setPlaying(true)}
        onPause={() => {
          setPlaying(false)
          // @ts-ignore - typescript is wrong, its fine to assign here
          audioRef.current?.currentTime = 0
        }}
        controls={playing}
        src="./gong-1.mp3"
        ref={audioRef}
      >
        Your browser does not support the <code>audio</code> element.
      </audio>
    </>
  )
}
