const piecejs = require('./piece')
const Type = piecejs.Type,
	  Piece = piecejs.Piece

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

			if (utils.isValidPosition(this.index + offset)) {
				if (isValidOffset(offset, this.index)) {
					destTile = board.get(destIndex)

					if (destTile.empty) {
						moves.push(move.create(/*TODO: add parameters*/))
					}
					else {
						if (destTile.piece.alliance != this.alliance) {
							moves.push(move.create(/*TODO: add parameters*/))
						}
					}
				}
			}
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


//--X-X---
//-X---X--
//---o----
//-X---X--
//--X-X---
