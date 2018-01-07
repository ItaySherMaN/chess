Cache.loadAllPossiblePieces()
BoardBuilder.establishStandardBoardLayout()

const renderer = BoardRenderer.create(
	BoardBuilder.standardBoardLayout, Alliance.WHITE
)

canvas.addEventListener('mousedown', e => {
	renderer.board =
		renderer
		.board
		.legalMoves
		[Math.random() * renderer.board.legalMoves.length | 0]
		.execute(true)

	renderer.render()
})

let space = false

Cache.loadImages().then(() => {
	Cache.loadAllPossibleTileBuffers()


	renderer.render()
})

// console.log(renderer)
// let space = false
//
// canvas.addEventListener('mousedown', e => {
// 	renderer.board =
// 		renderer
// 		.board
// 		.legalMoves
// 		[Math.random() * renderer.board.legalMoves.length | 0]
// 		.execute(true)
// })
//
// document.body.addEventListener('keydown', e => {
// 	if (e.keyCode === 32) {
// 		space = !space
// 	}
// })
//
// console.log(renderer.board)
// debug
//
// const run = function() {
// 	for (let i = 0; i < 10; i++) {
// 		if (renderer.board.inCheckmate) {
// 			return console.log(renderer.board.nextTurn(), 'won')
// 		}
//
// 		if (renderer.board.inStalemate) {
// 			return console.log('stalemate -', renderer.board.turn, "can't move")
// 		}
//
// 		if (space) {
// 			renderer.board =
// 				renderer
// 				.board
// 				.legalMoves
// 				[Math.random() * renderer.board.legalMoves.length | 0]
// 				.execute(true)
// 		}
//
// 		renderer.render()
// 	}
//
// 	requestAnimationFrame(run)
// }
//
// run()
