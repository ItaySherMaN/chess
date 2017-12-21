import Piece from './piece.js'
import * as utils from './../../utils.js'
import RegularMove from './../../board/moves/regular-move.js'
import AttackingMove from './../../board/moves/attacking-move.js'

const SteppingPiece = Object.create(Piece)

SteppingPiece.super = function(row, col, type, alliance) {
	this.__proto__.super.apply(this, arguments)
}

SteppingPiece.pseudoLegalMoves = board => {
	const moves = []

	this.moveOffsets.forEach(offset => {
		const destRow = this.row + offset.row
		const destCol = this.col + offset.col

		if (utils.areValidCoordinates(destRow, destCol)) {
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

	return moves
}

export default SteppingPiece
