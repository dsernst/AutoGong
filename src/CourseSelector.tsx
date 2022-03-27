import { useState } from 'react'
import { DaySelector } from './DaySelector'
import { ShowSchedule } from './ShowSchedule'

const types = [
  { name: '10 Day', max: 10 },
  { name: 'Satti<wbr>pathana', max: 7 },
  { name: '3 Day', max: 3 },
  { name: 'Non Course', max: 0 },
]

export const CourseSelector = () => {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0)
  const [day, setDay] = useState(0)

  return (
    <section>
      <label>Course type:</label>
      <div>
        {types.map(({ name }, index) => (
          <button
            key={name}
            className={selectedCourseIndex === index ? 'active' : ''}
            onClick={() => {
              setSelectedCourseIndex(index)
              setDay(0)
            }}
            dangerouslySetInnerHTML={{ __html: name }}
          />
        ))}
      </div>

      <DaySelector {...{ day, setDay }} max={types[selectedCourseIndex].max} />

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
          padding: 10px 20px;
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
