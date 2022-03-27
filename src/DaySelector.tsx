export const DaySelector = ({
  day,
  max,
  setDay,
}: {
  day: number,
  max: number,
  setDay: (update: (d: number) => number) => void
}) => {
  return (
    <div>
      <label>Day:</label>
      <button disabled={day <= 0} onClick={() => setDay((d) => d - 1)}>
        -
      </button>
      <input value={day} type="number" disabled />
      <button disabled={day >= max} onClick={() => setDay((d) => d + 1)}>
        +
      </button>

      <style jsx>{`
        label {
          display: block;
          align-self: flex-start;
          opacity: 0.5;
          margin-bottom: 5px;
        }

        button,
        input {
          height: 2.7rem;
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
          width: 2.7rem;
        }

        input {
          width: 60px;
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
    </div>
  )
}
