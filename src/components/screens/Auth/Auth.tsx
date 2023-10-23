import { MDBCard, MDBContainer } from 'mdb-react-ui-kit'
import { useState } from 'react'
import { Logo } from '../../ui/Logo/Logo'
import styles from './Auth.module.scss'
import { Login } from './Login'
import { SignUp } from './SignUp'
import { Loading } from '../../ui/Loading/Loading'

export const Auth = () => {
	const [page, setPage] = useState<'login' | 'signUp'>()
  const [loading, setLoading] = useState<boolean>(false)
	return (
    <MDBCard>
      {loading && <Loading/>}
			<MDBContainer
				className={'p-3 d-flex flex-column' + ' ' + styles.page}
				style={{ display: 'flex', alignItems: 'center' }}
			>
        <Logo />
        
				{page === 'login' ? <Login setLoading={setLoading} /> : <SignUp  setLoading={setLoading}/>}
				
        <p
					onClick={() => setPage(page === 'login' ? 'signUp' : 'login')}
					className={styles.switchPage + ' text-center'}
				>
					{page === 'login'
						? 'Еще нет аккаунта? Зарегистрироваться'
						: 'Уже есть аккаунт? Войти'}
				</p>
			</MDBContainer>
      </MDBCard>
	)
}
