export const DaySelector = ({
  setDay,
  day,
  max,
}: {
  setDay: (update: (d: number) => number) => void
  day: number
  max: number
}) => {
  return (
    <>
      <p>Day:</p>
      <button disabled={day <= 0} onClick={() => setDay((d) => d - 1)}>
        -
      </button>
      <input value={day} type="number" disabled />
      <button disabled={day >= max} onClick={() => setDay((d) => d + 1)}>
        +
      </button>

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

        button:disabled:hover {
          cursor: not-allowed;
          background: none;
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
