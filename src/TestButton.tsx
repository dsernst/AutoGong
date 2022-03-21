import { useRef, useState } from 'react'

export const TestButton = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  return (
    <>
      <button onClick={() => audioRef.current?.play()}>🔈 Test Gong</button>
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

          border: 3px solid #fffe;
          border-radius: 10px;
          background: none;
          color: #fffe;

          cursor: pointer;

          transition: background 0.15s ease, color 0.15s ease,
            border-color 0.15s ease;
        }

        button:hover {
          background: #fff2;
          border-color: #fff8;
        }
      `}</style>
    </>
  )
}
