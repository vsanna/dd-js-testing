import { add } from "../src/standard";

import { assert, expect } from 'chai'
import * as chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised);

describe("some class/module", () => {
	context("some method: add", () => {
		it("should return sum", () => {
			const actual = add(100, 200)
			const expected = 300
			// assert.equal(actual, expected) // choose style you like, this or 
			expect(expected).to.eq(actual)    // this(BDD style)
		});

		it("should throw error if some of args is negative", () => {
			// pass function
			expect(()=>{ add(-1, 10) }).to.throw('Invalid args')
			expect(()=>{ add(10, -1) }).to.throw('Invalid args')
		});

		// same as above test
		it("should throw error if some of args is negative", () => {
			try {
				add(-1, -2)
			} catch (err) {
				expect(err).to.be.a('error') // this is nonsence test
				expect(err.message).to.eq('Invalid args')
			}
		});
	});
});
