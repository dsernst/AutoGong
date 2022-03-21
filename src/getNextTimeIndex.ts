import { unitTest } from './unitTest'

/** Given the current time, and a sorted array of times, find the index of the next one, or -1 if none.
 */
export function getNextTimeIndex(currentTime: number, times: number[]): number {
  let nextTimeIndex = -1
  times.find((time, i) => {
    if (currentTime < time) {
      nextTimeIndex = i
      return true
    }
  })

  return nextTimeIndex
}

// Unit tests
const sampleTimes = [800, 1250, 1545, 1900, 2000, 2100]
const getNextTimeIndexCurried = (currentTime: number) =>
  getNextTimeIndex(currentTime, sampleTimes)
const testCases = {
  750: 0,
  810: 1,
  1800: 3,
  2200: -1,
}
unitTest(getNextTimeIndexCurried, testCases)
