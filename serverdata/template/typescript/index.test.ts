import { countTwo } from "./index.ts";

test("case 0",()=>{
	const result = countTwo(0);
	expect(result).toBe(0);
});
test("case 2",()=>{
	const result = countTwo(2);
	expect(result).toBe(1);
});
test("case 7",()=>{
	const result = countTwo(7);
	expect(result).toBe(0);
});
test("case 8",()=>{
	const result = countTwo(8);
	expect(result).toBe(3);
});
