const alliancejs = require('./../alliance')

const Alliance = alliancejs.Alliance

const Piece = {
	create: function(row, col, alliance) {
		const obj = Object.create(this)

		obj.row = row
		obj.col = col
		obj.alliance = alliance

		return obj
	},

	legalMoves: function(board) {
		return this.pseudoLegalMoves(board).filter(move => {
			return !board.play(move).isCheck()
		})
	}
}

const SlidingPiece = {
	create: function(row, col, alliance) {
		return Piece.create(row, col, alliance)
	},

	pseudoLegalMoves: function(board) {
		const moves = []

		this.moveOffsets.forEach(offset => {
			let destRow = this.row + offset.row
			let destCol = this.col + offset.col

			while (utilsjs.areValidCoordinates(destRow, destCol)) {
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

const SteppingPiece = {
	create: function(row, col, alliance) {
		return Piece.create(row, col, alliance)
	},

	pseudoLegalMoves: function(board) {
		const moves = []

		this.moveOffsets.forEach(offset => {
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

		return moves
	}
}

module.exports.Piece = Piece
module.exports.SlidingPiece = SlidingPiece
module.exports.SteppingPiece = SteppingPiece
