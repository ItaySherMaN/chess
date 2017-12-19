const piecejs = require('./piece')
const typejs = require('./../type')
const alliancejs = require('./../alliance')

const Type = typejs.Type
const SlidingPiece = piecejs.SlidingPiece
const Alliance = alliancejs.Alliance

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
		const obj = Object.create(this)
		this.__proto__.super.call(obj, row, col, Type.QUEEN, alliance)
		return obj
	}
}

Queen.__proto__ = SlidingPiece

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
