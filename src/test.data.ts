import { IProject, ITask } from './types/tasks'

export const tasks: ITask[] = [
	new ITask({
		id: '13jkh4j324jk23kj42',
		name: 'Задача 1 Задача 1 Задача 1 Задача 1 Задача 1 Задача 1Задача 1 Задача 1 Задача 1 Задача 1 Задача 1 Задача 1',
		project: '534lhkj3h6kj3h3k21hjk42k',
		createTime: Date.now(),
		status: 'NEW',
		endTime: Date.now() + 6387123872,
		timing: 0,
		text: 'Текст задачи',
		performers: ['irWTHbl46sW1qA2cFNpMF1LTLZ73'],
		initiator: 'ukBeAa8CzcMZR7UfJrhple9jPE73',
		comments: [],
	}),
	new ITask({
		id: 'fdsgjkhkjh2134jkk23',
		name: 'Задача 2',
		project: '534lhkj3h6kj3h3k21hjk42k',
		createTime: Date.now() + 81293892,
		endTime: Date.now() + 1163871238,
		timing: 0,
		status: 'ACTIVE',
		text: 'Текст задачи',
		performers: [
			'sBe8xA0zHoh5mwMoZv47ZQtNSoU2',
			'irWTHbl46sW1qA2cFNpMF1LTLZ73',
		],
		initiator: 'ukBeAa8CzcMZR7UfJrhple9jPE73',
		comments: [],
	}),
	new ITask({
		id: 'h4j3k2jk4h23kk1hk2jh3k',
		name: 'Задача 3',
		project: '534lhkj3h6kj3h3k21hjk42k',
		createTime: Date.now(),
		endTime: Date.now() + 123871238,
		timing: 0,
		status: 'DONE',
		text: 'Текст задачи',
		performers: [
			'sBe8xA0zHoh5mwMoZv47ZQtNSoU2',
			'irWTHbl46sW1qA2cFNpMF1LTLZ73',
		],
		initiator: 'ukBeAa8CzcMZR7UfJrhple9jPE73',
		comments: [],
	}),
]

export const projects: IProject[] = [
	new IProject({
		id: '534lhkj3h6kj3h3k21hjk42k',
		name: 'Проект 1Проект 1 Проект 1 Проект 1Проект 1Проект 1Проект 1Проект 1Проект 1Проект 1Проект 1Проект 1',
		tasks: [
			'13jkh4j324jk23kj42',
			'fdsgjkhkjh2134jkk23',
			'h4j3k2jk4h23kk1hk2jh3k',
		],
		createTime: Date.now() + 103871238,
		endTime: Date.now() + 123871238,
		text: 'Текст задачи',
		initiator: 'ukBeAa8CzcMZR7UfJrhple9jPE73',
		comments: [],
	}),
]