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
		{rowOffset: 2, colOffset: 1},
		{rowOffset: 2, colOffset: -1},
		{rowOffset: 1, colOffset: 2},
		{rowOffset: 1, colOffset: -2},
		{rowOffset: -1, colOffset: 2},
		{rowOffset: -1, colOffest: -2},
		{rowOffset: -2, colOffset: 1},
		{rowOffset: -2, colOffset: -1}
	],

	create: function(index, alliance) {
		const obj = Piece.create(index, alliance)
		obj.type = Type.KNIGHT
		return obj
	}

	pseudoLegalMoves: function(board) {
		const moves = []

		Knight.moveOffsets.forEach(offset => {
			const destRow = utilsjs.row(this.index) + offset.rowOffset
			const destCol = utilsjs.col(this.index) + offset.colOffset
			const destIndex = utilsjs.indexFromCoordinates(destRow, destCol)

			if (utilsjs.areValidCoordinates(destRow, destCol)) {
				const destTile = board.get(destIndex)

				if (destTile.empty) {
					moves.push(RegularMove.create(board, destIndex, this))
				}
				else {
					const destPiece = destTile.piece

					if (destPiece.alliance !== this.alliance) {
						moves.push(AttackingMove.create(board, destIndex, this, destPiece))
					}
				}
			}
		})
	}
}

module.exports.Knight = Knight

/*

--------
--X-X---
-X---X--
---o----
-X---X--
--X-X---
--------
--------

*/
