import { promiseAdd } from "../src/promise";

import chai, { assert, expect } from 'chai'
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');
// chai.use(sinonChai);
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised);

describe("some class/module", () => {
	context("some method: promiseAdd", () => {
		it("should return sum", done => {
			promiseAdd(90, 20).then((result: any) => {
				assert.equal(result, 110)
				done()
			});
		});

		it("should throw error if some of args is negative", (done) => {
			const result = promiseAdd(-1, 10)
			result.catch((error: any) => {
				assert.equal(error.message, 'Invalid args');
				done()
			});
		});
	});
});
