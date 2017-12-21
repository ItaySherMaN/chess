import './../inheritance.js'
import SlidingPiece from './general-pieces/sliding-piece.js'
import Type from './../type.js'

/*
--x-----
--x-----
xxoxxxxx
--x-----
--x-----
--x-----
--x-----
--x-----
*/

const Rook = {
	moveOffsets: [
		{row: 0, col: 1},
		{row: 1, col: 0},
		{row: 0, col: -1},
		{row: -1, col: 0}
	],

	init(row, col, alliance) {
		this.parent(row, col, Type.Rook, alliance, arguments)
	}
}

Rook.extends(SlidingPiece)

export default Rook
