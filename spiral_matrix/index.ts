type Matrix = string[][]

type Position = {
  x: number
  y: number
}

enum Direction {
  Up = 0,
  Down = 1,
  Left = 2,
  Right = 3,
}

const spiralMatrix = (size: number, text: string): Matrix => {
  const matrix = createMatrix(size)
  const transformedText = transformText(size, text)

  let position: Position = {
    x: Math.ceil(size / 2) - 1,
    y: Math.ceil(size / 2) - 1,
  }
  let direction: Direction = Direction.Right

  for (let i = 0; i < transformedText.length; i++) {
    matrix[position.y][position.x] = transformedText[i]
    position = nextPosition(position, direction)

    if (timeToChangeDirection(matrix, position, direction, size)) {
      direction = nextDirection(direction)
    }
  }

  return matrix
}

const createMatrix = (size: number): Matrix => {
  const matrix: Matrix = []
  for (let i = 0; i < size; i++) {
    matrix[i] = new Array(size).fill('')
  }
  return matrix
}

const transformText = (size: number, text: string) => {
  const textLength = size * size

  if (text.length < textLength) {
    return text + '+'.repeat(textLength - text.length)
  }

  return text.slice(0, textLength)
}

const nextPosition = (position: Position, direction: Direction): Position => {
  switch (direction) {
    case Direction.Up:
      return { x: position.x, y: position.y - 1 }
    case Direction.Down:
      return { x: position.x, y: position.y + 1 }
    case Direction.Left:
      return { x: position.x - 1, y: position.y }
    case Direction.Right:
      return { x: position.x + 1, y: position.y }
    default:
      throw new Error('Invalid direction')
  }
}

const timeToChangeDirection = (matrix: Matrix, position: Position, direction: Direction, size: number): boolean => {
  const next = nextPosition(position, direction)

  if (next.x < 0 || next.x >= size) {
    return true
  }
  if (next.y < 0 || next.y >= size) {
    return true
  }

  const cell = cellToCheck(position, direction)
  if (matrix[cell.y][cell.x] === '') {
    return true
  }

  return false
}

const cellToCheck = (position: Position, direction: Direction): Position => {
  switch (direction) {
    case Direction.Up:
      return { x: position.x + 1, y: position.y }
    case Direction.Down:
      return { x: position.x - 1, y: position.y }
    case Direction.Left:
      return { x: position.x, y: position.y - 1 }
    case Direction.Right:
      return { x: position.x, y: position.y + 1 }
    default:
      throw new Error('Invalid direction')
  }
}

const nextDirection = (direction: Direction): Direction => {
  switch (direction) {
    case Direction.Up:
      return Direction.Right
    case Direction.Down:
      return Direction.Left
    case Direction.Left:
      return Direction.Up
    case Direction.Right:
      return Direction.Down
    default:
      throw new Error('Invalid direction')
  }
}

export default spiralMatrix
