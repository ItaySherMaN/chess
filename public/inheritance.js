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
	const obj = prevArgs[prevArgs.length - 1]

	arguments[arguments.length - 1] = obj.__proto__
	obj.__proto__.init.apply(this, arguments)
}
