import { FC, useEffect, useState } from 'react'
import { tasks } from '../../../test.data'
import { ITask } from '../../../types/tasks'
import { TaskList } from '../Tasks/TaskList'

export interface IProfileTasksProps {
	tasksID: string[]
	grid: number
}

export const UserTasks: FC<IProfileTasksProps> = ({ tasksID, grid }) => {
	const [data, setData] = useState<ITask[]>()

	useEffect(() => {
		//subscribeSomeData('tasks', ['id', 'in', tasksID], (data: Task[])=>{
		setData(tasks)
		//})
	}, [tasksID])

	return (
		<div>
			{data && (
				<TaskList
					filterable
					data={data.filter(e => e.status !== 'DONE')}
					grid={grid}
				/>
			)}
		</div>
	)
}
