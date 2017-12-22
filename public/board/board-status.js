const BoardStatus = {
	IN_CHECKMATE: 0,
	IN_CHECK: 1,
	STALEMATE: 2,
	ON_GOING: 3,

	correspondingStatus(inCheck, canMove) {
		if (inCheck) {
			if (canMove) {
				return this.IN_CHECK
			}
			return this.IN_CHECKMATE
		}
		if (canMove) {
			return this.ON_GOING
		}
		return this.STALEMATE
	}
}

export default BoardStatus
