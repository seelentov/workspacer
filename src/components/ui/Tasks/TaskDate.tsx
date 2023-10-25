import { FC } from 'react'
import styles from './Tasks.module.scss'

export interface ITaskDateProps {
	createTime: number
	endTime: number
}

export const TaskDate: FC<ITaskDateProps> = ({ createTime, endTime }) => {
	const formatDate = () => {
		const formatTime = (milliseconds: number) => {
			const date = new Date(milliseconds)
			const formattedDate = date.toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			})
			return formattedDate
		}

		const isOverdue = Date.now() > endTime
		const formatEnd = formatTime(endTime)
		const formatCreate = formatTime(createTime)

		const string =
			formatEnd !== formatCreate
				? `${formatCreate} - ${formatEnd}`
				: `${formatCreate}`

		return <p style={{ color: isOverdue ? 'red' : 'black' }}>{string}</p>
	}

	return <div className={styles.taskItemDate}>{formatDate()}</div>
}
