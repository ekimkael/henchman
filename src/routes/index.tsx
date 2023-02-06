import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import AuthRoutes from "@auth/route"

interface Props {}

const RootRouter: React.FC<Props> = (props) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<div />} />
				<Route path="auth/*" element={<AuthRoutes />} />
			</Routes>
		</BrowserRouter>
	)
}

export default RootRouter
