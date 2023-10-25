import { MDBCard } from 'mdb-react-ui-kit'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTING } from '../../../config/routing.config'
import { TaskDate } from './TaskDate'
import { TaskStatus } from './TaskStatus'
import styles from './Tasks.module.scss'
import { IProject } from '../../../types/tasks'

export interface IProjectItemProps {
	task: IProject
}

export const ProjectItem: FC<IProjectItemProps> = ({ task }) => {
	return (
		<MDBCard style={{ border: '1px grey solid' }}>
			<div className={styles.taskItem}>
				<div className={styles.taskItemInfo}>
					<Link to={ROUTING.TASKS + task.id}>
						<p className={styles.taskItemName}>{task.name}</p>
					</Link>
					<div className={styles.taskItemBottom}>
						<TaskStatus status={task.status} />
					</div>
					<TaskDate endTime={task.endTime} createTime={task.createTime} />
				</div>
			</div>
		</MDBCard>
	)
}
