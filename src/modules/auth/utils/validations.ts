import * as yup from "yup"

export const schema = {
	signin: yup.object().shape({
		email: yup.string().email().required(),
		password: yup.string().required(),
		// isRemember: yup.boolean().notRequired(),
	}),
	signup: yup.object().shape({
		firstname: yup.string().required(),
		lastname: yup.string().required(),
		email: yup.string().email().required(),
		password: yup.string().required(),
	}),
	forgotPassword: yup.object().shape({
		email: yup.string().email().required(),
	}),
	otp: yup.object().shape({
		pin: yup.string().required(),
	}),
}
