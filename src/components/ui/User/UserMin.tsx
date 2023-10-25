import { MDBCard } from 'mdb-react-ui-kit'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTING } from '../../../config/routing.config'
import { IUserAccount } from '../../../types/user'
import { TaskPerformers } from '../Tasks/TaskPerformers'
import styles from './User.module.scss'

export interface IUserMinProps {
	user: IUserAccount
}

export const UserMin: FC<IUserMinProps> = ({ user }) => {
	return (
		<MDBCard style={{ border: '1px grey solid' }}>
			<div className={styles.userItem}>
				<TaskPerformers usersID={[user.id]} />
				<div className={styles.userItemInfo}>
					<Link to={ROUTING.TASKS + user.id}>
						<p>{user.name}</p>
					</Link>
				</div>
			</div>
		</MDBCard>
	)
}
