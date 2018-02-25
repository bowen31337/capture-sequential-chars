const captureNsequentialCharsInAstring = require('../dist/captureNsequentialChars.cjs.js')

const test = require('tape')

const before = test
const after = test

let samples = []

before('before', function(assert) {
	assert.pass('set the sample strings')
	samples = [
		'efg23',
		'abcd67',
		'xy89sdd',
		'#hijk56',
		'riu562',
		'entry45',
		'gjnfl4566^',
	]
	assert.end()
})

test('captureNsequentialCharsInAstring is func', assert => {
	assert.equal(
		typeof captureNsequentialCharsInAstring,
		'function',
		'it should be defined as a function'
	)

	assert.end()
})

test('search the first 2 sequential chars in string', assert => {
	for (let sample of samples) {
		const fn = captureNsequentialCharsInAstring(sample, 2)
		assert.test(`${fn.toString()} is captured in \'${sample}\'`, t => {
			t.ok(true, 'ok')
			t.ok(sample.includes(fn), 'captured')
			t.end()
		})
	}
	assert.end()
})
