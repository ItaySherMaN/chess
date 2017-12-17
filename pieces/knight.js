const piecejs = require('./piece')
const typejs = require('./../type')
const movejs = require('./../board/move')
const utilsjs = require('./..utils')

const Type = typejs.Type
const Piece = piecejs.Piece
const RegularMove = movejs.RegularMove
const AttackingMove = movejs.AttackingMove

const Knight = {
	moveOffsets: [
		{row: 2, col: 1},
		{row: 2, col: -1},
		{row: 1, col: 2},
		{row: 1, col: -2},
		{row: -1, col: 2},
		{row: -1, col: -2},
		{row: -2, col: 1},
		{row: -2, col: -1}
	],

	create: function(row, col, alliance) {
		const obj = Piece.create(row, col, alliance)
		obj.type = Type.KNIGHT
		return obj
	}

	pseudoLegalMoves: function(board) {
		const moves = []

		Knight.moveOffsets.forEach(offset => {
			const destRow = this.row + offset.row
			const destCol = this.col + offset.col

			if (utilsjs.areValidCoordinates(destRow, destCol)) {
				const destTile = board.get(destRow, destCol)

				if (destTile.empty) {
					moves.push(RegularMove.create(board, destRow, destCol, this))
				}
				else {
					const destPiece = destTile.piece

					if (destPiece.alliance !== this.alliance) {
						moves.push(AttackingMove.create(board, destRow, destCol, this, destPiece))
					}
				}
			}
		})
	}
}

module.exports.Knight = Knight

/*

--------
--x-x---
-x---x--
---o----
-x---x--
--x-x---
--------
--------

*/
