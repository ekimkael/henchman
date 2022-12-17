import { render, screen } from "@testing-library/react"
import { describe, it } from "vitest"
import Navbar from "./Navbar"

describe("Navbar", () => {
	it("render the navbar", () => {
		// ARRANGE
		render(<Navbar />)

		// ACT

		// EXPECT
		expect(
			screen.getByText(
				(content, element) => element?.tagName?.toLowerCase() === "nav"
			)
		).toHaveTextContent("Navbar")
	})
})
