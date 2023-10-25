import { MDBCard } from 'mdb-react-ui-kit'
import { useEffect, useState } from 'react'
import { tasks } from '../../../test.data'
import { ITask } from '../../../types/tasks'
import { Loading } from '../../ui/Loading/Loading'
import { TaskList } from '../../ui/Tasks/TaskList'
import { TaskStatus } from '../../ui/Tasks/TaskStatus'
import styles from './Workspace.module.scss'
import { WORKSPACE_GRID } from '../../../config/workspace.config'
import { Statuses } from '../../../config/tasks.config'

export const Workspace = () => {
	const [data, setData] = useState<ITask[]>()

	useEffect(() => {
		setData(tasks)
	}, [])

	return (
		<>
			{data ? (
				<div style={{gridTemplateColumns: '1fr 1fr 1fr'}} className={styles.page}>
					{WORKSPACE_GRID.map(status => (
						<MDBCard style={{minHeight: '703px', padding: '20px'}}>
							<TaskStatus status={status as Statuses} />
              <hr/>
							<TaskList grid={1} data={data.filter(e => e.status === status)} />
						</MDBCard>
					))}
				</div>
			) : (
				<Loading />
			)}
		</>
	)
}
