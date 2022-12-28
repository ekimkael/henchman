export interface SigninFormData {
	email: string
	password: string
}

export interface SignupFormData {
	firstname: string
	lastname: string
	email: string
	password: string
}

export type ForgotPassword = Pick<SigninFormData, "email">

export interface OTPFormData {
	pin: string
}
