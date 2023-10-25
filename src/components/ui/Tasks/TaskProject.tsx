import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTING } from '../../../config/routing.config'
import { projects } from '../../../test.data'
import { IProject } from '../../../types/tasks'
import styles from './Tasks.module.scss'

export interface ITaskProjectProps {
	project: string
}

export const TaskProject: FC<ITaskProjectProps> = ({ project }) => {
	const [data, setData] = useState<IProject>()

	useEffect(() => {
		setData(projects.find(e => e.id === project))
	}, [project])
	return (
		<>
			{data && (
				<div className={styles.taskItemProject}>
					<Link to={ROUTING.PROJECTS + data.id}>
						<p>{data.name}</p>
					</Link>
				</div>
			)}
		</>
	)
}
