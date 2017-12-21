Object.prototype.extends = function(parent) {
	this.__proto__ = parent
}

Object.prototype.create = function() {
	const obj = Object.create(this)
	this.init.apply(obj, arguments)
	return obj
}

Object.prototype.parent = function() {
	this.__proto__.__proto__.init.apply(this, arguments)
}
