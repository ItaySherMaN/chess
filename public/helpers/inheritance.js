Object.prototype.extends = function(parent) {
	this.__proto__ = parent
}

Object.prototype.create = function() {
	const obj = Object.create(this)

	arguments[arguments.length] = obj.__proto__
	arguments.length++

	this.init.apply(obj, arguments)

	return obj
}

Object.prototype.parent = function() {
	const prevArgs = arguments[arguments.length - 1]
	const proto = prevArgs[prevArgs.length - 1].__proto__

	arguments[arguments.length - 1] = proto
	proto.init.apply(this, arguments)
}

Object.prototype.instanceof = function(other) {
	if (this === other) {
		return false
	}
	if (this === Object.prototype) {
		return false
	}
	if (this.__proto__ === other) {
		return true
	}

	return this.__proto__.instanceof(other)
}

Object.prototype.keys = function() {
	return Object.keys(this)
}

Object.prototype.equals = function(other) {
	if (this === other) {
		return true
	}

	if (this.toString() !== other.toString()) {
		return false
	}

	return this.properties().every(p => {
		if (this[p] instanceof Object) {
			return this[p].equals(other[p])
		}
		return this[p] === other[p] && this.toString() === other.toString()
	})
}
