import { test, expect } from 'vitest'
import isResurrectable from '../isResurrectable'

test('isResurrectable normal cases', () => {
  const expecteds = {
    0: false,
    1: false,
    2: false,
    3: true,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  }

  Object.keys(expecteds).forEach((input) => {
    const expected = expecteds[input]
    const actual = isResurrectable(parseInt(input, 10))

    expect(actual).toBe(expected)
  })
})
