import Alliance from './alliance.js'
import utils from './utils.js'
import PieceType from './pieces/general-pieces/piece-type.js'

import Pawn from './pieces/pawn.js'
import Knight from './pieces/knight.js'
import Bishop from './pieces/bishop.js'
import Rook from './pieces/rook.js'
import Queen from './pieces/queen.js'
import King from './pieces/king.js'

// Black rook on the 5th row and the 3rd column =
//
// Cache.pieces[PieceType.ROOK][Alliance.BLACK][utils.index(5, 3)] =
//
// {row: 5, col: 3, type: "R", alliance: "b"}

const fillPieces = function(prototypePiece, alliance) {
	return new Array(utils.NUM_TILES).fill(null).map((value, index) => {
		return prototypePiece.create(utils.row(index), utils.col(index), alliance)
	})
}

const Cache = {
	pieces: {
		[PieceType.PAWN]: {
			[Alliance.WHITE]: fillPieces(Pawn, Alliance.WHITE),
			[Alliance.BLACK]: fillPieces(Pawn, Alliance.BLACK)
		},

		[PieceType.KNIGHT]: {
			[Alliance.WHITE]: fillPieces(Knight, Alliance.WHITE),
			[Alliance.BLACK]: fillPieces(Knight, Alliance.BLACK)
		},

		[PieceType.BISHOP]: {
			[Alliance.WHITE]: fillPieces(Bishop, Alliance.WHITE),
			[Alliance.BLACK]: fillPieces(Bishop, Alliance.BLACK)
		},

		[PieceType.ROOK]: {
			[Alliance.WHITE]: fillPieces(Rook, Alliance.WHITE),
			[Alliance.BLACK]: fillPieces(Rook, Alliance.BLACK)
		},

		[PieceType.QUEEN]: {
			[Alliance.WHITE]: fillPieces(Queen, Alliance.WHITE),
			[Alliance.BLACK]: fillPieces(Queen, Alliance.BLACK)
		},

		[PieceType.KING]: {
			[Alliance.WHITE]: fillPieces(King, Alliance.WHITE),
			[Alliance.BLACK]: fillPieces(King, Alliance.BLACK)
		}
	}
}



export default Cache
