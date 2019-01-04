import { promiseAdd } from "../src/promise";

import test, { ExecutionContext } from 'ava'

test("write test case: add should return sum", (t: ExecutionContext) => {
	return promiseAdd(100, 200).then((result: number) => {
		t.is(result, 300)
	})
});

test("write test case: add should throw error if a negative arg is passed", async (t: ExecutionContext) => {
	try {
		await promiseAdd(-100, 200)
	} catch (error) {
		t.is(error.message, 'Invalid args')
	}
});

// same above
test("write test case: add should throw error if a negative arg is passed 2", async (t: ExecutionContext) => {
	const error = await t.throwsAsync(promiseAdd(-100, 200))
	t.is(error.message, 'Invalid args')
});