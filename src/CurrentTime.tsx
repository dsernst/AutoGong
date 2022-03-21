import Clock from 'react-live-clock'

export const CurrentTime = () => (
  <p>
    <label>Current time:</label>
    <Clock format={'h:mm a'} ticking />

    <style jsx>{`
      p {
        font-size: 1.5rem;
        text-align: center;
      }

      label {
        display: block;
        font-size: 70%;
        opacity: 0.5;
      }
    `}</style>
  </p>
)
