import { test, assert } from 'vitest'
import freedPrisoners from './index'

test('freed prisoners', () => {
  assert.equal(freedPrisoners([1, 1, 0, 0, 0, 1, 0]), 4)
  assert.equal(freedPrisoners([1, 0, 0, 0, 0, 0, 0]), 2)
  assert.equal(freedPrisoners([1, 1, 1, 0, 0, 0]), 2)
  assert.equal(freedPrisoners([1, 0, 1, 0, 1, 0]), 6)
  assert.equal(freedPrisoners([1, 1, 1]), 1, 'once first prisoner freed, all cells become locked')
  assert.equal(freedPrisoners([0, 0, 0]), 0, 'first cell locked, so cannot switch')
  assert.equal(freedPrisoners([0, 1, 1, 1]), 0, 'first cell locked, cannot switch')
})
