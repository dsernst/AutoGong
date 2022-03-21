/** Convert military times to common display.
 *
 * 800 -> '8:00 am'
 * 1545 -> '3:45 pm'
 */
export const convertTimes = (times: number): string => {
  const hour = Math.floor(times / 100)
  const minute = times % 100
  const ampm = hour >= 12 ? 'pm' : 'am'
  const hour12 = hour > 12 ? hour % 12 : hour
  return `${hour12}:${String(minute).padEnd(2, '0')} ${ampm}`
}

// Unit tests
const testCases = {
  800: '8:00 am',
  1545: '3:45 pm',
}
if (typeof alert !== 'undefined') {
  Object.entries(testCases).forEach(([input, expected]) => {
    const actual = convertTimes(+input)
    if (actual !== expected) {
      alert(
        `convertTimes() unit test failure \n\nInput: ${input} \nExpected: ${expected} \nActual: ${actual}`
      )
    }
  })
}
