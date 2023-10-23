import { MDBCard } from 'mdb-react-ui-kit'
import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTING } from '../../../config/routing.config'
import { subscribeSomeData } from '../../../store/api/firebase/endpoints'
import { projects } from '../../../test.data'
import { Project, Task } from '../../../types/tasks'
import { UserAccount } from '../../../types/user'
import { TaskStatus } from './TaskStatus'
import styles from './Tasks.module.scss'

export interface ITaskItemProps {
	task: Task
}

export const TaskItem: FC<ITaskItemProps> = ({ task }) => {
	return (
		<MDBCard>
			<Link to={ROUTING.TASKS + task.id}>
				<div className={styles.taskItem}>
					<TaskPerformers usersID={task.performers} />
					<div className={styles.taskItemInfo}>
						<p className={styles.taskItemName}>{task.name}</p>
						<div className={styles.taskItemBottom}>
							<TaskStatus status={task.status} />
							<TaskProject project={task.project} />
						</div>
						<TaskDate endTime={task.endTime} createTime={task.createTime} />
					</div>
				</div>
			</Link>
		</MDBCard>
	)
}

export interface ITaskPerformersProps {
	usersID: string[]
}

export const TaskPerformers: FC<ITaskPerformersProps> = ({ usersID }) => {
	const [users, setUsers] = useState<UserAccount[]>()

	useEffect(() => {
		subscribeSomeData('users', ['id', 'in', usersID], (data: UserAccount[]) => {
			setUsers(data)
		})
	}, [])

	return (
		<>
			{users && (
				<div className={styles.taskItemImg}>
					{users.map((user, key) => (
						<Link key={key} to={ROUTING.PROFILE + user.id}>
							<img
								style={{ maxWidth: '100%' }}
								src={user.img}
								title={user.name}
							/>
						</Link>
					))}
				</div>
			)}
		</>
	)
}

export interface ITaskDateProps {
	createTime: number
	endTime: number
}

export const TaskDate: FC<ITaskDateProps> = ({ createTime, endTime }) => {
	const formatDate = () => {
		const formatTime = (milliseconds: number) => {
			const date = new Date(milliseconds)
			const formattedDate = date.toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			})
			return formattedDate
		}

		const isOverdue = Date.now() > endTime
		const formatEnd = formatTime(endTime)
		const formatCreate = formatTime(createTime)

		const string =
			formatEnd !== formatCreate
				? `${formatCreate} - ${formatEnd}`
				: `${formatCreate}`

		return <p style={{ color: isOverdue ? 'red' : 'black' }}>{string}</p>
	}

	return <div className={styles.taskItemDate}>{formatDate()}</div>
}

export interface ITaskProjectProps {
	project: string
}

export const TaskProject: FC<ITaskProjectProps> = ({ project }) => {
	const [data, setData] = useState<Project>()

	useEffect(() => {
		setData(projects.find(e => e.id === project))
	}, [project])
	return (
		<>
			{data && (
				<div className={styles.taskItemProject}>
					<Link to={ROUTING.PROJECTS + data.id}>
            <p>{data.name}</p></Link>
				</div>
			)}
		</>
	)
}


