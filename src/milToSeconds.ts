import { unitTest } from './unitTest'

/** Given a military time w/ seconds like 153011 (3:30:11pm), convert it to the number of seconds since midnight. */
export const milToSeconds = (milTime: number): number => {
  const string = `${milTime}`

  const hours = +string.slice(0, -4)
  const minutes = +string.slice(-4, -2)
  const seconds = +string.slice(-2)

  return hours * 60 ** 2 + minutes * 60 + seconds
}

// Unit tests
const testCases = {
  35: 35,
  135: 1 * 60 + 35, // 95
  1035: 10 * 60 + 35, // 635
  10035: 1 * 60 ** 2 + 35, // 3635
  153011: 15 * 60 ** 2 + 30 * 60 + 11, // 55811
}
unitTest(milToSeconds, testCases)
