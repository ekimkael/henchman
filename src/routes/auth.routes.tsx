import React from "react"
import { Routes, Route } from "react-router-dom"

import OtpPage from "@/pages/auth/otp"
import SigninPage from "@/pages/auth/signin"
import SignupPage from "@/pages/auth/signup"
import ForgotPasswordPage from "@/pages/auth/forgot-password"

interface Props {}

const AuthRoutes: React.FC<Props> = () => {
	return (
		<Routes>
			<Route path="signin" element={<SigninPage />} />
			<Route path="signup" element={<SignupPage />} />
			<Route path="otp" element={<OtpPage />} />
			<Route path="forgot-password" element={<ForgotPasswordPage />} />
		</Routes>
	)
}

export default AuthRoutes
