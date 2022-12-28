import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// import Navbar from "../components/Navbar"
import AuthRoutes from "../modules/auth/route"

// interface Props = {}

const RootRouter: React.FC<{}> = (props) => {
	return (
		<BrowserRouter>
			{/* <Navbar /> */}

			<Routes>
				<Route path="/" element={<div />} />
				<Route path="auth/*" element={<AuthRoutes />} />
			</Routes>
		</BrowserRouter>
	)
}

export default RootRouter
