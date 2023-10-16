import Cookies from 'js-cookie'
import React, { FC, PropsWithChildren, useEffect, useState } from 'react'
import { Auth } from '../components/screens/Auth/Auth'
//import { clearCookieLogin } from '../service/cookieLogin'

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const user = Cookies.get('id')
  //clearCookieLogin()
	const [auth, setAuth] = useState<boolean>(false)

	useEffect(() => {
		setAuth(!!user)
	}, [user])

	return <>{auth ? children : <Auth />}</>
}
