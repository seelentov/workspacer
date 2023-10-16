import { createSlice } from '@reduxjs/toolkit'
import { clearCookieLogin, setCookieLogin } from '../../service/cookieLogin'
import { UserStore } from '../../types/user'

const initialState: UserStore = {
	token: '',
	id: '',
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, { payload: inputs }) => {
			const user = new UserStore(inputs)
			state = user
			setCookieLogin(user)
		},
		logout: state => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			state = initialState
			clearCookieLogin()
		},
	},
})
