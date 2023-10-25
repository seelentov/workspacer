import { FC, useState } from 'react'
import { IProject, ITaskFilter } from '../../../types/tasks'
import { ProjectItem } from './ProjectItem'
import { TaskFilter } from './TaskFilter'
import styles from './Tasks.module.scss'

export interface IProjectsListProps {
	data: IProject[]
	grid: number
	filterable?: boolean
}

export const ProjectsList: FC<IProjectsListProps> = ({
	data,
	grid,
	filterable = false,
}) => {
	const [filterProps, setFilter] = useState<ITaskFilter>(
		new ITaskFilter({
			name: '',
			fromTime: null,
			toTime: null,
			status: 'ALL',
		})
	)

	if (!data) return

	const filteredData = (data: IProject[], filterProps: ITaskFilter) => {
		return data
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
			.sort((a, b) => b.createTime - a.createTime)
	}

	return (
		<>
			{filterable && (
				<TaskFilter filterProps={filterProps} setFilter={setFilter} type="projects"/>
			)}

			<div
				className={styles.taskList}
				style={{ gridTemplateColumns: `repeat(${grid}, 1fr)` }}
			>
				{data && filterProps
					? filteredData(data, filterProps).map((e, key) => (
							<ProjectItem key={key} task={e} />
				))
					: data
							.sort((a, b) => b.createTime - a.createTime)
							.map((e, key) => <ProjectItem key={key} task={e} />)}
			</div>
		</>
	)
}
