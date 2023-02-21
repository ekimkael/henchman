import React from "react"
import { Link } from "react-router-dom"

interface Props {}

const Homepage: React.FC<Props> = (props) => {
	return (
		<div>
			<Link to="/auth/signin">Go to signin</Link>
		</div>
	)
}

export default Homepage
