import { convertTimes as pretty } from './convertTimes'
import { useCurrentTimeWithoutSeconds } from './useCurrentTime'

export const CurrentTime = () => (
  <div>
    <label>Current time:</label>
    {pretty(useCurrentTimeWithoutSeconds())}

    <style jsx>{`
      div {
        font-size: 1.5rem;
        text-align: center;
      }

      label {
        display: block;
        font-size: 70%;
        opacity: 0.5;
        margin-bottom: 9px;
      }
    `}</style>
  </div>
)
