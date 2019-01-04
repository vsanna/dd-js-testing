import { asyncAdd } from "../src/async";

import test, { ExecutionContext } from 'ava'

test("write test case: add should return sum", async (t: ExecutionContext) => {
	const actual = await asyncAdd(100, 200)
	t.is(actual, 300)
});

test("write test case: add should throw error if a negative arg is passed", async (t: ExecutionContext) => {
	try {
		await asyncAdd(-100, 200)
	} catch (error) {
		t.is(error.message, 'Invalid args')
	}
});

// same above
test("write test case: add should throw error if a negative arg is passed 2", async (t: ExecutionContext) => {
	const error = await t.throwsAsync(asyncAdd(-100, 200))
	t.is(error.message, 'Invalid args')
});