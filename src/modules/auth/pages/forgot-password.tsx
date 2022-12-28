import {
	Text,
	Input,
	Button,
	FormControl,
	FormErrorMessage,
} from "@chakra-ui/react"
import React from "react"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form"

import AuthLayout from "../layouts"
import { schema } from "../utils/validations"
import { ForgotPassword } from "../utils/types"

const ForgotPasswordPage: React.FC = () => {
	const navigate = useNavigate()
	const methods = useForm<ForgotPassword>({
		mode: "onChange",
		resolver: yupResolver(schema.forgotPassword),
	})

	const { register, handleSubmit } = methods
	const { errors, isValid } = methods.formState

	const onSubmit: SubmitHandler<ForgotPassword> = (inputs) => {
		console.log({ inputs })
		navigate("/auth/signin")
	}

	return (
		<AuthLayout
			title="Forgot your password?"
			linkText="Go to signin"
			linkURL="/auth/signin"
		>
			<Text color="gray.600" textAlign="center" fontSize="lg">
				You&apos;ll get an email with a reset link
			</Text>

			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl id="email" isInvalid={!!errors?.email}>
					<Input
						type="email"
						{...register("email")}
						placeholder="your.email@example.com"
					/>

					{errors.email !== null ? (
						<FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
					) : null}
				</FormControl>

				<Button
					mt={6}
					w="full"
					type="submit"
					isDisabled={!isValid}
					colorScheme="messenger"
				>
					Request Reset
				</Button>
			</form>
		</AuthLayout>
	)
}

export default ForgotPasswordPage
