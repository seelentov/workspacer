import { MDBCard } from 'mdb-react-ui-kit'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTING } from '../../../config/routing.config'
import { IProject, ITask } from '../../../types/tasks'
import { TaskDate } from './TaskDate'
import { TaskPerformers } from './TaskPerformers'
import { TaskProject } from './TaskProject'
import { TaskStatus } from './TaskStatus'
import styles from './Tasks.module.scss'

export interface ITaskItemProps {
	task: IProject | ITask
	type: 'task' | 'project'
}

export const TaskItem: FC<ITaskItemProps> = ({ task, type }) => {
	return (
		<MDBCard style={{ border: '1px grey solid' }}>
			<div className={styles.taskItem}>
				{type === 'task' && <TaskPerformers usersID={task.performers} />}
				<div className={styles.taskItemInfo}>
					<Link
						to={(type === 'task' ? ROUTING.TASKS : ROUTING.PROJECTS) + task.id}
					>
						<p className={styles.taskItemName}>{task.name}</p>
					</Link>
					<div className={styles.taskItemBottom}>
						<TaskStatus status={task.status} />
						{type === 'task' && <TaskProject project={task.project} />}
					</div>
					<TaskDate endTime={task.endTime} createTime={task.createTime} />
				</div>
			</div>
		</MDBCard>
	)
}
