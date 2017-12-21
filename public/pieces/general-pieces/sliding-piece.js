import Piece from './piece.js'
import * as utils from './../../utils.js'
import RegularMove from './../../board/moves/regular-move.js'
import AttackingMove from './../../board/moves/attacking-move.js'

const SlidingPiece = {
	init(row, col, type, alliance) {
		this.parent(row, col, type, alliance, arguments)
	},

	pseudoLegalMoves(board) {
		const moves = []

		this.moveOffsets.forEach(offset => {
			let destRow = this.row + offset.row
			let destCol = this.col + offset.col

			while (utils.areValidCoordinates(destRow, destCol)) {
				const destTile = board.get(destRow, destCol)

				if (destTile.empty) {
					moves.push(RegularMove.create(board, destRow, destCol, this))
				}
				else {
					const destPiece = destTile.piece

					if (destPiece.alliance !== this.alliance) {
						moves.push(AttackingMove.create(board, destRow, destCol, this, destPiece))
					}
					break
				}

				destRow += offset.row
				destCol += offset.col
			}
		})

		return moves
	}
}

SlidingPiece.extends(Piece)

export default SlidingPiece
