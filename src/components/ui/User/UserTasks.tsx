import { FC, useEffect, useState } from 'react'
import { tasks } from '../../../test.data'
import { ITask } from '../../../types/tasks'
import { TaskList } from '../Tasks/TaskList'
import { MDBCard } from 'mdb-react-ui-kit'
import styles from './User.module.scss'
export interface IProfileTasksProps {
	tasksID: string[]
	grid: number
	paginationItems?: number
}

export const UserTasks: FC<IProfileTasksProps> = ({
	tasksID,
	grid,
	paginationItems = 6,
}) => {
	const [data, setData] = useState<ITask[]>()

	useEffect(() => {
		//subscribeSomeData('tasks', ['id', 'in', tasksID], (data: Task[])=>{
		setData(tasks)
		//})
	}, [tasksID])

	return (
		<MDBCard
			style={{ padding: '10px' }}
			className={styles.info}
		>
			{data && (
				<TaskList
					dataType={'tasks'}
					filterable
					data={data.filter(e => e.status !== 'DONE')}
					grid={grid}
					paginationItems={paginationItems}
				/>
			)}
		</MDBCard>
	)
}
