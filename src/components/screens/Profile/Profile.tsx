import { MDBCard, MDBCol, MDBRow } from 'mdb-react-ui-kit'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStoreBy } from '../../../hooks/useStoreBy'
import { subscribeData } from '../../../store/api/firebase/endpoints'
import { IUserAccount } from '../../../types/user'
import { Loading } from '../../ui/Loading/Loading'
import { UserInfo } from '../../ui/User/UserInfo'
import { UserTasks } from '../../ui/User/UserTasks'
import styles from './Profile.module.scss'

export interface IProfileProps {}

export const Profile: FC<IProfileProps> = () => {
	const { id } = useParams()
	const thisUser = useStoreBy('user')
	const [user, setUser] = useState<IUserAccount>()

	useEffect(() => {
		const userId: string = id ? id : thisUser.id
		subscribeData('users', userId, (r: IUserAccount) => {
			setUser(r)
		})
	}, [id])

	return (
		<>
			{user ? (
				<div className={styles.page}>
					<MDBRow>
						<MDBCol md='6'>
							<MDBCard style={{ minHeight: '100%' }}>
								<img src={user?.img} className={styles.image} alt={user?.img} />
							</MDBCard>
						</MDBCol>
						<MDBCol md='6'>
							<MDBCard className={styles.info} style={{ minHeight: '100%' }}>
								<UserInfo user={user} />
							</MDBCard>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol>
							<UserTasks tasksID={user.tasks} grid={2} />
						</MDBCol>
					</MDBRow>
				</div>
			) : (
				<Loading />
			)}
		</>
	)
}
