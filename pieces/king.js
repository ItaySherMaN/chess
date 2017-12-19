const piecejs = require('./piece')
const typejs = require('./../type')
const alliancejs = require('./../alliance')

const Type = typejs.Type
const SteppingPiece = piecejs.SteppingPiece
const Alliance = alliancejs.Alliance

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

	create: function(row, col, alliance) {
		const obj = Object.create(this)
		this.__proto__.super.call(obj, row, col, Type.KING, alliance)
		return obj
	}
}

King.__proto__ = SteppingPiece

module.exports.King = King
