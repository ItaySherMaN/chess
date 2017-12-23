import Player from './player.js'
import Alliance from './../alliance.js'

const BlackPlayer = {
	init(game) {
		this.parent(game, Alliance.BLACK, arguments)
	}
}

BlackPlayer.extends(Player)

export default BlackPlayer
