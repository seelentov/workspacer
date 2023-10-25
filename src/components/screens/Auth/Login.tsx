import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit'
import { FC, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SIGN_ERRORS } from '../../../config/login.config'
import { ROUTING } from '../../../config/routing.config'
import { THEME } from '../../../config/theme.config'
import { useActions } from '../../../hooks/useActions'
import { IUserLogin } from '../../../types/user'
import styles from './Auth.module.scss'

export const Login: FC<{
	setLoading: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setLoading }) => {
	const [inputs, setInputs] = useState<IUserLogin>(
		new IUserLogin(IUserLogin.EMPTY)
	)
	const [denied, setDenied] = useState<boolean>(false)

	const navigate = useNavigate()
	const { setUser } = useActions()

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		setLoading(true)
		setDenied(false)

		const auth = getAuth()
		signInWithEmailAndPassword(auth, inputs.email, inputs.password)
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.then((UserCredential: any) => {
				const { user } = UserCredential
				setUser({
					id: user.uid,
					token: user.accessToken,
				})
			})
			.then(() => {
				setLoading(false)
				navigate(ROUTING.WORKSPACE)
			})
			.catch(e => {
				console.error(e)
				setDenied(true)
				setLoading(false)
			})
	}

	return (
		<form className={styles.form} onSubmit={e => handleSubmit(e)} noValidate>
			<MDBInput
				value={inputs.email}
				onChange={e => setInputs({ ...inputs, email: e.target.value })}
				wrapperClass='mb-4'
				label='Email address'
				id='email'
				type='email'
			/>
			<MDBInput
				value={inputs.password}
				onChange={e => setInputs({ ...inputs, password: e.target.value })}
				wrapperClass='mb-4'
				label='Password'
				id='password'
				type='password'
			/>

			<MDBBtn className='mb-4' style={{ background: '#00e6a4' }}>
				Войти
			</MDBBtn>
			{denied && (
				<p style={{ color: THEME.ERROR, textAlign: 'center' }}>
					{SIGN_ERRORS.DENIED}
				</p>
			)}
		</form>
	)
}
