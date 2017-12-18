const piecejs = require('./piece')
const typejs = require('./../type')
const alliancejs = require('./../alliance')
const utilsjs = require('./../utils')

const Type = typejs.Type
const Piece = piecejs.Piece
const Alliance = alliancejs.Alliance

const Pawn = {
	moveOffsets: [
		{row: 1, col: 0},
		{row: 1, col: 1},
		{row: 1, col: -1}
	],

	create: function(row, col, alliance) {
		const obj = Piece.create(row, col, alliance)

		obj.type = Type.PAWN
		obj.isFirstMove = true

		return obj
	},

	pseudoLegalMoves: function(board) {
		const moves = []
		const dir = Alliance.direction(alliance)

		let destRow, destCol

		this.moveOffsets.forEach(offset => {
			destRow = this.row + offset.row * dir
			destCol = this.col + offset.col

			if (utilsjs.areValidCoordinates(destRow, destCol)) {
				const destTile = board.get(destRow, destCol)

				if (offset.colOffset === 0) {
					if (destTile.empty) {
						moves.push(RegularPawnMove.create(board, destRow, destCol, this))
					}
				}
				else {
					if (!destTile.empty) {
						const destPiece = destTile.piece

						if (destPiece.alliance !== this.alliance) {
							moves.push(AttackingPawnMove.create(board, destRow, destCol, this, destPiece))
						}
					}
				}
			}
		})

		if (this.isFirstMove && this.row === Alliance.startingRow(this.alliance)) {
			destRow = this.row + 2 * dir
			destCol = this.col

			if (board.get(destRow, destCol).empty && board.get(destRow - dir, destCol).empty) {
				moves.push(RegularMove.create(board, destRow, destCol, this))
			}
		}

		return moves
	}
}

module.exports.Pawn = Pawn

/*

--------
--------
--------
--------
----x---
---xxx--
----o---
--------

*/
