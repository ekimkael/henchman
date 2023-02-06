import React from "react"
import { Link } from "react-router-dom"
import { VStack, Heading, Stack } from "@chakra-ui/react"

interface Props {
	title: string
	linkURL: string
	linkText: string
	children: React.ReactNode
}

const AuthLayout: React.FC<Props> = (props) => {
	const { children, title, linkText, linkURL } = props

	return (
		<VStack minH="100vh" align="center" justify="center" bg="gray.50">
			<Heading fontSize="3xl" textAlign="center">
				{title}
			</Heading>

			<Stack
				p={6}
				my={12}
				w="full"
				maxW="md"
				bg="white"
				rounded="xl"
				boxShadow="sm"
			>
				{children}
			</Stack>

			<Link to={linkURL}>{linkText}</Link>
		</VStack>
	)
}

export default AuthLayout
