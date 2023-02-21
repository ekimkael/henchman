import React, { Fragment } from "react"
import { Route, Routes } from "react-router-dom"

import UserSettings from "@/pages/username/settings"
import UserDashboard from "@/pages/username/dashboard"

interface Props {}

const User: React.FC<Props> = () => {
	return (
		<Fragment>
			<Routes>
				<Route path="/" element={<UserDashboard />} />
				<Route path="/settings" element={<UserSettings />} />
			</Routes>
		</Fragment>
	)
}

export default User
