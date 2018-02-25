!(function(e, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = t())
		: 'function' == typeof define && define.amd
			? define(t)
			: (e.captureNsequentialChars = t())
})(this, function() {
	'use strict'
	return function(e, t) {
		var r = e.length
		if (t < 2) return ''
		if (r < t) return ''
		for (var n = 0; n < r; n++) {
			for (
				var o = 0;
				o < t - 1 &&
				(void 0 === e[n + o + 1] ||
					1 * e.charCodeAt(n + o) + 1 == 1 * e.charCodeAt(n + o + 1));
				o++
			);
			if (o === t - 1) {
				var f = e.slice(n, n + t)
				return t === f.length ? f : ''
			}
		}
		return ''
	}
})
