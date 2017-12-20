const piecejs = require('./piece')
const typejs = require('./../type')
const alliancejs = require('./../alliance')

const Type = typejs.Type
const SlidingPiece = piecejs.SlidingPiece
const Alliance = alliancejs.Alliance

export const Bishop = {
	moveOffsets: [
		{row: -1, col: 1},
		{row: -1, col: -1},
		{row: 1, col: 1},
		{row: 1, col: -1}
	],

	create: function(row, col, alliance) {
		const obj = Object.create(this)
		this.__proto__.super.call(obj, row, col, Type.BISHOP, alliance)
		return obj
	}
}

Bishop.__proto__ = SlidingPiece

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
