import SteppingPiece from './general-pieces/stepping-piece.js'
import Type from './../type.js'

const King = {
	moveOffsets: [
		{row: 1, col: 0},
		{row: 1, col: 1},
		{row: 0, col: 1},
		{row: -1, col: 1},
		{row: -1, col: 0},
		{row: -1, col: -1},
		{row: 0, col: -1},
		{row: 1, col: -1}
	],

	init(row, col, alliance) {
		this.parent(row, col, Type.KING, alliance)
	}
}

King.extends(SteppingPiece)

// const King = Object.create(SteppingPiece)
//
// King.moveOffsets = [
// 	{row: 1, col: 0},
// 	{row: 1, col: 1},
// 	{row: 0, col: 1},
// 	{row: -1, col: 1},
// 	{row: -1, col: 0},
// 	{row: -1, col: -1},
// 	{row: 0, col: -1},
// 	{row: 1, col: -1}
// ]
//
// King.create = function(row, col, alliance) {
// 	const obj = Object.create(this)
// 	this.__proto__.super.call(obj, row, col, Type.KING, alliance)
// 	return obj
// }
//
// export default King

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
