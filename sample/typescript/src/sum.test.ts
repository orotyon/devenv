import {Sum} from './sum';

describe('sum module', () => {
	let sum = new Sum();
	test('adds 1+2 to equal 3',() => {
		expect(sum.get(1,2)).toBe(3);
	});
});
