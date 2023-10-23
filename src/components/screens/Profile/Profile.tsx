import { MDBCard, MDBCol, MDBRow } from 'mdb-react-ui-kit'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStoreBy } from '../../../hooks/useStoreBy'
import { copyToClipboard } from '../../../service/copyToCopiboard'
import { subscribeData } from '../../../store/api/firebase/endpoints'
import { Task } from '../../../types/tasks'
import { UserAccount } from '../../../types/user'
import { Loading } from '../../ui/Loading/Loading'
import styles from './Profile.module.scss'
import { TaskList } from '../../ui/Tasks/TaskList'
import { tasks } from '../../../test.data'

export interface IProfileProps {}

export const Profile: FC<IProfileProps> = () => {
	const { id } = useParams()
	const thisUser = useStoreBy('user')
	const [user, setUser] = useState<UserAccount>()

	useEffect(() => {
		const userId: string = id ? id : thisUser.id
		subscribeData('users', userId, (r: UserAccount) => {
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
							<ProfileInfo user={user} />
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol>
							<MDBCard style={{ minHeight: '100%', padding: '10px' }}>
								<ProfileTasks tasksID={user.tasks}/>
							</MDBCard>
						</MDBCol>
					</MDBRow>
				</div>
			) : (
				<Loading />
			)}
		</>
	)
}

const ProfileInfo: FC<{ user: UserAccount }> = ({ user }) => {
	return (
		<MDBCard className={styles.info} style={{ minHeight: '100%' }}>
			<table>
				<tbody>
					<tr onClick={() => copyToClipboard(user.id)}>
						<th>ID:</th>
						<td>
							{user.id.slice(0, 4) +
								'...' +
								user.id.slice(user.id.length - 4, user.id.length)}
						</td>
					</tr>
					<tr>
						<th>Имя:</th>
						<td>{user.name}</td>
					</tr>
					<tr>
						<th>E-mail:</th>
						<td>{user.email}</td>
					</tr>
					<tr>
						<th>Дата рождения:</th>
						<td>{user.birth}</td>
					</tr>
					<tr>
						<th>Должность:</th>
						<td>{user.position}</td>
					</tr>
				</tbody>
			</table>
		</MDBCard>
	)
}

export interface IProfileTasksProps {
	tasksID: string[],
}

const ProfileTasks: FC<IProfileTasksProps> = ({ tasksID }) => {
	const [data, setData] = useState<Task[]>()

	useEffect(() => {
    //subscribeSomeData('tasks', ['id', 'in', tasksID], (data: Task[])=>{
      setData(tasks)
    //})
  }, [tasksID])

	return <div className={styles.profileTasks}>
    {data && <TaskList data={data.filter(e=>e.status !== 'DONE')} grid={2}/>}
  </div>
}
