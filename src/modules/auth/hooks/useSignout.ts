import { useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import useAuth from "./useAuth"

const useSignout = () => {
	const navigate = useNavigate()
	const client = useQueryClient()
	const { setUser } = useAuth()

	const logout = async () => {
		await sessionStorage.clear()
		client.invalidateQueries()
		setUser?.(undefined)
		client.clear()

		navigate("/auth/signin")
	}

	return logout
}

export default useSignout
