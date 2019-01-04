export const asyncAdd = async (a: number, b: number): Promise<number> => {
	if (a < 0 || b < 0) {
		throw new Error('Invalid args')
	} else {
		return a + b
	}
}
