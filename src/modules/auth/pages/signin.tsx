import React from "react"
import {
	Button,
	Input,
	Stack,
	VStack,
	HStack,
	Heading,
	Checkbox,
	FormLabel,
	FormControl,
	FormErrorMessage,
} from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form"

interface FormData {
	email: string
	password: string
}

const SigninPage: React.FC<{}> = () => {
	const methods = useForm<FormData>()
	const navigate = useNavigate()

	const { register, handleSubmit } = methods
	const { errors, isValid } = methods.formState

	const onSubmit: SubmitHandler<FormData> = (inputs) => {
		navigate("/auth/otp")
	}

	return (
		<VStack minH="100vh" align="center" justify="center" bg="gray.50">
			<Heading textAlign="center" fontSize="3xl">
				Signin to your account
			</Heading>

			<Stack
				p={6}
				my={12}
				w="full"
				maxW="md"
				bg="white"
				spacing={4}
				rounded="xl"
				boxShadow="sm">
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormControl id="email" isInvalid={!!errors.email}>
						<FormLabel>Email address</FormLabel>
						<Input
							type="email"
							{...register("email")}
							placeholder="your.email@example.com"
						/>

						{errors.email !== null ? (
							<FormErrorMessage>Email is required.</FormErrorMessage>
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
							<FormErrorMessage>Email is required.</FormErrorMessage>
						) : null}
					</FormControl>

					<HStack justify="space-between">
						<Checkbox>Remember me</Checkbox>
						<Link to="/auth/forgot-password">Forgot password</Link>
					</HStack>

					<Button
						mt={6}
						width="full"
						type="submit"
						colorScheme="yellow"
						isDisabled={!isValid}>
						Sign in
					</Button>
				</form>
			</Stack>

			<Link to="/auth/signup">Don&#39;t have an account? signup</Link>
		</VStack>
	)
}

export default SigninPage
