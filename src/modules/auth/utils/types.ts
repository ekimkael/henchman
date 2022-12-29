export interface SigninFormData {
	email: string
	password: string
	// isRemember?: boolean
}

export interface SignupFormData {
	firstname: string
	lastname: string
	email: string
	password: string
}

export interface OTPFormData {
	pin: string
}

export type ForgotPassword = Pick<SigninFormData, "email">

export interface ResetPasswordFormData {
	password: string
	token: string
}
