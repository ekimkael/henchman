import {
	Text,
	HStack,
	Button,
	PinInput,
	FormControl,
	PinInputField,
	FormErrorMessage,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

import AuthLayout from "../layouts"
import { OTPFormData } from "../utils/types"
import { schema } from "../utils/validations"

const OtpPage: React.FC = () => {
	const email = "username@mail.com"
	const [isLoading, setIsLoading] = useState(false)

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
			<Text textAlign="center" fontSize="lg" color="gray.600">
				<Text as="span">We have sent code to your email</Text>
				<Text as="strong">{` ${email}`}</Text>
			</Text>

			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl isInvalid={!!errors?.pin}>
					<HStack justify="center">
						<Controller
							name="pin"
							control={control}
							render={({ field: { onChange } }) => (
								<PinInput
									onChange={(value) => onChange(value)}
									onComplete={() => setIsLoading(true)}
								>
									<PinInputField />
									<PinInputField />
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
					mt={6}
					w="full"
					type="submit"
					isDisabled={!isValid}
					isLoading={isLoading}
					colorScheme="messenger"
				>
					Verify
				</Button>
			</form>
		</AuthLayout>
	)
}

export default OtpPage
