const canvas = document.getElementById('canvas')
const g = canvas.getContext('2d')
const width = canvas.width
const height = canvas.height

g.fillStyle = 'red'
g.fillRect(0, 0, width, height)

const board = BoardBuilder.standardBoardLayout

console.log(board.whiteViewToString())

console.log(board)

board.legalMoves.forEach(move => {
	console.log(move.execute(true).whiteViewToString())
})
