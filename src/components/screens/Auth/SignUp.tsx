import { MDBBtn, MDBInput } from 'mdb-react-ui-kit'
import { FC, FormEvent, useCallback, useState } from 'react'
import { SIGN_ERRORS, signUpValidate } from '../../../config/login.config'
import { THEME } from '../../../service/theme.config'
import { UserSignUp } from '../../../types/user'
import styles from './Auth.module.scss'

export const SignUp: FC<{
	setLoading: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setLoading }) => {
	const [inputs, setInputs] = useState<UserSignUp>(
		new UserSignUp(UserSignUp.EMPTY)
	)
	const [errors, setErrors] = useState<SIGN_ERRORS[]>()

	const handleSubmit = useCallback(
		(e: FormEvent) => {
			e.preventDefault()

			const errorsArr: SIGN_ERRORS[] = signUpValidate(inputs)
			setErrors(errorsArr)

			if (errorsArr) {
				return
			}
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
