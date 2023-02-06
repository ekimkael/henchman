import React from "react"
import { Spinner } from "@chakra-ui/react"
import { Navigate, Outlet } from "react-router-dom"

import useAuth from "../hooks/useAuth"

const UnprotectedRoute: React.FC = () => {
	const { user, isLoading } = useAuth()

	if (isLoading) {
		return <Spinner />
	} else if (user) {
		return <Navigate to="/" replace />
	} else {
		return <Outlet />
	}
}

export default UnprotectedRoute
