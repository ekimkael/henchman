import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import User from "@/modules/user"
import AuthRoutes from "@auth/route"
import Homepage from "@/pages/homepage"
import ProtectedRoute from "@auth/context/ProtectedRoute"
import UnprotectedRoute from "@auth/context/UnprotectedRoute"

const RootRouter: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<ProtectedRoute />}>
					<Route path="/" element={<Homepage />} />
					<Route path=":username/*" element={<User />} />
				</Route>

				<Route element={<UnprotectedRoute />}>
					<Route path="auth/*" element={<AuthRoutes />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default RootRouter
