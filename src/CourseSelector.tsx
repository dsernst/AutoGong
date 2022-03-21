import { useState } from 'react'

const types = ['10 Day', 'Sattipathana', '3 Day']

export const CourseSelector = () => {
  const [active, setActive] = useState(types[0])
  return (
    <main>
      <label>Course type:</label>
      <div>
        {types.map((type) => (
          <button
            key={type}
            className={active === type ? 'active' : ''}
            onClick={() => setActive(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <p>You selected: {active}</p>

      <style jsx>{`
        main {
          margin: 2rem 0;
        }

        label {
          display: block;
          align-self: flex-start;
          opacity: 0.5;
          margin-bottom: 5px;
        }

        div {
          display: flex;
        }

        button {
          font-size: 20px;
          padding: 5px 20px;
          cursor: pointer;
          opacity: 0.6;
          background: none;
          border: 0;
          outline: 0;
          border-bottom: 2px solid #fff0;

          color: inherit;
        }

        .active {
          border-color: #fff9;
          opacity: 1;
        }
      `}</style>
    </main>
  )
}
