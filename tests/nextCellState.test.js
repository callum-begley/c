import { test, expect } from 'vitest'
import nextCellState from '../nextCellState'

// test('nextCellState', () => {
//   expect(nextCellState(true, 2)).toBeTruthy()
//   expect(nextCellState(true, 3)).toBeTruthy()
//   expect(nextCellState(true, 4)).toBeFalsy()
//   expect(nextCellState(true, 1)).toBeFalsy()
//   expect(nextCellState(false, 3)).toBeTruthy()
// })
test('nextCellState1', () => {
  expect(nextCellState(true, 2)).toBeTruthy()
})
test('nextCellState2', () => {
  expect(nextCellState(true, 3)).toBeTruthy()
})
test('nextCellState3', () => {
  expect(nextCellState(true, 4)).toBeFalsy()
})
test('nextCellState4', () => {
  expect(nextCellState(true, 1)).toBeFalsy()
})
test('nextCellState5', () => {
  expect(nextCellState(false, 3)).toBeTruthy()
})
