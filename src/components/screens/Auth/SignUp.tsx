import { MDBBtn, MDBInput } from 'mdb-react-ui-kit'
import { useCallback, useState } from 'react'
import { SIGN_ERRORS, signUpValidate } from '../../../config/login.config'
import { UserSignUp } from '../../../types/user'
import styles from './Auth.module.scss'

export const SignUp = () => {
	const [inputs, setInputs] = useState<UserSignUp>(
		new UserSignUp({
			password: '',
			checkPass: '',
			email: '',
			name: '',
			birth: '',
			position: '',
		})
	)
	const [errors, setErrors] = useState<SIGN_ERRORS[]>()

	const handleSubmit = useCallback(
		(
			e:
				| React.MouseEvent<HTMLButtonElement, MouseEvent>
				| React.MouseEvent<HTMLAnchorElement, MouseEvent>
		) => {
			e.preventDefault

			const errorsArr: SIGN_ERRORS[] = signUpValidate(inputs)
			setErrors(errorsArr)
			console.log(inputs)
			console.log(errorsArr)
			if (errorsArr) {
				return
			}
		},
		[inputs]
	)

	return (
		<>
			<MDBInput
				wrapperClass={'mb-4 ' + styles.error}
				placeholder={''}
				value={inputs.name}
				onChange={e => {
					setInputs({ ...inputs, name: e.target.value })
				}}
				label='Ф.И.О'
				id='name'
				type='text'
				className={styles.error}
			/>
			<MDBInput
				value={inputs.position}
				onChange={e => setInputs({ ...inputs, position: e.target.value })}
				wrapperClass='mb-4'
				label='Должность'
				id='position'
				type='text'
			/>
			<MDBInput wrapperClass='mb-4' label='Email' id='email' type='email' />
			<MDBInput
				value={inputs.birth}
				onChange={e => setInputs({ ...inputs, birth: e.target.value })}
				wrapperClass='mb-4'
				label='Дата рождения'
				id='birth'
				type='date'
			/>
			<MDBInput
				value={inputs.password}
				onChange={e => setInputs({ ...inputs, password: e.target.value })}
				wrapperClass='mb-4'
				label='Пароль'
				id='password'
				type='password'
			/>
			<MDBInput
				value={inputs.checkPass}
				onChange={e => setInputs({ ...inputs, checkPass: e.target.value })}
				wrapperClass='mb-4'
				label='Подтвердите пароль'
				id='checkPass'
				type='password'
			/>

			<MDBBtn
				className='mb-4'
				onClick={e => handleSubmit(e)}
				style={{ background: '#00e6a4' }}
			>
				Зарегистрироваться
			</MDBBtn>
		</>
	)
}
