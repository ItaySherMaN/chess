import SteppingPiece from './general-pieces/stepping-piece.js'
import Type from './../type.js'

/*
--------
--x-x---
-x---x--
---o----
-x---x--
--x-x---
--------
--------
*/

const Knight = {
	moveOffsets: [
		{row:  2, col:  1},
		{row:  2, col: -1},
		{row:  1, col:  2},
		{row:  1, col: -2},
		{row: -1, col:  2},
		{row: -1, col: -2},
		{row: -2, col:  1},
		{row: -2, col: -1}
	],

	init(row, col, alliance) {
		this.parent(row, col, Type.KNIGHT, alliance)
	}
}

Knight.extends(SteppingPiece)

export default Knight
