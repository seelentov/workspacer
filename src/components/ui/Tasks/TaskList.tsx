import { FC, useState } from 'react'
import { IProject, ITask, ITaskFilter } from '../../../types/tasks'
import { ListPagination } from './ListPagination'
import { TaskFilter } from './TaskFilter'
import { TaskItem } from './TaskItem'
import styles from './Tasks.module.scss'

export interface IProjectsListProps {
	data: IProject[] | ITask[]
	grid: number
	filterable?: boolean
	paginationItems?: number
	dataType: 'projects' | 'tasks'
}

export const TaskList: FC<IProjectsListProps> = ({
	data,
	grid,
	dataType,
	filterable = false,
	paginationItems = 10,
}) => {
	const [filterProps, setFilter] = useState<ITaskFilter>(
		new ITaskFilter({
			name: '',
			fromTime: null,
			toTime: null,
			status: 'ALL',
		})
	)

	const [page, setPage] = useState<number>(1)

	if (!data) return

	const paginationSlice = [
		0 + paginationItems * (page - 1),
		paginationItems + paginationItems * (page - 1),
	]

	const filteredData = (
		data: IProject[] | ITask[],
		filterProps: ITaskFilter
	) => {
		return data
			.sort((a, b) => b.createTime - a.createTime)
			.filter(e => {
				return (
					e.name
						.trim()
						.toLowerCase()
						.includes(filterProps.name.trim().toLowerCase()) ||
					filterProps.name === ''
				)
			})
			.filter(e => {
				return (
					filterProps.fromTime === null || e.createTime >= filterProps.fromTime
				)
			})
			.filter(e => {
				return (
					filterProps.toTime === null ||
					e.createTime - 86400000 <= filterProps.toTime
				)
			})
			.filter(e => {
				return e.status === filterProps.status || filterProps.status === 'ALL'
			})
	}

	return (
		<div className={styles.taskListWrapper}>
			{filterable && (
				<TaskFilter
					filterProps={filterProps}
					setFilter={setFilter}
					type={dataType}
          setPage={setPage}
				/>
			)}

			<div
				className={styles.taskList}
				style={{ gridTemplateColumns: `repeat(${grid}, 1fr)` }}
			>
				{filteredData(data, filterProps)
					.slice(...paginationSlice)
					.map((e, key) => (
						<TaskItem
							key={key}
							task={e}
							type={dataType === 'projects' ? 'project' : 'task'}
						/>
					))}
			</div>
			{data && (
				<ListPagination
					page={page}
					setPage={setPage}
					total={
						filterProps ? filteredData(data, filterProps).length : data.length
					}
					paginationItems={paginationItems}
				/>
			)}
		</div>
	)
}
