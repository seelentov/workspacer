import { useEffect, useState } from 'react'
import { tasks } from '../../../test.data'
import { ITask } from '../../../types/tasks'
import { Loading } from '../../ui/Loading/Loading'
import { TaskList } from '../../ui/Tasks/TaskList'
import styles from './Tasks.module.scss'

export const Tasks = () => {
	const [data, setData] = useState<ITask[]>()

	useEffect(() => {
		setData(tasks)
	}, [])

	return (
		<>
			{data ? (
				<div className={styles.page}>
					<TaskList data={data} grid={3} filterable dataType={'tasks'} />
				</div>
			) : (
				<Loading />
			)}
		</>
	)
}
