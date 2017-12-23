const Queen = {
	moveOffsets: [
		{row:  1, col:  0},
		{row:  1, col:  1},
		{row:  0, col:  1},
		{row: -1, col:  1},
		{row: -1, col:  0},
		{row: -1, col: -1},
		{row:  0, col: -1},
		{row:  1, col: -1}
	],

	init(row, col, alliance) {
		this.parent(row, col, PieceType.QUEEN, alliance, arguments)
	}
}

Queen.extends(SlidingPiece)

import SlidingPiece from './general-pieces/sliding-piece.js'
import PieceType from './general-pieces/piece-type.js'

export default Queen
