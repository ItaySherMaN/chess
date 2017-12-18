const piecejs = require('./piece')
const typejs = require('./../type')

const Type = typejs.Type
const Piece = piecejs.Piece
const SlidingPiece = piecejs.SlidingPiece

const Bishop = {
	moveOffsets: [
		{row: -1, col: 1},
		{row: -1, col: -1},
		{row: 1, col: 1},
		{row: 1, col: -1}
	],

	create: function(row, col, alliance) {
		const obj = SlidingPiece.create(row, col, alliance)
		obj.type = Type.BISHOP
		return obj
	}
}

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
