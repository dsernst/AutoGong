import { useEffect, useState } from 'react'
import { engineName } from 'react-device-detect'

export const SafariWarning = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (engineName === 'WebKit') setShow(true)
  }, [])

  if (!show) return null

  return (
    <p>
      ❗ <i>Warning:</i> Apple blocks Safari from playing scheduled audio in the
      browser.
      <b>Try a different browser?</b>
      <style jsx>{`
        p {
          background: #0006;

          text-align: center;
          font-weight: 300;
          color: #fffc;

          border: 1px solid rgb(255, 192, 1);
          border-radius: 5px;
          padding: 10px;
          margin: 1rem;
        }

        b {
          display: block;
          margin-top: 10px;
          font-weight: 800;
          color: #fff;
        }
      `}</style>
    </p>
  )
}
