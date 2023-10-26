import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTING } from '../../../config/routing.config'
import { subscribeSomeData } from '../../../store/api/firebase/endpoints'
import { IUserAccount } from '../../../types/user'
import styles from './Tasks.module.scss'

export interface ITaskPerformersProps {
	usersID: string[]
}

export const TaskPerformers: FC<ITaskPerformersProps> = ({ usersID }) => {
	const [users, setUsers] = useState<IUserAccount[]>()

	useEffect(() => {
		subscribeSomeData(
			'users',
			['id', 'in', usersID],
			(data: IUserAccount[]) => {
				setUsers(data)
			}
		)
	}, [])

	return (
		<>
			{users && (
				<div className={styles.taskItemImg}>
					{users.map((user, key) => (
						<Link key={key} to={ROUTING.PROFILE + user.id}>
							<img
								style={{ maxWidth: '100%' }}
								src={user.img}
								title={user.name}
							/>
						</Link>
					))}
				</div>
			)}
		</>
	)
}

export interface ITaskDateProps {
	createTime: number
	endTime: number
}
