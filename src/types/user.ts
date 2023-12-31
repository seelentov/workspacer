import { ITask } from './tasks'

export class IUserStore {
	id: string | ''
	token: string | ''

	static EMPTY = {
		id: '',
		token: '',
	}

	constructor(dt: IUserStore) {
		this.token = dt.token
		this.id = dt.id
	}
}

export class IUserLogin {
	password: string
	email: string

	static EMPTY = {
		password: '',
		email: '',
	}

	constructor(dt: IUserLogin) {
		this.password = dt.password
		this.email = dt.email
	}
}

export class IUserSignUp {
	password: string | ''
	checkPass: string | ''
	email: string | ''
	name: string | ''
	birth: string | ''
	position: string | ''

	static EMPTY = {
		password: '',
		checkPass: '',
		email: '',
		name: '',
		birth: '',
		position: '',
	}

	constructor(dt: IUserSignUp) {
		this.password = dt.password
		this.checkPass = dt.checkPass
		this.name = dt.name
		this.birth = dt.birth
		this.position = dt.position
		this.email = dt.email
	}
}

export class IUserAccount {
	name: string
	img: string
	id: string
	email: string
	birth: string
	position: string
	tasks: string[]

	static EMPTY = {
		name: '',
		img: '',
		id: '',
		email: '',
		birth: '',
		position: '',
	}

	constructor(dt: IUserAccount) {
		this.name = dt.name
		this.img = dt.img
		this.id = dt.id
		this.email = dt.email
		this.birth = dt.birth
		this.position = dt.position
		this.tasks = dt.tasks
	}
}

export type IUserProfileInfo = 'name' | 'birth' | 'position' | 'email' | 'id'
export class IUserNew {
	name: string
	img?: string | '/src/assets/no-img-account.jpg'
	id: string
	email: string
	birth: string
	position: string
	tasks?: ITask[] | []

	static EMPTY = {
		name: '',
		img: '',
		id: '',
		email: '',
		birth: '',
		position: '',
	}

	constructor(dt: IUserNew) {
		this.name = dt.name
		this.img = '/src/assets/no-img-account.jpg'
		this.id = dt.id
		this.email = dt.email
		this.birth = dt.birth
		this.position = dt.position
		this.tasks = []
	}
}
