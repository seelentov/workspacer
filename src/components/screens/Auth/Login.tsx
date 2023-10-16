import { MDBBtn, MDBInput } from 'mdb-react-ui-kit'

export const Login = () => {
	return (
		<>
			<MDBInput
				wrapperClass='mb-4'
				label='Email address'
				id='form1'
				type='email'
			/>
			<MDBInput
				wrapperClass='mb-4'
				label='Password'
				id='form2'
				type='password'
			/>

			<MDBBtn className='mb-4' style={{ background: '#00e6a4' }}>
				Войти
			</MDBBtn>
		</>
	)
}
