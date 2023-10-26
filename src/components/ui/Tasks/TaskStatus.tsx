import { FC } from 'react'
import { Statuses, TASK_STATUSES } from '../../../config/tasks.config'
import styles from './Tasks.module.scss'

export interface ITaskStatusProps {
	status: Statuses
}

export const TaskStatus: FC<ITaskStatusProps> = ({ status }) => {
	return (
		<div
			className={styles.status}
			style={{ background: TASK_STATUSES[status].color }}
		>
			{TASK_STATUSES[status].value}
		</div>
	)
}
