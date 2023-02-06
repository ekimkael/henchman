import { SigninAPI } from "../utils/api"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useSignin = () => {
	const client = useQueryClient()

	const mutation = useMutation(SigninAPI, {
		onSuccess: (data) => {
			client.setQueryData(["user"], data)
			// do whatever needs to be done with signin data
		},
	})

	return mutation
}

export default useSignin
