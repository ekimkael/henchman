import {
	Input,
	HStack,
	Button,
	FormLabel,
	InputGroup,
	FormControl,
	FormErrorMessage,
	InputRightElement,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, SubmitHandler } from "react-hook-form"

import AuthLayout from "../layouts"
import { schema } from "../utils/validations"
import { SignupFormData } from "../utils/types"

const SignupPage: React.FC<{}> = () => {
	const navigate = useNavigate()
	const [show, setShow] = useState(false)

	const methods = useForm<SignupFormData>({
		mode: "onChange",
		resolver: yupResolver(schema.signup),
	})
	const { register, handleSubmit } = methods
	const { errors, isValid } = methods.formState

	const onSubmit: SubmitHandler<SignupFormData> = (inputs) => {
		console.log({ inputs })
		navigate("/auth/otp")
	}

	return (
		<AuthLayout
			linkURL="/auth/signin"
			title="Create your account"
			linkText="Already have an account? signin"
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<HStack>
					<FormControl id="firstName" isInvalid={!!errors?.firstname}>
						<FormLabel>First Name</FormLabel>
						<Input placeholder="John" {...register("firstname")} />

						{errors.firstname ? (
							<FormErrorMessage>Email is required.</FormErrorMessage>
						) : null}
					</FormControl>

					<FormControl id="lastName" isInvalid={!!errors?.lastname}>
						<FormLabel>Last Name</FormLabel>
						<Input placeholder="Doe" {...register("lastname")} />
					</FormControl>
				</HStack>

				<FormControl id="email" isInvalid={!!errors?.email}>
					<FormLabel>Email address</FormLabel>
					<Input
						type="email"
						{...register("email")}
						placeholder="your.email@example.com"
					/>
				</FormControl>

				<FormControl id="password" isInvalid={!!errors?.password}>
					<FormLabel>Password</FormLabel>
					<InputGroup>
						<Input
							{...register("password")}
							placeholder="wJuhl24R01A&"
							type={show ? "text" : "password"}
						/>
						<InputRightElement mx={2}>
							<Button
								variant="unstyled"
								onClick={() => setShow((show) => !show)}
							>
								{show ? "show" : "hide"}
							</Button>
						</InputRightElement>
					</InputGroup>
				</FormControl>

				<Button
					mt={6}
					w="full"
					type="submit"
					isDisabled={!isValid}
					colorScheme="messenger"
				>
					Sign up
				</Button>
			</form>
		</AuthLayout>
	)
}

export default SignupPage
