import { useState } from 'react'
import { Button } from './Button'
import { CourseSelector } from './CourseSelector'

export const GetStartedButton = () => {
  const [activated, setActivated] = useState(false)

  if (activated) return <CourseSelector />

  return (
    <section>
      <Button text="Get Started" onClick={() => setActivated(true)} />
      <style jsx>{`
        section {
          margin: 3rem 0;
          width: 100%;
          text-align: center;
        }
      `}</style>
    </section>
  )
}
