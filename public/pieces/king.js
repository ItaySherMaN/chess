const King = {
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
		this.parent(row, col, PieceType.KING, alliance, arguments)
	}
}

import SteppingPiece from './general-pieces/stepping-piece.js'
import PieceType from './general-pieces/piece-type.js'

King.extends(SteppingPiece)

export default King
