import Axios, { AxiosRequestConfig } from "axios"

import { db } from "./storage"
import { API_URL } from "."

const axios = Axios.create({ baseURL: API_URL })

const authRequestInterceptor = async (config: AxiosRequestConfig) => {
	const user = await db.user.get(1)
	const token = user?.token

	config.headers = { ...config.headers }
	if (token) config.headers.authorization = `Bearer ${token}`
	config.headers.Accept = "application/json"

	return config
}

axios.interceptors.request.use(authRequestInterceptor)
axios.interceptors.response.use((response) => {
	const status = response.data.statusCode
	const validCodes = [200, 201]
	if (validCodes.includes(status)) return response.data
})

export default axios
