import { asyncAdd } from "../src/async";

import chai, { assert, expect } from 'chai'
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');
// chai.use(sinonChai);
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised);

describe("some class/module", () => {
	context("some method: promiseAdd", () => {
		it("should return sum", async () => {
			const result = await asyncAdd(90, 20)
			expect(result).to.eq(110)
		});
		
		it("with chai-as-promised: should return sum", () => {
			expect(asyncAdd(90, 20)).to.eventually.eq(110)
		});

		it("should throw error if some of args is negative", () => {
			expect(asyncAdd(-1, 20)).to.eventually.throw(new Error("Invalid args"))
		});
	});
});
