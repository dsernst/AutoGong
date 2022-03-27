import { useState } from 'react'
import { ShowSchedule } from './ShowSchedule'

const types = ['10 Day', 'Satti<wbr>pathana', '3 Day', 'Non Course']

export const CourseSelector = () => {
  const [active, setActive] = useState(types[0])
  return (
    <section>
      <label>Course type:</label>
      <div>
        {types.map((type) => (
          <button
            key={type}
            className={active === type ? 'active' : ''}
            onClick={() => setActive(type)}
            dangerouslySetInnerHTML={{ __html: type }}
          />
        ))}
      </div>

      <ShowSchedule />

      <style jsx>{`
        section {
          margin: 2rem 0;
          max-width: 100%;
        }

        label {
          display: block;
          align-self: flex-start;
          opacity: 0.5;
          margin-bottom: 5px;
          padding-left: 1rem;
        }

        div {
          display: flex;
          overflow-x: scroll;
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

        button:hover {
          opacity: 0.9;
          background: #ffffff08;
        }

        .active {
          border-color: #fff9;
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
