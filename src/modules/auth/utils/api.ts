import axios from "@/config/axios"
import { ResetPasswordFormData, SigninFormData, SignupFormData } from "./types"

export const signupAPI = async (inputs: SignupFormData): Promise<any> => {
	const result = await axios.post("/auth/signup", inputs)
	return result?.data
}

export const signinAPI = async (credentials: SigninFormData): Promise<any> => {
	const result = await axios.post("/auth/signin", credentials)
	return result?.data
}

export const signoutAPI = async (): Promise<any> => {
	const result = await axios.post("/auth/signout", {})
	return result?.data
}

export const forgotPasswordAPI = async (email: string): Promise<any> => {
	const result = await axios.post("/auth/forgot-password", email)
	return result?.data
}

export const resetPasswordAPI = async (
	inputs: ResetPasswordFormData
): Promise<any> => {
	const { password, token } = inputs
	const result = await axios.post(
		`/auth/reset-password?token=${token}`,
		password
	)
	return result?.data
}

export const getUserAPI = async (): Promise<any> => {
	const result = await axios.post("/me", {})
	return result?.data
}
