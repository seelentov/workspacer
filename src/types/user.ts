export class UserStore {
	id: string
	token: string

	constructor(dt: UserStore) {
		this.token = dt.token || ''
		this.id = dt.id || ''
	}
}

export class UserLogin {
	password: string
	email: string

	constructor(dt: UserLogin) {
		this.password = dt.password
		this.email = dt.email
	}
}

export class UserSignUp {
	password: string | ''
	checkPass: string | ''
	email: string | ''
	name: string | ''
	birth: string | ''
	position: string | ''

	constructor(dt: UserSignUp) {
		this.password = dt.password
		this.checkPass = dt.checkPass
		this.name = dt.name
		this.birth = dt.birth
		this.position = dt.position
		this.email = dt.email
	}
}

export class User {
	name: string
	img: string
	id: string
	email: string
	birth: number
	position: string

	constructor(dt: User) {
		this.name = dt.name
		this.img = dt.img
		this.id = dt.id
		this.email = dt.email
		this.birth = dt.birth
		this.position = dt.position
	}
}
