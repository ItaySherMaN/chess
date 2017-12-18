const piecejs = require('./piece')
const typejs = require('./../type')
const bishopjs = require('./bishop')
const rookjs = require('./rook')

const Type = typejs.Type
const SlidingPiece = piecejs.SlidingPiece
const Bishop = bishopjs.Bishop
const Rook = rookjs.Rook

const Queen = {
	moveOffsets: [
		{row: -1, col: 1},
		{row: -1, col: -1},
		{row: 1, col: 1},
		{row: 1, col: -1},
		{row: 0, col: 1},
		{row: 1, col: 0},
		{row: 0, col: -1},
		{row: -1, col: 0}
	],

	create: function(row, col, alliance) {
		const obj = SlidingPiece.create(row, col, alliance)
		obj.type = Type.QUEEN
		return obj
	}
}

module.exports.Queen = Queen

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
