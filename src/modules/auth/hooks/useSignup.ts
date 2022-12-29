import { SignupAPI } from "../utils/api"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const useSignup = () => {
	const client = useQueryClient()

	const mutation = useMutation(SignupAPI, {
		onSuccess: (data) => {
			// const { token, user } = data
			client.setQueryData(["user"], data)

			// router.push("/")
		},
	})

	return mutation
}

export default useSignup
