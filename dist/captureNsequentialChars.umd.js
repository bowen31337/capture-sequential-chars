;(function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined'
		? (module.exports = factory())
		: typeof define === 'function' && define.amd
			? define(factory)
			: (global.captureNsequentialChars = factory())
})(this, function() {
	'use strict'

	var captureNsequentialCharsInAstring = function captureNsequentialCharsInAstring(
		string
	) {
		var n =
			arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2

		var stLength = string.length
		if (n < 2) return ''
		if (stLength < n) return ''
		for (var i = 0; i < stLength - n + 1; i++) {
			for (var j = 0; j < n - 1; j++) {
				if ('undefined' !== typeof string[i + j + 1]) {
					if (
						string.charCodeAt(i + j) * 1 + 1 !==
						string.charCodeAt(i + j + 1) * 1
					) {
						break
					}
				}
			}
			if (j === n - 1) {
				var captureString = string.slice(i, i + n)
				return n === captureString.length ? captureString : ''
			}
		}
		return ''
	}

	return captureNsequentialCharsInAstring
})
