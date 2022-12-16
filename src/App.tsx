import router from "./routes"
import { RouterProvider } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// Create a client
const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider>
				<RouterProvider router={router} />
			</ChakraProvider>

			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default App
