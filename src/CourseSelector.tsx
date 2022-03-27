import { useState } from 'react'

import { CurrentTime } from './CurrentTime'
import { DaySelector } from './DaySelector'
import { ShowSchedule } from './ShowSchedule'

const types = [
  { id: '10 Day', max: 10, vipassanaDay: 4 },
  { id: 'Satti<wbr>pathana', max: 7, vipassanaDay: 3 },
  { id: '3 Day', max: 3 },
  { id: 'Non Course', max: 0 },
]

export const CourseSelector = () => {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0)
  const [day, setDay] = useState(0)

  return (
    <section>
      <label>Course type:</label>
      <div className="course-buttons">
        {types.map(({ id }, index) => (
          <button
            key={id}
            className={selectedCourseIndex === index ? 'active' : ''}
            onClick={() => {
              setSelectedCourseIndex(index)
              setDay(0)
            }}
            dangerouslySetInnerHTML={{ __html: id }}
          />
        ))}
      </div>

      <div className="day-and-time">
        <DaySelector
          {...{ day, setDay }}
          max={types[selectedCourseIndex].max}
        />
        <CurrentTime />
      </div>

      <ShowSchedule
        isNonCourse={selectedCourseIndex === 3}
        isVipassanaDay={day === types[selectedCourseIndex].vipassanaDay}
      />

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

        .course-buttons {
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

        .day-and-time {
          display: flex;
          margin: 2rem 0;
          justify-content: space-around;
        }
      `}</style>
    </section>
  )
}
