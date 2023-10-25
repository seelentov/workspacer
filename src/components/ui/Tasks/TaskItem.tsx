import { MDBCard } from 'mdb-react-ui-kit'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTING } from '../../../config/routing.config'
import { ITask } from '../../../types/tasks'
import { TaskDate } from './TaskDate'
import { TaskPerformers } from './TaskPerformers'
import { TaskProject } from './TaskProject'
import { TaskStatus } from './TaskStatus'
import styles from './Tasks.module.scss'

export interface ITaskItemProps {
	task: ITask
}

export const TaskItem: FC<ITaskItemProps> = ({ task }) => {
	return (
		<MDBCard style={{ border: '1px grey solid' }}>
			<div className={styles.taskItem}>
				<TaskPerformers usersID={task.performers} />
				<div className={styles.taskItemInfo}>
					<Link to={ROUTING.TASKS + task.id}>
						<p>{task.name}</p>
					</Link>
					<div className={styles.taskItemBottom}>
						<TaskStatus status={task.status} />
						<TaskProject project={task.project} />
					</div>
					<TaskDate endTime={task.endTime} createTime={task.createTime} />
				</div>
			</div>
		</MDBCard>
	)
}
