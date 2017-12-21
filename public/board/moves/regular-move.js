import Move from './move.js'

const RegularMove = {
	init(board, destRow, destCol, movedPiece) {
		this.parent(board, destRow, destCol, movedPiece)
	}
}

RegularMove.extends(Move)

export default RegularMove

// const RegularMove = Object.create(Move)
//
// RegularMove.create = function(board, destRow, destCol, movedPiece) {
// 	const obj = Object.create(this)
// 	this.__proto__.super.apply(obj, arguments)
// 	return obj
// }
//
// export default RegularMove
