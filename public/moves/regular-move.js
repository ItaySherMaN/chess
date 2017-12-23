const RegularMove = {
	init(board, destRow, destCol, movedPiece) {
		this.parent(board, destRow, destCol, movedPiece, arguments)
	},

	execute(generateLegalMoves) {
		import BoardBuilder from './../board/board-builder.js'
		const builder = BoardBuilder.create(this.board.nextTurn())

		this.board.activePieces.forEach(piece => {
			if (piece !== this.movedPiece) {
				builder.addPiece(piece)
			}
		})

		this.board.opponentPieces.forEach(piece => {
			builder.addPiece(piece)
		})

		import Cache from './../cache.js'

		builder.addPiece(
			Cache.pieces
				[this.movedPiece.type]
					[this.movedPiece.alliance]
						[utils.index(this.destRow, this.destCol)]
		)
	},

	isAttackingMove() {
		return false
	}
}

import Move from './move.js'

RegularMove.extends(Move)

export default RegularMove
