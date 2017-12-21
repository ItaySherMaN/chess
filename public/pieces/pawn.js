import Type from '../type'
import Piece from 'piece'
import Alliance from '../alliance'
import RegularMove from '../board/moves/regular-move'
import AttackingMove from '../board/moves/attacking-move'

const Pawn = Object.create(Piece)

Pawn.moveOffsets = [
	{row: 1, col: 0},
	{row: 1, col: 1},
	{row: 1, col: -1}
]

Pawn.create = function(row, col, alliance) {
	const obj = Object.create(this)

	this.__proto__.super.call(obj, row, col, Type.PAWN, alliance)
	obj.isFirstMove = true

	return obj
}

Pawn.pseudoLegalMoves = function(board) {
	const moves = []
	const dir = Alliance.direction(this.alliance)

	let destRow, destCol

	this.moveOffsets.forEach(offset => {
		destRow = this.row + offset.row * dir
		destCol = this.col + offset.col

		if (utilsjs.areValidCoordinates(destRow, destCol)) {
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

export default Pawn

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
