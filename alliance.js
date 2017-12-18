const Alliance = {
	WHITE: 'w',
	BLACK: 'b',

	direction: function(alliance) {
		return alliance === this.WHITE ? 1 : -1
	},

	startingRow: function(alliance) {
		return alliance === this.WHITE ? 1 : 6
	}
}

module.exports.Alliance = Alliance
