import React from "react"
import {
	Box,
	Text,
	Stack,
	HStack,
	VStack,
	Button,
	Heading,
	PinInput,
	FormControl,
	PinInputField,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"

const OtpPage: React.FC<{}> = () => {
	const email = "username@mail.com"

	return (
		<VStack minH="100vh" align="center" justify="center" bg="gray.50">
			<Heading fontSize="3xl">Verify your Email</Heading>

			<Stack
				p={6}
				my={10}
				w="full"
				maxW="sm"
				bg="white"
				spacing={4}
				rounded="xl"
				boxShadow="sm">
				<Box textAlign="center">
					<Text as="span" fontSize={{ base: "sm", sm: "md" }} color="gray.600">
						We have sent code to your email
					</Text>
					<Text
						as="span"
						fontWeight="bold"
						fontSize={{ base: "sm", sm: "md" }}
						color="gray.600">
						{` ${email}`}
					</Text>
				</Box>

				<FormControl>
					<HStack justify="center">
						<PinInput>
							<PinInputField />
							<PinInputField />
							<PinInputField />
							<PinInputField />
						</PinInput>
					</HStack>
				</FormControl>

				<Stack spacing={6}>
					<Button colorScheme="yellow">Verify</Button>
				</Stack>
			</Stack>

			<Link to="/auth/signin">Back to signin</Link>
		</VStack>
	)
}

export default OtpPage
