import { useState } from 'react'

export const DaySelector = ({ max }: { max: number }) => {
  const [day, setDay] = useState(0)
  return (
    <>
      <p>Day:</p>
      <button onClick={() => setDay((d) => (d > 0 ? d - 1 : d))}>-</button>
      <input value={day} type="number" disabled />
      <button onClick={() => setDay((d) => (d < max ? d + 1 : d))}>+</button>

      <style jsx>{`
        p {
          opacity: 0.5;
        }

        button,
        input {
          height: 3rem;
          background: none;
          color: #fff;
          border: 1px solid #fff5;
          border-radius: 3px;
          font-size: 22px;
          text-align: center;
        }

        button:hover {
          background: #fff2;
          cursor: pointer;
        }

        button {
          width: 3rem;
        }

        input {
          width: 100px;
        }

        /* Hide type=number control arrows */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button,
        input[type='number'] {
          /* Chrome, Safari, Edge, Opera */
          -webkit-appearance: none;
          margin: 0;

          /* Firefox */
          -moz-appearance: textfield;
        }
      `}</style>
    </>
  )
}
