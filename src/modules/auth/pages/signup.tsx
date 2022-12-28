import {
	Input,
	Stack,
	VStack,
	HStack,
	Button,
	Heading,
	FormLabel,
	InputGroup,
	FormControl,
	InputRightElement,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { Link } from "react-router-dom"

const SignupPage: React.FC<{}> = () => {
	const [show, setShow] = useState(false)

	return (
		<VStack minH="100vh" align="center" justify="center" bg="gray.50">
			<Heading fontSize="3xl" textAlign="center">
				Create your account
			</Heading>

			<Stack
				p={6}
				my={12}
				w="full"
				maxW="md"
				bg="white"
				rounded="xl"
				boxShadow="sm">
				<form>
					<HStack>
						<FormControl id="firstName" isRequired>
							<FormLabel>First Name</FormLabel>
							<Input placeholder="John" />
						</FormControl>

						<FormControl id="lastName">
							<FormLabel>Last Name</FormLabel>
							<Input placeholder="Doe" />
						</FormControl>
					</HStack>

					<FormControl id="email" isRequired>
						<FormLabel>Email address</FormLabel>
						<Input type="email" placeholder="your.email@example.com" />
					</FormControl>

					<FormControl id="password" isRequired>
						<FormLabel>Password</FormLabel>
						<InputGroup>
							<Input
								placeholder="wJuhl24R01A&"
								type={show ? "text" : "password"}
							/>
							<InputRightElement mx={2}>
								<Button
									variant="unstyled"
									onClick={() => setShow((show) => !show)}>
									{show ? "show" : "hide"}
								</Button>
							</InputRightElement>
						</InputGroup>
					</FormControl>

					<Button colorScheme="yellow" w="full" mt={6}>
						Sign up
					</Button>
				</form>
			</Stack>

			<Link to="/auth/signin">Already have an account? signin</Link>
		</VStack>
	)
}

export default SignupPage
