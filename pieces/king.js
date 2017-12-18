const piecejs = require('./piece')
const typejs = require('./../type')
const movejs = require('./../board/move')
const utilsjs = require('./..utils')

const Type = typejs.Type
const SteppingPiece = piecejs.Piece
const RegularMove = movejs.RegularMove
const AttackingMove = movejs.AttackingMove

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
		const obj = SteppingPiece.create(row, col, alliance)
		obj.type = Type.KING
		return obj
	}
}
