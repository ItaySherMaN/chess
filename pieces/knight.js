const piecejs = require('./piece')
const typejs = require('./../type')
const movejs = require('./../board/move')

const Type = typejs.Type
const Piece = piecejs.Piece
const RegularMove = movejs.RegularMove
const AttackingMove = movejs.AttackingMove

const Knight = {
	moveOffsets: [-17, -15, -10, -6, 6, 10, 15, 17],

	create: function(index, alliance) {
		const obj = Piece.create(index, alliance)
		obj.type = Type.KNIGHT
		return obj
	}

	pseudoLegalMoves: function(board) {
		let destIndex
		let destTile

		const moves = []

		Knight.moveOffsets.forEach(offset => {
			destIndex = this.index + offset

			if (utils.isValidPosition(destIndex)) {
				if (isValidOffset(offset, this.index)) {
					destTile = board.get(destIndex)
					destPiece = destTile.piece

					if (destTile.empty) {
						moves.push(RegularMove.create(board, destIndex, this))
					}
					else if (destPiece.alliance != this.alliance) {
						moves.push(AttackingMove.create(board, destIndex, this, destPiece))
					}
				}
			}
		})
	},

	legalMoves: function(board) {
		return this.pseudoLegalMoves().filter(move => {
			return !board.play(move).isCheck()
		})
	}
}

const isValidOffset = function(offset, index) {
	const col = utils.col(index)

	if (col < 2) {
		if (col === 0) {
			return !in(offset, [-17, -10, 6, 15])
		}
		return !in(offset, [-10, 6])
	}
	else if (col > 5) {
		if (col === 7) {
			return !in(offset, [-15, -6, 10, 17])
		}
		return !in(offset, [-6, 10])
	}
}

const in = function(value, array) {
	array.forEach(arrayValue => {
		if (value === arrayValue) {
			return true
		}
	})

	return false
}

module.exports.Knight = Knight


//--X-X---
//-X---X--
//---o----
//-X---X--
//--X-X---
