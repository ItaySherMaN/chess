const Piece = {
	create: function(index, alliance) {
		const obj = Object.create(this)

		obj.index = index
		obj.alliance = alliance

		return obj
	},

	// pseudo legal moves ()

	legalMoves: function(board) {
		return this.pseudoLegalMoves().filter(move => {
			return !board.play(move).isCheck()
		})
	}
}

const slidingPiecePseudoLegalMoves = function(board, movedPiece) {
	const moves = []

	movedPiece.moveOffsets.forEach(offset => {
		let destRow = utilsjs.row(movedPiece.index) + offset.rowOffset
		let destCol = utilsjs.col(movedPiece.index) + offset.colOffset
		let destIndex = utilsjs.indexFromCoordinates(destRow, destCol)

		let facedAPiece = false

		while (utilsjs.areValidCoordinates(destRow, destCol) && !facedAPiece) {
			const destTile = board.get(destIndex)

			if (destTile.empty) {
				moves.push(RegularMove.create(board, destIndex, movedPiece))
			}
			else {
				const destPiece = destTile.piece

				if (destPiece.alliance !== movedPiece.alliance) {
					moves.push(AttackingMove.create(board, destIndex, movedPiece, destPiece))
				}
				facedAPiece = true
			}

			destRow += offset.rowOffset
			destCol += offset.colOffset
			destIndex = utilsjs.indexFromCoordinates(destRow, destCol)
		}
	})

	return moves
}

module.exports.Piece = Piece
