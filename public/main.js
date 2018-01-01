Cache.loadImages().then(() => {

	const renderer = BoardRenderer.create(
		BoardBuilder.standardBoardLayout, Alliance.WHITE
	)

	function run() {
		if (Math.random() < 0.1) {
			if (renderer.board.inCheckmate || renderer.board.inStalemate) {
				console.log(renderer.board.nextTurn(), 'won')
				return
			}

			renderer.board =
				renderer
				.board
				.legalMoves
				[Math.random() * renderer.board.legalMoves.length | 0]
				.execute(true)
		}

		renderer.render()
		requestAnimationFrame(run)
	}

	run()
})
