const index = (row, col) => row * 8 + col
const row = index => index / 8
const col = index => index % 8
const isValidPosition = index => index >= 0 && index < 64
