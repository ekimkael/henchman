import { SigninAPI } from "../utils/api"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useSignin = () => {
	const client = useQueryClient()

	const mutation = useMutation(SigninAPI, {
		onSuccess: (data) => {
			// const { token, user } = data
			client.setQueryData(["user"], data)

			// router.push("/")
		},
	})

	return mutation
}

export default useSignin
