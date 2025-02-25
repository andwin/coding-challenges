const consecutiveNumbersThreshold = 3

const isShuffledWell = (arr: number[]): boolean => {
  const result = !(hasConsecutiveNumbers(arr) || hasConsecutiveNumbers(arr.reverse()))
  return result
}

const hasConsecutiveNumbers = (numbers: number[]): boolean => {
  const chunks = numbers
    .map((_, index) => numbers.slice(index, index + consecutiveNumbersThreshold))
    .filter(chunk => chunk.length === consecutiveNumbersThreshold)

  const result = chunks.some(isConsecutive)
  return result
}

const isConsecutive = (numbers: number[]): boolean => numbers.every((num, i, arr) => arr[0] === num + i)

export default isShuffledWell
