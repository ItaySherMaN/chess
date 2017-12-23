import Player from './player.js'
import Alliance from './../alliance.js'

const WhitePlayer = {
	init(game) {
		this.parent(game, Alliance.WHITE, arguments)
	}
}

WhitePlayer.extends(Player)

export default WhitePlayer
