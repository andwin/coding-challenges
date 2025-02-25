import { test, assert } from 'vitest'
import isShuffledWell from '.'

test('isShuffledWell', () => {
  assert.equal(isShuffledWell([1, 2, 3, 5, 8, 6, 9, 10, 7, 4]), false, '1, 2, 3 appear consecutively.')
  assert.equal(isShuffledWell([3, 5, 1, 9, 8, 7, 6, 4, 2, 10]), false, '9, 8, 7, 6 appear consecutively.')
  assert.equal(isShuffledWell([1, 5, 3, 8, 10, 2, 7, 6, 4, 9]), true, 'No consecutive numbers appear.')
  assert.equal(isShuffledWell([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]), true, 'No consecutive numbers appear.')
  assert.equal(isShuffledWell([5, 6, 7, 9, 1, 10, 3, 8, 2, 4]), false)
  assert.equal(isShuffledWell([3, 9, 7, 5, 2, 4, 10, 1, 8, 6]), true)
  assert.equal(isShuffledWell([6, 4, 2, 1, 3, 7, 8, 10, 5, 9]), true)
  assert.equal(isShuffledWell([2, 6, 10, 9, 8, 1, 4, 7, 3, 5]), false)
  assert.equal(isShuffledWell([6, 10, 5, 8, 4, 2, 7, 9, 3, 1]), true)
  assert.equal(isShuffledWell([3, 10, 5, 2, 6, 9, 8, 4, 1, 7]), true)
  assert.equal(isShuffledWell([10, 7, 9, 5, 4, 6, 3, 8, 2, 1]), true)
  assert.equal(isShuffledWell([3, 5, 9, 6, 10, 1, 4, 8, 7, 2]), true)
  assert.equal(isShuffledWell([10, 7, 8, 4, 3, 9, 5, 1, 2, 6]), true)
  assert.equal(isShuffledWell([2, 4, 8, 7, 3, 9, 1, 10, 6, 5]), true)
  assert.equal(isShuffledWell([9, 6, 1, 3, 10, 8, 5, 4, 7, 2]), true)
  assert.equal(isShuffledWell([2, 3, 9, 7, 10, 8, 4, 6, 1, 5]), true)
  assert.equal(isShuffledWell([3, 8, 5, 6, 2, 7, 4, 1, 10, 9]), true)
  assert.equal(isShuffledWell([1, 6, 4, 10, 3, 5, 7, 2, 9, 8]), true)
  assert.equal(isShuffledWell([1, 10, 8, 9, 2, 3, 4, 7, 5, 6]), false)
  assert.equal(isShuffledWell([5, 4, 3, 10, 9, 2, 7, 6, 8, 1]), false)
  assert.equal(isShuffledWell([4, 7, 8, 3, 5, 9, 2, 6, 1, 10]), true)
  assert.equal(isShuffledWell([5, 8, 6, 7, 3, 2, 4, 9, 10, 1]), true)
  assert.equal(isShuffledWell([3, 7, 1, 4, 8, 6, 5, 9, 10, 2]), true)
  assert.equal(isShuffledWell([10, 1, 9, 4, 3, 2, 7, 8, 6, 5]), false)
  assert.equal(isShuffledWell([3, 2, 6, 4, 1, 5, 8, 10, 9, 7]), true)
  assert.equal(isShuffledWell([1, 7, 8, 5, 9, 10, 4, 6, 2, 3]), true)
  assert.equal(isShuffledWell([2, 3, 9, 7, 5, 6, 8, 1, 10, 4]), true)
  assert.equal(isShuffledWell([1, 9, 3, 4, 6, 2, 10, 8, 7, 5]), true)
  assert.equal(isShuffledWell([1, 7, 8, 5, 10, 9, 6, 4, 2, 3]), true)
  assert.equal(isShuffledWell([2, 9, 10, 3, 5, 7, 6, 4, 8, 1]), true)
  assert.equal(isShuffledWell([6, 3, 10, 8, 5, 2, 1, 9, 7, 4]), true)
  assert.equal(isShuffledWell([6, 8, 7, 3, 4, 9, 5, 10, 1, 2]), true)
  assert.equal(isShuffledWell([8, 4, 9, 5, 6, 3, 1, 10, 7, 2]), true)
})
