import { UserSignUp } from '../types/user'

export class SIGN_ERRORS {
	static NAME = 'Введите имя пользователя'
	static EMAIL = 'Введите корректный E-mail'
	static PASS = 'Пароль должен быть более 6-ти символов'
	static CHECK_PASS = 'Несовпадение подтверждения с паролем'
	static POSITION = 'Введите должность'
	static BIRTH = 'Некорректная дата рождения'
}

export const signUpValidate = (inputs: UserSignUp): SIGN_ERRORS[] => {
	const errors: SIGN_ERRORS[] = []
	if (inputs.name === '') {
		errors.push(SIGN_ERRORS.NAME)
	}

	if (!emailRegex.test(inputs.email)) {
		errors.push(SIGN_ERRORS.EMAIL)
	}

	if (inputs.password.length < 6) {
		errors.push(SIGN_ERRORS.PASS)
	}

	if (inputs.password !== inputs.checkPass) {
		errors.push(SIGN_ERRORS.CHECK_PASS)
	}

	if (inputs.position === '') {
		errors.push(SIGN_ERRORS.POSITION)
	}

	const date = new Date(inputs.birth).getTime()
	if (inputs.birth === '' || date > Date.now()) {
		errors.push(SIGN_ERRORS.BIRTH)
	}

	return errors
}

const emailRegex = /^\S+@\S+\.\S+$/gi
