import Cookies from 'js-cookie'
import { FC, PropsWithChildren, useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useAuth } from '../../hooks/useAuth'
import { Auth } from '../screens/Auth/Auth'
//import { clearCookieLogin } from '../../service/cookieLogin'; clearCookieLogin()

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const user = Cookies.get('id')
	const { setOnlyUser } = useActions()

	useEffect(() => {
		if (user) {
			setOnlyUser({
				id: user,
				token: Cookies.get('token'),
			})
		}
	}, [user])

	return <>{useAuth() ? children : <Auth />}</>
}
