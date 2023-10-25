
export type Statuses = 'NEW' | 'DONE' | 'LOADING' | 'RETURN' | 'TESTING' | 'ACTIVE' | 'ALL'

export const TASK_STATUSES:{
  [key: string]: {
    color: string,
    value: Statuses,
    label: Statuses
  }
} = {
  NEW: {
    color: 'orange',
    value: 'NEW',
    label: 'NEW'
  },
  DONE: {
    color: 'green',
    value: 'DONE',
    label: 'DONE'
  },
  LOADING: {
    color: 'gray',
    value: 'LOADING',
    label: 'LOADING'
  },
  RETURN: {
    color: 'yellow',
    value: 'RETURN',
    label: 'RETURN'
  },
  TESTING: {
    color: '#021691',
    value: 'TESTING',
    label: 'TESTING'
  },
  ACTIVE: {
    color: 'blue',
    value: 'ACTIVE',
    label: 'ACTIVE'
  }
}

type ITaskStatus = {
    color: string,
    value: Statuses,
    label: Statuses
}

export const TASK_STATUSES_SELECT: ITaskStatus[] = [
  {
    color: 'orange',
    value: 'NEW',
    label: 'NEW'
  },
  {
    color: 'green',
    value: 'DONE',
    label: 'DONE'
  },
  {
    color: 'gray',
    value: 'LOADING',
    label: 'LOADING'
  },
  {
    color: 'yellow',
    value: 'RETURN',
    label: 'RETURN'
  },
   {
    color: '#021691',
    value: 'TESTING',
    label: 'TESTING'
  },
  {
    color: 'blue',
    value: 'ACTIVE',
    label: 'ACTIVE'
  },
  {
    color: 'pink',
    value: 'ALL',
    label: 'ALL'
  }
]




export type ProdStatuses = 'DONE' | 'LOADING' | 'ACTIVE' | 'ALL'


export const PROD_STATUSES_SELECT: ITaskStatus[] = [
  {
    color: 'green',
    value: 'DONE',
    label: 'DONE'
  },
  {
    color: 'gray',
    value: 'LOADING',
    label: 'LOADING'
  },
  {
    color: 'blue',
    value: 'ACTIVE',
    label: 'ACTIVE'
  },
  {
    color: 'black',
    value: 'ALL',
    label: 'ALL'
  }
]