/// <reference types="vitest" />
/// <reference types="vite/client" />

import * as path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: "@", replacement: path.resolve(__dirname, "src") },
			{
				find: "@auth",
				replacement: path.resolve(__dirname, "src/modules/auth"),
			},
		],
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./src/setup.tests.ts"],
	},
})
