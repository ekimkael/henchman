import App from "./App"
import React from "react"
import * as ReactDOM from "react-dom/client"
import { disableReactDevTools } from "@fvilers/disable-react-devtools"

/**
 * disabling React DevTools when on production
 */
if (process.env.NODE_ENV === "production") {
	disableReactDevTools()
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
