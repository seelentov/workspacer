import { MDBCard } from 'mdb-react-ui-kit'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTING } from '../../../config/routing.config'
import { ITask } from '../../../types/tasks'
import { TaskDate } from './TaskDate'
import { TaskProject } from './TaskProject'
import { TaskStatus } from './TaskStatus'
import styles from './Tasks.module.scss'

export interface ITaskItemMinProps {
	task: ITask
	dataType: 'task' | 'project'
}

export const TaskItemMin: FC<ITaskItemMinProps> = ({ task, dataType }) => {
	return (
		<MDBCard style={{ border: '1px grey solid' }}>
			<div className={styles.taskItem}>
				<div className={styles.taskItemInfo}>
					<Link to={ROUTING.TASKS + task.id}>
						<p>{task.name}</p>
					</Link>
					<TaskStatus status={task.status} />
					{dataType === 'task' && <TaskProject project={task.project} />}
					<TaskDate endTime={task.endTime} createTime={task.createTime} />
				</div>
			</div>
		</MDBCard>
	)
}
