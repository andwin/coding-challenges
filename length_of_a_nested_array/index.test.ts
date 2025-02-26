import { assert, test } from 'vitest'

import getLength from './index'

test('length of a nested array', () => {
  assert.equal(getLength([1, [2, 3]]), 3)
  assert.equal(getLength([1, [2, [3, 4]]]), 4)
  assert.equal(getLength([1, [2, [3, [4, [5, 6]]]]]), 6)
  assert.equal(getLength([1, 7, 8]), 3)
  assert.equal(getLength([2]), 1)
  assert.equal(getLength([2, [3], 4, [7]]), 4)
  assert.equal(getLength([2, [3, [5, 7]], 4, [7]]), 6)
  assert.equal(getLength([2, [3, [4, [5]]], [9]]), 5)
  assert.equal(getLength([]), 0)
})
