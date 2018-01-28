const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
	it('should return a string with certain inputs', function() {
		const normalCases = [
		{num: 30, expected: 'fizzbuzz'},
		{num: 10, expected: 'buzz'},
		{num: 9, expected: 'fizz'}
		];

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			expect(answer).to.equal(input.expected);
		});
	});

	it('should raise error if num is not a number', function() {
		const badInputs = [
		[num: false],
		[num: 'a'],
		];

		badInputs.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			expect(answer).to.throw(Error);
		});
	});
});