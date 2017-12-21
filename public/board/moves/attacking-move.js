import Move from './move.js'

const AttackingMove = {
	init(board, destRow, destCol, movedPiece, attackedPiece) {
		this.parent(board, destRow, destCol, movedPiece)
		this.attackedPiece = attackedPiece
	}
}

AttackingMove.extends(Move)

export default AttackingMove

// const AttackingMove = Object.create(Move)
//
// AttackingMove.create = function(board, destRow, destCol, movedPiece, attackedPiece) {
// 	const obj = Object.create(this)
// 	this.__proto__.super.apply(obj, arguments)
// 	obj.attackedPiece = attackedPiece
// 	return obj
// }
//
// export default AttackingMove
