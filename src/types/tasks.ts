export class Task {
  public id: string
  public name: string
  public project: string
  public createTime: number
  public endTime: number
  public timing: number
  public text: string
  public performers: string[]
  public initiator: string
  public comments: TaskComment[] | []

  constructor(dt: Task){
    this.id = dt.id
    this.name = dt.name
    this.project = dt.project
    this.createTime = dt.createTime
    this.endTime = dt.endTime
    this.timing = dt.timing
    this.text = dt.text
    this.performers = dt.performers
    this.initiator = dt.initiator
    this.comments = dt.comments
  }
}

export class TaskComment {
  public id: string
  public text: string
  public time: number
  public initiator: string

  constructor(dt: TaskComment){
    this.id = dt.id
    this.text = dt.text
    this.time = dt.time
    this.initiator = dt.initiator
  }
}


export class TaskNew {
  public id: string
  public name: string
  public project: string
  public createTime: number
  public endTime: number
  public timing: number
  public text: string
  public performers: string[]
  public initiator: string
  public comments: TaskComment[] | []

  constructor(dt: Task){
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