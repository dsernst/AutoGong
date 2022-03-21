import { unitTest } from './unitTest'

/** Convert military times to common display.
 *
 * 800 -> '8:00 am'
 * 1545 -> '3:45 pm'
 */
export const convertTimes = (times: number): string => {
  const hour = Math.floor(times / 100)
  const minute = String(times % 100).padStart(2, '0')
  const ampm = hour >= 12 ? 'pm' : 'am'
  let hour12 = hour > 12 ? hour % 12 : hour
  if (hour12 === 0) hour12 = 12 // for 12 am
  return `${hour12}:${minute} ${ampm}`
}

// Unit tests
const testCases = {
  27: '12:27 am',
  800: '8:00 am',
  108: '1:08 am',
  1250: '12:50 pm',
  1545: '3:45 pm',
}
unitTest(convertTimes, testCases)
