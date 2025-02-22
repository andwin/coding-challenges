import { test, assert } from 'vitest'
import spiralMatrix from './index'

test('spiral matrix: DOG', () => {
  const result = spiralMatrix(2, "DOG")
  assert.deepEqual(result, [
    [ "D", "O" ],
    [ "+", "G" ]
  ])
})

test('spiral matrix: COPYRIGHTS', () => {
  const result = spiralMatrix(3, "COPYRIGHTS")
  assert.deepEqual(result, [
    [ "G", "H", "T" ],
    [ "I", "C", "O" ],
    [ "R", "Y", "P" ]
  ])
})

test('spiral matrix: SUPERLUMBERJACK', () => {
  const result = spiralMatrix(4, "SUPERLUMBERJACK")
  assert.deepEqual(result, [
    [ "U", "M", "B", "E" ],
    [ "L", "S", "U", "R" ],
    [ "R", "E", "P", "J" ],
    [ "+", "K", "C", "A" ]
  ])
})

test('spiral matrix: ABOUTLIFETHEUNIVERSEANDEVERYTHING', () => {
  const result = spiralMatrix(5, "ABOUTLIFETHEUNIVERSEANDEVERYTHING")
  assert.deepEqual(result, [
    [ "A", "N", "D", "E", "V" ],
    [ "E", "I", "F", "E", "T" ],
    [ "S", "L", "A", "B", "H" ],
    [ "R", "T", "U", "O", "E" ],
    [ "E", "V", "I", "N", "U" ]
  ])
})

test('spiral matrix: THEUNBEARABLESPIRAL', () => {
  const result = spiralMatrix(5, "THEUNBEARABLESPIRAL")
  assert.deepEqual(result, [
    [ "+", "+", "+", "+", "+" ],
    [ "+", "E", "A", "R", "A" ],
    [ "L", "B", "T", "H", "B" ],
    [ "A", "N", "U", "E", "L" ],
    [ "R", "I", "P", "S", "E" ]
  ])
})

test('spiral matrix: SHESELLSSHELLSBYTHESEASHOREWITHOUTASHELLSSELLINGLICENSE', () => {
  const result = spiralMatrix(6, "SHESELLSSHELLSBYTHESEASHOREWITHOUTASHELLSSELLINGLICENSE")
  assert.deepEqual(result, [
    [ "E", "A", "S", "H", "O", "R" ],
    [ "S", "L", "S", "S", "H", "E" ],
    [ "E", "L", "S", "H", "E", "W" ],
    [ "H", "E", "S", "E", "L", "I" ],
    [ "T", "Y", "B", "S", "L", "T" ],
    [ "S", "A", "T", "U", "O", "H" ]
  ])
})
