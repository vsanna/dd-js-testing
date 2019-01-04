export const add = (a: number, b: number): number => {
	if (a < 0 || b < 0) throw new Error('Invalid args')
	return a + b
}