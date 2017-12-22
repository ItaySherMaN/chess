import SlidingPiece from './general-pieces/sliding-piece.js'
import PieceType from './piece-type.js'

const Rook = {
	moveOffsets: [
		{row: 0, col: 1},
		{row: 1, col: 0},
		{row: 0, col: -1},
		{row: -1, col: 0}
	],

	init(row, col, alliance) {
		this.parent(row, col, PieceType.ROOK, alliance, arguments)
	}
}

Rook.extends(SlidingPiece)

export default Rook
