import SlidingPiece from 'general-pieces/sliding-piece'
import Type from '../type'

/*
x----x--
-x---x--
--x--x--
---x-x-x
----xxx-
xxxxxoxx
----xxx-
---x-x-x
*/

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
		this.parent(row, col, Type.QUEEN, alliance, arguments)
	}
}

Queen.extend(SlidingPiece)

export default Queen
