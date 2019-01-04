export const promiseAdd = (a: number, b: number): Promise<number> => {
	return new Promise((resolve, reject) => {
		if (a < 0 || b < 0) {
			reject(new Error('Invalid args'))
		} else {
			resolve(a + b)
		}
	})
}
