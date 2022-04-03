export type Schedule = Record<number, number | undefined>

export const baseGongSchedule = {
  400: 8,
  420: 8,
  630: 3,
  750: 5,
  1100: 3,
  1250: 5,
  1420: 3,
  1700: 3,
  1750: 5,
}

export const vipassanaDaySchedule = {
  ...baseGongSchedule,
  1350: 3,
  1420: undefined,
}

export const nonCourseSchedule = {
  500: 5,
  630: 3,
  750: 5,
  900: 3,
  1100: 3,
  1400: 3,
  1500: 3,
  1700: 3,
  1750: 3,
  1900: 3,
}
