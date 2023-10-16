import { createSlice } from '@reduxjs/toolkit'
import { UserStore } from '../../types/user'
import { clearCookieLogin, setCookieLogin } from '../../service/cookieLogin'

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
