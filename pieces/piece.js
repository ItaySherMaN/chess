const alliancejs = require('./../alliance')
const utilsjs = require('./../utils')
const movejs = require('./../board/move')

const Alliance = alliancejs.Alliance
const RegularMove = movejs.RegularMove
const AttackingMove = movejs.AttackingMove

const Piece = {
	create: function(row, col, type, alliance) {
		return Object.create(this).super(row, col, type, alliance)
	},

	super: function(row, col, type, alliance) {
		this.row = row
		this.col = col
		this.type = type
		this.alliance = alliance
	},

	toString: function() {
		return this.alliance === Alliance.WHITE ? this.type : this.type.toLowerCase()
	},

	legalMoves: function(board) {
		return this.pseudoLegalMoves(board).filter(move => {
			return !board.play(move).isCheck()
		})
	}
}

const SlidingPiece = {
	super: function(row, col, type, alliance) {
		SlidingPiece.__proto__.super.call(this, row, col, type, alliance)
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

SlidingPiece.__proto__ = Piece

const SteppingPiece = {
	super: function(row, col, type, alliance) {
		SteppingPiece.__proto__.super.call(this, row, col, type, alliance)
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

SteppingPiece.__proto__ = Piece

module.exports.Piece = Piece
module.exports.SlidingPiece = SlidingPiece
module.exports.SteppingPiece = SteppingPiece
