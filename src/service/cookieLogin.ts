import Cookies from 'js-cookie'
import { UserStore } from '../types/user'

export const setCookieLogin = ({ id, token }: UserStore) => {
	Cookies.set('id', id)
	Cookies.set('token', token)
}

export const clearCookieLogin = () => {
	Cookies.remove('id')
	Cookies.remove('token')
}