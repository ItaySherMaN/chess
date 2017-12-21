import SteppingPiece from './general-pieces/stepping-piece.js'
import Type from './../type.js'

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
		this.parent(row, col, Type.KING, alliance)
	}
}

King.extends(SteppingPiece)

/*

--------
--------
--------
-xxx----
-xox----
-xxx----
--------
--------

*/
