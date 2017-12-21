import Type from './../type.js'
import Piece from './general-pieces/piece.js'
import Alliance from './../alliance.js'
import RegularMove from './../board/moves/regular-move.js'
import AttackingMove from './../board/moves/attacking-move.js'
import utils from './../utils.js'

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

const Pawn = {
	moveOffsets: [
		{row: 1, col:  0},
		{row: 1, col:  1},
		{row: 1, col: -1}
	],

	init(row, col, alliance) {
		this.parent(row, col, Type.PAWN, alliance, arguments)
		this.isFirstMove = true
	},

	pseudoLegalMoves(board) {
		const moves = []
		const dir = Alliance.direction(this.alliance)

		let destRow, destCol

		this.moveOffsets.forEach(offset => {
			destRow = this.row + offset.row * dir
			destCol = this.col + offset.col

			if (utils.areValidCoordinates(destRow, destCol)) {
				const destTile = board.get(destRow, destCol)

				if (offset.col === 0) {
					if (destTile.empty) {
						moves.push(RegularMove.create(board, destRow, destCol, this))
					}
				}
				else {
					if (!destTile.empty) {
						const destPiece = destTile.piece

						if (destPiece.alliance !== this.alliance) {
							moves.push(AttackingMove.create(board, destRow, destCol, this, destPiece))
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

Pawn.extends(Piece)

export default Pawn
