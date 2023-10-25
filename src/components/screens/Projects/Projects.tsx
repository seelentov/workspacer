import { useEffect, useState } from 'react'
import { projects } from '../../../test.data'
import { IProject } from '../../../types/tasks'
import { Loading } from '../../ui/Loading/Loading'
import { ProjectsList } from '../../ui/Tasks/ProjectsList'
import styles from './Projects.module.scss'

export const Projects = () => {
	const [data, setData] = useState<IProject[]>()

	useEffect(() => {
		setData(projects)
	}, [])

	return (
		<>
			{data ? (
				<div className={styles.page}>
					<ProjectsList data={data} grid={3} filterable />
				</div>
			) : (
				<Loading />
			)}
		</>
	)
}
