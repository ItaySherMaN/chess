import SlidingPiece from './general-pieces/sliding-piece.js'
import Type from './../type.js'

const Bishop = {
	moveOffsets: [
		{row: -1, col:  1},
		{row: -1, col: -1},
		{row:  1, col:  1},
		{row:  1, col: -1}
	],

	init(row, col, alliance) {
		this.parent(row, col, Type.BISHOP, alliance)
	}
}

Bishop.extends(SlidingPiece)

export default Bishop

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
