import { useState } from 'react'
import { Button } from './Button'
import { CourseSelector } from './CourseSelector'
import { FooterLinks } from './FooterLinks'
import { TestGongButton } from './TestGongButton'

export const GetStartedButton = () => {
  const [activated, setActivated] = useState(false)

  return (
    <>
      {!activated ? (
        <section>
          <h1>Welcome to Dhamma Gong!</h1>
          <Button text="Get Started" onClick={() => setActivated(true)} />
        </section>
      ) : (
        <>
          <h2>Dhamma Gong</h2>
          <TestGongButton />
          <CourseSelector />
          <FooterLinks />
        </>
      )}

      <style jsx>{`
        section {
          text-align: center;
        }

        h1 {
          font-size: 2.5rem;
        }

        h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
        }
      `}</style>
    </>
  )
}
