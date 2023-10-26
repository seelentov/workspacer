import { Statuses } from '../config/tasks.config'

export class ITask {
	public id: string
	public name: string
	public project: string
	public status: Statuses
	public createTime: number
	public endTime: number
	public timing: number
	public text: string
	public performers: string[]
	public initiator: string
	public comments: ITaskComment[] | []

	constructor(dt: ITask) {
		this.id = dt.id
		this.name = dt.name
		this.project = dt.project
		this.status = dt.status
		this.createTime = dt.createTime
		this.endTime = dt.endTime
		this.timing = dt.timing
		this.text = dt.text
		this.performers = dt.performers
		this.initiator = dt.initiator
		this.comments = dt.comments
	}
}

export class ITaskComment {
	public id: string
	public text: string
	public time: number
	public initiator: string

	constructor(dt: ITaskComment) {
		this.id = dt.id
		this.text = dt.text
		this.time = dt.time
		this.initiator = dt.initiator
	}
}

export class ITaskNew {
	public id: string
	public name: string
	public project: string
	public createTime: number
	public endTime: number
	public timing: number
	public text: string
	public performers: string[]
	public initiator: string
	public comments: ITaskComment[] | []

	constructor(dt: ITask) {
		this.id = dt.id
		this.name = dt.name
		this.project = dt.project
		this.createTime = dt.createTime
		this.endTime = dt.endTime
		this.timing = 0
		this.text = dt.text
		this.performers = dt.performers
		this.initiator = dt.initiator
		this.comments = []
	}
}

export class ITaskFilter {
	public name: string | ''
	public fromTime: number | null
	public toTime: number | null
	public status: Statuses | ''

	constructor(dt: ITaskFilter) {
		this.name = dt.name
		this.fromTime = dt.fromTime
		this.toTime = dt.toTime
		this.status = dt.status
	}
}
export class IProject {
	public id: string
	public name: string
	public tasks: string[]
	public createTime: number
	public endTime: number
	public text: string
	public initiator: string
	public comments: ITaskComment[] | []
	public status: Statuses

	constructor(dt: IProject) {
		this.id = dt.id
		this.name = dt.name
		this.tasks = dt.tasks
		this.createTime = dt.createTime
		this.endTime = dt.endTime
		this.text = dt.text
		this.initiator = dt.initiator
		this.comments = dt.comments
		this.status = dt.status
	}
}
