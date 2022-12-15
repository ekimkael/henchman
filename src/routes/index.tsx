import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>hello</div>,
	},
	{
		path: "/signin",
		element: <h1>Signin</h1>,
	},
	{
		path: "/signup",
		element: <h1>Signup</h1>,
	},
])

export default router
