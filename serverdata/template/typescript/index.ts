import * as fs from 'fs';

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const b = input[1].split(' ');
let result = 0;

for (const num of b) {
	result += countTwo(+num);
}
for (let i = 0; i < 1; i++) {
	console.log(result);
}
/** 
 * 2が含まれる数を返す関数 *
 **/
export function countTwo(num: number): number {
	let count = 0;
	while (num % 2 == 0 && num != 0) {
		count++;
		num /= 2;
	}
	return count;
}


