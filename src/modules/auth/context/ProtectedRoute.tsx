import React from "react"
import { Spinner } from "@chakra-ui/react"
import { Navigate, Outlet, useLocation } from "react-router-dom"

import useAuth from "../hooks/useAuth"

/*
|--------------------------------------------------------------------------
| Add interface to play with roles if role needs to be checked
|--------------------------------------------------------------------------
|
| interface Props {
|	  allowedRoles: string[]
| }
|
*/

const ProtectedRoute: React.FC = () => {
	const { user, isLoading } = useAuth()
	const location = useLocation()

	if (isLoading && !user) {
		return <Spinner />
	} else if (user) {
		return <Outlet />
	} else {
		return <Navigate to="/auth/signin" state={{ from: location }} />
	}
}

export default ProtectedRoute
