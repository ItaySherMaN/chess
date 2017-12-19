const piecejs = require('./piece')
const typejs = require('./../type')
const alliancejs = require('./../alliance')

const Type = typejs.Type
const SlidingPiece = piecejs.SlidingPiece
const Alliance = alliancejs.Alliance

const Rook = {
	moveOffsets: [
		{row: 0, col: 1},
		{row: 1, col: 0},
		{row: 0, col: -1},
		{row: -1, col: 0}
	],

	create: function(row, col, alliance) {
		const obj = Object.create(this)
		this.__proto__.super.call(obj, row, col, Type.ROOK, alliance)
		return obj
	}
}

Rook.__proto__ = SlidingPiece

module.exports.Rook = Rook

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
