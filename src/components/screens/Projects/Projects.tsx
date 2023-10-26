import { useEffect, useState } from 'react'
import { projects } from '../../../test.data'
import { IProject } from '../../../types/tasks'
import { Loading } from '../../ui/Loading/Loading'
import { TaskList } from '../../ui/Tasks/TaskList'
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
					<TaskList data={data} grid={3} filterable dataType={'projects'} />
				</div>
			) : (
				<Loading />
			)}
		</>
	)
}
