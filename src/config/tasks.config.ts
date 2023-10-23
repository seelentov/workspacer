export type Statuses = 'NEW' | 'DONE' | 'LOADING' | 'RETURN' | 'TESTING' | 'ACTIVE'

export const TASK_STATUSES:{
  [key: string]: {
    color: string,
    value: Statuses
  }
} = {
  NEW: {
    color: 'orange',
    value: 'NEW'
  },
  DONE: {
    color: 'green',
    value: 'DONE'
  },
  LOADING: {
    color: 'gray',
    value: 'LOADING'

  },
  RETURN: {
    color: 'yellow',
    value: 'RETURN'

  },
  TESTING: {
    color: '#021691',
    value: 'TESTING'

  },
  ACTIVE: {
    color: 'blue',
    value: 'ACTIVE'

  }
}