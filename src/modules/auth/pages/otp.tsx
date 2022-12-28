import React from "react"
import {
	Box,
	Text,
	HStack,
	Button,
	PinInput,
	FormControl,
	PinInputField,
	FormErrorMessage,
} from "@chakra-ui/react"
import AuthLayout from "../layouts"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

import { OTPFormData } from "../utils/types"
import { schema } from "../utils/validations"

const OtpPage: React.FC = () => {
	const email = "username@mail.com"

	const navigate = useNavigate()
	const methods = useForm<OTPFormData>({
		mode: "onChange",
		resolver: yupResolver(schema.otp),
	})

	const { control, handleSubmit } = methods
	const { errors, isValid } = methods.formState

	const onSubmit: SubmitHandler<OTPFormData> = (inputs) => {
		console.log({ inputs })
		navigate("/")
	}

	return (
		<AuthLayout
			title="Verify your Email"
			linkText="Back to signin"
			linkURL="/auth/signin"
		>
			<Box textAlign="center">
				<Text as="span" fontSize="lg" color="gray.600">
					We have sent code to your email
				</Text>
				<Text as="span" color="gray.600" fontWeight="bold" fontSize="lg">
					{` ${email}`}
				</Text>
			</Box>

			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl>
					<HStack justify="center">
						<Controller
							name="pin"
							control={control}
							render={({ field: { onChange } }) => (
								<PinInput onChange={onChange}>
									<PinInputField />
									<PinInputField />
									<PinInputField />
									<PinInputField />
								</PinInput>
							)}
						/>
					</HStack>

					{errors.pin !== null ? (
						<FormErrorMessage>{errors?.pin?.message}</FormErrorMessage>
					) : null}
				</FormControl>

				<Button
					type="submit"
					colorScheme="messenger"
					w="full"
					mt={6}
					isDisabled={!isValid}
				>
					Verify
				</Button>
			</form>
		</AuthLayout>
	)
}

export default OtpPage
