const freedPrisoners = (cells: number[]) => {
  if (!cells[0]) return 0

  cells = invertCells(cells)

  let freed = 1
  for (let i = 1; i < cells.length; i++) {
    if (!cells[i]) continue

    freed++
    cells = invertCells(cells)
  }

  return freed
}

const invertCells = (cells: number[]) => {
  return cells.map(cell => cell === 1 ? 0 : 1)
}

export default freedPrisoners
