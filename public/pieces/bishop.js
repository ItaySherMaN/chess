import SlidingPiece from './general-pieces/sliding-piece.js'
import PieceType from './piece-type.js'

/*
x-----x-
-x---x--
--x-x---
---o----
--x-x---
-x---x--
x-----x-
-------x
*/

const Bishop = {
	moveOffsets: [
		{row: -1, col:  1},
		{row: -1, col: -1},
		{row:  1, col:  1},
		{row:  1, col: -1}
	],

	init(row, col, alliance) {
		this.parent(row, col, PieceType.BISHOP, alliance, arguments)
	}
}

Bishop.extends(SlidingPiece)

export default Bishop
