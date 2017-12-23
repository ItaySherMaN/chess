import Move from './move.js'

const RegularMove = {
	init(board, destRow, destCol, movedPiece) {
		this.parent(board, destRow, destCol, movedPiece, arguments)
	},

	isAttackingMove() {
		return false
	}
}

RegularMove.extends(Move)

export default RegularMove
