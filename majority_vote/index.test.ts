import { test, assert } from 'vitest'
import majorityVote from '.'

test('majority vote', () => {
  assert.strictEqual(majorityVote(['A', 'B', 'B', 'B', 'A', 'A']), null)
  assert.strictEqual(majorityVote(['B', 'B', 'B']), 'B')
  assert.strictEqual(majorityVote(['A', 'B', 'B']), 'B')
  assert.strictEqual(majorityVote(['A', 'A', 'B']), 'A')
  assert.strictEqual(majorityVote(['A', 'A', 'A', 'B', 'C', 'A']), 'A')
  assert.strictEqual(majorityVote(['B', 'A', 'B', 'B', 'C', 'A', 'B', 'B']), 'B')
  assert.strictEqual(majorityVote(['A', 'B', 'B', 'A', 'C', 'C']), null)
  assert.strictEqual(majorityVote(['A', 'B']), null)
  assert.strictEqual(majorityVote(['A']), 'A')
  assert.strictEqual(majorityVote([]), null)
})
