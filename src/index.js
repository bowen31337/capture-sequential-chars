const captureNsequentialCharsInAstring = (string, n = 2) => {
	const stLength = string.length
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
			const captureString = string.slice(i, i + n)
			return n === captureString.length ? captureString : ''
		}
	}
	return ''
}

export default captureNsequentialCharsInAstring
