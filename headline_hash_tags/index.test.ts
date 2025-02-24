import { test, assert } from 'vitest'
import getHashTags from './index'

test('headline hash tags - How the Avocado Became the Fruit of the Global Trade', () => {
  const text = 'How the Avocado Became the Fruit of the Global Trade'
  const expected = ["#avocado", "#became", "#global"]

  const result = getHashTags(text)

  assert.deepEqual(result, expected)
})

test('headline hash tags - Why You Will Probably Pay More for Your Christmas Tree This Year', () => {
  const text = 'Why You Will Probably Pay More for Your Christmas Tree This Year'
  const expected = ["#christmas",    "#probably", "#will"]

  const result = getHashTags(text)

  assert.deepEqual(result, expected)
})

test('headline hash tags - Hey Parents, Surprise, Fruit Juice Is Not Fruit', () => {
  const text = 'Hey Parents, Surprise, Fruit Juice Is Not Fruit'
  const expected = ["#surprise", "#parents", "#fruit"]

  const result = getHashTags(text)

  assert.deepEqual(result, expected)
})

test('headline hash tags - Visualizing Science', () => {
  const text = 'Visualizing Science'
  const expected = ["#visualizing", "#science"]

  const result = getHashTags(text)

  assert.deepEqual(result, expected)
})

test('headline hash tags - Minecraft Stars on Youtube Share Secrets to Their Fame', () => {
  const text = 'Minecraft Stars on Youtube Share Secrets to Their Fame'
  const expected = ["#minecraft", "#youtube", "#secrets"]

  const result = getHashTags(text)

  assert.deepEqual(result, expected)
})


test('headline hash tags - Are You an Elite Entrepreneur?', () => {
  const text = 'Are You an Elite Entrepreneur?'
  const expected = ["#entrepreneur", "#elite", "#are"]

  const result = getHashTags(text)

  assert.deepEqual(result, expected)
})
