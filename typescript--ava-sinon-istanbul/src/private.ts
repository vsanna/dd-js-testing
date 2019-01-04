export class User {
	public birthday: Date

	constructor(
		public name: string,
		public age: number
	) {
		this.birthday = this.calcBirthday()
	}

	private calcBirthday(){
		return new Date(2019, 1, 1)
	}
}