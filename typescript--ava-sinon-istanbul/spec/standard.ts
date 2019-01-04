import { add } from "../src/standard";

import test, { ExecutionContext } from 'ava'

test("write test case: add should return sum", (t: ExecutionContext) => {
	t.is(add(100, 200), 300)
});

test("write test case: add should throw error if a negative arg is passed", (t: ExecutionContext) => {
	const error = t.throws(() => { add(-100, 200) }, Error)
	t.is(error.message, 'Invalid args')
});

// same above
test("write test case: add should throw error if a negative arg is passed 2", (t: ExecutionContext) => {
	try {
		add(-100, 200)
	} catch (error) {
		t.is(error.message, 'Invalid args')
	}
});