import { useRef, useState } from 'react'

export const TestButton = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  return (
    <>
      <button onClick={() => audioRef.current?.play()}>Test Gong</button>
      <audio
        onPlay={() => setPlaying(true)}
        onPause={() => {
          setPlaying(false)
          // @ts-ignore - typescript is wrong, its fine to assign here
          audioRef.current?.currentTime = 0
        }}
        controls={playing}
        src="./gong-3.mp3"
        autoPlay
        ref={audioRef}
      >
        Your browser does not support the <code>audio</code> element.
      </audio>
      <style jsx>{`
        button {
          font-size: 2rem;
          margin-top: 2rem;
          padding: 0.5rem 3rem;
        }
      `}</style>
    </>
  )
}
