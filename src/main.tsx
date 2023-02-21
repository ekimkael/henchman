import React from "react"
import * as ReactDOM from "react-dom/client"
import { disableReactDevTools } from "@fvilers/disable-react-devtools"

import App from "./App"
import { AuthProvider } from "./modules/auth/context/AuthProvider"

// disabling React DevTools when on production
if (process.env.NODE_ENV === "production") {
	disableReactDevTools()
}

// render app
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<AuthProvider>
			<App />
		</AuthProvider>
	</React.StrictMode>
)
