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
const testCases = {
  750: 0,
  810: 1,
  1800: 3,
  2200: -1,
}
if (typeof alert !== 'undefined') {
  Object.entries(testCases).find(([input, expected]) => {
    const actual = getNextTimeIndex(+input, sampleTimes)
    if (actual !== expected) {
      alert(
        `getNextTimeIndex() unit test failure \n\nInput: ${input} \nExpected: ${expected} \nActual: ${actual}`
      )
      return true
    }
  })
}
