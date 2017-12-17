const piecejs = require('./piece')
const typejs = require('./../type')
const alliancejs = require('./../alliance')
const utilsjs = require('./../utils')

const Type = typejs.Type
const Piece = piecejs.Piece
const Alliance = alliancejs.Alliance

const Pawn = {
	create: function(index, alliance) {
		const obj = Piece.create(index, alliance)
		obj.type = Type.PAWN
		return obj
	},

	pseudoLegalMoves: function(board) {
		const moves = []
		const dir = Alliance.direction(alliance)

		let destIndex

		this.moveOffsets.forEach(offset => {
			const destRow = utilsjs.row(this.index) + offset.row * dir
			const destCol = utilsjs.col(this.index) + offset.col

			destIndex = utilsjs.index(destRow, destCol)

			if (utilsjs.areValidCoordinates(destRow, destCol)) {
				const destTile = board.get(destIndex)

				if (offset.colOffset === 0) {
					if (destTile.empty) {
						moves.push(RegularMove.create(board, destIndex, this))
					}
				}
				else {
					if (!destTile.empty) {
						const destPiece = destTile.piece

						if (destPiece.alliance !== this.alliance) {
							moves.push(AttackingMove.create(board, destIndex, this, destPiece))
						}
					}
				}
			}
		})

		if (utilsjs.row(this.index) === Alliance.startingRow(this.alliance)) {
			destIndex = index + 16 * dir

			if (board.get(destIndex).empty) {
				moves.push(RegularMove.create(board, destIndex, this))
			}
		}

		return moves
	}
}

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
