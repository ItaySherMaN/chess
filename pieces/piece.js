const typejs = require('./../type')

module.exports = {
	Type: typejs.Type,
	Piece: {
		create: function(index, alliance) {
			const obj = Object.create(this)

			obj.index = index
			obj.alliance = alliance

			return obj
		}

		// pseudo legal moves ()
		// legal moves ()
	}
}
