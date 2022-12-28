import {
	Text,
	Input,
	Stack,
	VStack,
	Button,
	Heading,
	FormControl,
} from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"

const ForgotPasswordPage: React.FC<{}> = () => {
	return (
		<VStack minH="100vh" align="center" justify="center" bg="gray.50">
			<Heading fontSize="3xl">Forgot your password?</Heading>

			<Stack
				p={6}
				my={12}
				w="full"
				maxW="md"
				bg="white"
				spacing={4}
				rounded="xl"
				boxShadow="sm">
				<Text
					color="gray.600"
					textAlign="center"
					fontSize={{ base: "sm", md: "lg" }}>
					You&apos;ll get an email with a reset link
				</Text>

				<form>
					<FormControl id="email">
						<Input type="email" placeholder="your.email@example.com" />
					</FormControl>

					<Button colorScheme="yellow" w="full" mt={6}>
						Request Reset
					</Button>
				</form>
			</Stack>

			<Link to="/auth/signin">Go to signin</Link>
		</VStack>
	)
}

export default ForgotPasswordPage
