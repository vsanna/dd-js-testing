export default () => {
	return {
		"compileEnhancements": false,
		"extensions": ["ts"],
		"require": ["ts-node/register"],
		"concurrency": 5,
		"failFast": true,
		"verbose": true,
	}
}