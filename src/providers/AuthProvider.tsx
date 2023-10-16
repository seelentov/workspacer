import Cookies from 'js-cookie'
import React, { FC, PropsWithChildren, useEffect, useState } from 'react'
import { Auth } from '../components/screens/Auth/Auth'

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const user = Cookies.get('id')

	const [auth, setAuth] = useState<boolean>(false)

	useEffect(() => {
		setAuth(!!user)
	}, [user])

	return <>{auth ? children : <Auth />}</>
}
