import {
	Button,
	Input,
	HStack,
	Checkbox,
	FormLabel,
	FormControl,
	FormErrorMessage,
} from "@chakra-ui/react"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, SubmitHandler } from "react-hook-form"

import AuthLayout from "@/layouts/auth.layout"
import { schema } from "@auth/utils/validations"
import { SigninFormData } from "@auth/utils/types"

const SigninPage: React.FC<{}> = () => {
	const navigate = useNavigate()
	const methods = useForm<SigninFormData>({
		mode: "onChange",
		resolver: yupResolver(schema.signin),
	})

	const { register, handleSubmit } = methods
	const { errors, isValid } = methods.formState

	const onSubmit: SubmitHandler<SigninFormData> = (inputs) => {
		console.log({ inputs })
		navigate("/")
	}

	return (
		<AuthLayout
			title="Signin to your account"
			linkText="Don't have an account? signup"
			linkURL="/auth/signup"
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl id="email" isInvalid={!!errors.email}>
					<FormLabel>Email address</FormLabel>
					<Input
						type="email"
						{...register("email")}
						placeholder="your.email@example.com"
					/>

					{errors.email !== null ? (
						<FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
					) : null}
				</FormControl>

				<FormControl id="password" isInvalid={!!errors.password}>
					<FormLabel>Password</FormLabel>
					<Input
						type="password"
						{...register("password")}
						placeholder="wJuhl24R01A&"
					/>

					{errors.password !== null ? (
						<FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
					) : null}
				</FormControl>

				<HStack justify="space-between" my={3}>
					<Checkbox colorScheme="messenger">Remember me</Checkbox>
					<Link to="/auth/forgot-password">Forgot password</Link>
				</HStack>

				<Button
					mt={6}
					width="full"
					type="submit"
					isDisabled={!isValid}
					colorScheme="messenger"
				>
					Sign in
				</Button>
			</form>
		</AuthLayout>
	)
}

export default SigninPage
