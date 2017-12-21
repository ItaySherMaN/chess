import Move from './move.js'

const AttackingMove = {
	init(board, destRow, destCol, movedPiece, attackedPiece) {
		this.parent(board, destRow, destCol, movedPiece, arguments)
		this.attackedPiece = attackedPiece
	}
}

AttackingMove.extends(Move)

export default AttackingMove
