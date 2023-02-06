import React from "react"
import { Routes, Route } from "react-router-dom"

import OtpPage from "./pages/otp"
import SigninPage from "./pages/signin"
import SignupPage from "./pages/signup"
import ForgotPasswordPage from "./pages/forgot-password"

// interface Props = {}

const AuthRoutes: React.FC<{}> = (props) => {
	return (
		<>
			<Routes>
				<Route path="signin" element={<SigninPage />} />
				<Route path="signup" element={<SignupPage />} />
				<Route path="otp" element={<OtpPage />} />
				<Route path="forgot-password" element={<ForgotPasswordPage />} />
			</Routes>
		</>
	)
}

export default AuthRoutes
