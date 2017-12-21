import SlidingPiece from './general-pieces/sliding-piece.js'
import Type from './../type.js'

const Rook = {
	moveOffsets: [
		{row: 0, col: 1},
		{row: 1, col: 0},
		{row: 0, col: -1},
		{row: -1, col: 0}
	],

	init(row, col, alliance) {
		this.parent(row, col, Type.Rook, alliance)
	}
}

Rook.extend(SlidingPiece)

export default Rook

// const Rook = Object.create(SlidingPiece)
//
// Rook.moveOffsets = [
// 	{row: 0, col: 1},
// 	{row: 1, col: 0},
// 	{row: 0, col: -1},
// 	{row: -1, col: 0}
// ]
//
// Rook.create = function(row, col, alliance) {
// 	const obj = Object.create(this)
// 	this.__proto__.super.call(obj, row, col, Type.ROOK, alliance)
// 	return obj
// }
//
// export default Rook

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
