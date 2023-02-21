import { createContext, FC, ReactNode, useState } from "react"
import { IAuthContext } from "../types"

interface Props {
	children: ReactNode
}

const defaultState = { user: undefined, isLoading: false }
const AuthContext = createContext<IAuthContext<any>>(defaultState)

export const AuthProvider: FC<Props> = ({ children }) => {
	const [user, setUser] = useState(undefined)
	const [isLoading, setIsLoading] = useState(false)

	// this function is suppose to handle user state
	const checkIfIsLoggedIn = async () => {
		try {
			setIsLoading(true)
			await sessionStorage.getItem("token")
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false)
		}
	}

	// values to share in the context
	const values = { user, setUser, isLoading }

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export default AuthContext
