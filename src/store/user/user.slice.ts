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
			state.token = inputs.token
			state.id = inputs.id

      const user = new UserStore(inputs)
			setCookieLogin(user)
		},
    setOnlyUser: (state, { payload: inputs }) => {
			state.token = inputs.token
			state.id = inputs.id
		},
		logout: state => {
			state.token = ''
			state.id = ''
			clearCookieLogin()
		},
	},
})
