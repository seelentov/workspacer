import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit'
import { FC, FormEvent, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SIGN_ERRORS, signUpValidate } from '../../../config/login.config'
import { ROUTING } from '../../../config/routing.config'
import { THEME } from '../../../config/theme.config'
import { useActions } from '../../../hooks/useActions'
import { addToData } from '../../../store/api/firebase/endpoints'
import { IUserNew, IUserSignUp } from '../../../types/user'
import styles from './Auth.module.scss'

export const SignUp: FC<{
	setLoading: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setLoading }) => {
	const [inputs, setInputs] = useState<IUserSignUp>(
		new IUserSignUp(IUserSignUp.EMPTY)
	)
	const [errors, setErrors] = useState<SIGN_ERRORS[]>([])
	const navigate = useNavigate()
	const { setUser } = useActions()

	const handleSubmit = useCallback(
		(e: FormEvent) => {
			e.preventDefault()
			setLoading(true)
			const errorsArr: SIGN_ERRORS[] = signUpValidate(inputs)
			setErrors(errorsArr)

			if (errorsArr.length > 1) {
				console.log(errorsArr)
				setLoading(false)
				return
			}

			const auth = getAuth()
			createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.then((userCredential: any) => {
					const { user } = userCredential
					setUser({
						id: user.uid,
						token: user.accessToken,
					})
					addToData(
						'users',
						user.uid,
						new IUserNew({
							id: user.uid,
							email: inputs.email,
							name: inputs.name,
							birth: inputs.birth,
							position: inputs.position,
						})
					)
				})
				.then(() => {
					setLoading(false)
					navigate(ROUTING.WORKSPACE)
				})
				.catch(e => {
					console.log(e)
					setLoading(false)
					if (e.message.includes('email-already-in-use')) {
						setErrors([SIGN_ERRORS.EMAIL_REUSE])
					}
				})
		},
		[inputs]
	)

	return (
		<form
			className={'needs-validation' + ' ' + styles.form}
			onSubmit={e => handleSubmit(e)}
			noValidate
		>
			<MDBInput
				wrapperClass={
					'mb-4 ' + (errors?.includes(SIGN_ERRORS.NAME) && styles.error)
				}
				placeholder={''}
				value={inputs.name}
				onChange={e => {
					setInputs({ ...inputs, name: e.target.value })
				}}
				label='Ф.И.О'
				id='name'
				type='text'
			>
				<p className={styles.invalid}>{SIGN_ERRORS.NAME}</p>
			</MDBInput>
			<MDBInput
				value={inputs.position}
				onChange={e => setInputs({ ...inputs, position: e.target.value })}
				wrapperClass={
					'mb-4 ' + (errors?.includes(SIGN_ERRORS.POSITION) && styles.error)
				}
				label='Должность'
				id='position'
				type='text'
			>
				<p className={styles.invalid}>{SIGN_ERRORS.POSITION}</p>
			</MDBInput>
			<MDBInput
				value={inputs.email}
				onChange={e => setInputs({ ...inputs, email: e.target.value })}
				wrapperClass={
					'mb-4 ' +
					((errors?.includes(SIGN_ERRORS.EMAIL) ||
						errors?.includes(SIGN_ERRORS.EMAIL_REUSE)) &&
						styles.error)
				}
				label='Email'
				id='email'
				type='email'
			>
				<p className={styles.invalid}>
					{errors?.includes(SIGN_ERRORS.EMAIL_REUSE)
						? SIGN_ERRORS.EMAIL_REUSE
						: SIGN_ERRORS.EMAIL}
				</p>
			</MDBInput>
			<MDBInput
				value={inputs.birth}
				onChange={e => setInputs({ ...inputs, birth: e.target.value })}
				wrapperClass={
					'mb-4 ' + (errors?.includes(SIGN_ERRORS.BIRTH) && styles.error)
				}
				label='Дата рождения'
				id='birth'
				type='date'
			>
				<p className={styles.invalid}>{SIGN_ERRORS.BIRTH}</p>
			</MDBInput>
			<MDBInput
				value={inputs.password}
				onChange={e => setInputs({ ...inputs, password: e.target.value })}
				wrapperClass={
					'mb-4 ' + (errors?.includes(SIGN_ERRORS.PASS) && styles.error)
				}
				label='Пароль'
				id='password'
				type='password'
			>
				<p className={styles.invalid}>{SIGN_ERRORS.PASS}</p>
			</MDBInput>
			<MDBInput
				value={inputs.checkPass}
				onChange={e => setInputs({ ...inputs, checkPass: e.target.value })}
				wrapperClass={
					'mb-4 ' + (errors?.includes(SIGN_ERRORS.CHECK_PASS) && styles.error)
				}
				label='Подтвердите пароль'
				id='checkPass'
				type='password'
			>
				<p className={styles.invalid}>{SIGN_ERRORS.CHECK_PASS}</p>
			</MDBInput>

			<MDBBtn
				className='mb-4'
				onClick={e => handleSubmit(e)}
				style={{ background: THEME.MAIN_COLOR, margin: '0 auto' }}
			>
				Зарегистрироваться
			</MDBBtn>
		</form>
	)
}
