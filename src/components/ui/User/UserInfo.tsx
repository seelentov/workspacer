import { FC } from 'react'
import { copyToClipboard } from '../../../hooks/service/copyToCopiboard'
import { IUserAccount } from '../../../types/user'

export const UserInfo: FC<{ user: IUserAccount }> = ({ user }) => {
	return (
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
	)
}
