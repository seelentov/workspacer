import { Task } from "./tasks"

export class UserStore {
	id: string | ''
	token: string | ''

	static EMPTY = {
		id: '',
		token: '',
	}

	constructor(dt: UserStore) {
		this.token = dt.token
		this.id = dt.id
	}
}

export class UserLogin {
	password: string
	email: string

  static EMPTY = {
		password: '',
		email: '',
	}

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

  static EMPTY = {
		password: '',
		checkPass: '',
		email: '',
		name: '',
		birth: '',
		position: '',
	}

	constructor(dt: UserSignUp) {
		this.password = dt.password
		this.checkPass = dt.checkPass
		this.name = dt.name
		this.birth = dt.birth
		this.position = dt.position
		this.email = dt.email
	}
}

export class UserAccount {
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

	constructor(dt: UserAccount) {
		this.name = dt.name
		this.img = dt.img
		this.id = dt.id
		this.email = dt.email
		this.birth = dt.birth
		this.position = dt.position
		this.tasks = dt.tasks
	}
}


export type UserProfileInfo = 'name' | 'birth' | 'position' | 'email' | 'id'
export class UserNew {
	name: string
	img?: string | '/src/assets/no-img-account.jpg'
	id: string
	email: string
	birth: string
	position: string
  tasks?: Task[] | []

	static EMPTY = {
		name: '',
		img: '',
		id: '',
		email: '',
		birth: '',
		position: '',
	}
  
	constructor(dt: UserNew) {
		this.name = dt.name
		this.img = '/src/assets/no-img-account.jpg'
		this.id = dt.id
		this.email = dt.email
		this.birth = dt.birth
		this.position = dt.position
    this.tasks = []
	}
}
