import { MDBContainer } from 'mdb-react-ui-kit'
import { useState } from 'react'
import { Logo } from '../../ui/Logo'
import styles from './Auth.module.scss'
import { Login } from './Login'
import { SignUp } from './SignUp'

export const Auth = () => {
	const [page, setPage] = useState<'login' | 'signUp'>()

	return (
		<div className={styles.page}>
			
			<MDBContainer
				className={'p-3 d-flex flex-column'}
				style={{ display: 'flex', alignItems: 'center' }}
			>
        <Logo />
				{page === 'login' ? <Login /> : <SignUp />}
				<p
					onClick={() => setPage(page === 'login' ? 'signUp' : 'login')}
					className={styles.switchPage + ' text-center'}
				>
					{page === 'login'
						? 'Еще нет аккаунта? Зарегистрироваться'
						: 'Уже есть аккаунт? Войти'}
				</p>
			</MDBContainer>
		</div>
	)
}
