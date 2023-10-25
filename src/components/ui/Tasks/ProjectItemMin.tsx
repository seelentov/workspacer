import { MDBCard } from 'mdb-react-ui-kit'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTING } from '../../../config/routing.config'
import { IProject } from '../../../types/tasks'
import { TaskDate } from './TaskDate'
import { TaskStatus } from './TaskStatus'
import styles from './Tasks.module.scss'

export interface IProjectItemMinProps {
	project: IProject
}

export const ProjectItemMin: FC<IProjectItemMinProps> = ({ project }) => {
	return (
		<MDBCard style={{ border: '1px grey solid' }}>
			<div className={styles.taskItem}>
				<div className={styles.taskItemInfo}>
					<Link to={ROUTING.TASKS + project.id}>
						<p>{project.name}</p>
					</Link>
					<TaskStatus status={project.status} />
					<TaskDate endTime={project.endTime} createTime={project.createTime} />
				</div>
			</div>
		</MDBCard>
	)
}
