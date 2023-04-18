import { createContext, FC, ReactNode, useEffect, useState } from "react"
import { getUserAPI } from "../utils/api"
import { IAuthContext } from "../types"

interface Props {
	children: ReactNode
}

const defaultState = { user: undefined, isLoading: false }
const AuthContext = createContext<IAuthContext<any>>(defaultState)

export const AuthProvider: FC<Props> = ({ children }) => {
	const [user, setUser] = useState(undefined)
	const [isLoading, setIsLoading] = useState(false)

	// handle user state
	const checkIfLoggedIn = async () => {
		try {
			setIsLoading(true)
			const token = await sessionStorage.getItem("token")

			if (!user && token) {
				const data = await getUserAPI()
				setUser(data)
			}
		} catch (error) {
			// console.log(error)
			// report the error
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		checkIfLoggedIn()
	}, [])

	// values to share in the context
	const values = { user, setUser, isLoading: isLoading }

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export default AuthContext
