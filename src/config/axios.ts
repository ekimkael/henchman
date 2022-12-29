import Axios from "axios"
import { API_URL } from "."

const axios = Axios.create({ baseURL: API_URL })

axios.interceptors.response.use(
	(response) => {
		const status = response.data.api_callback_status
		if (status === "SUCCESS") {
			return response.data.api_return
		} else {
			throw new Error(response.data.api_error.error_message)
		}
	},
	(error) => {
		const message = error.response.data || error.message

		return message
	}
)

export default axios
