import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthProvider from "./components/Context/AuthContext";
import DataProvider from "./components/Context/DataContext";
import NavProvider from "./components/Context/NavContext";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<React.StrictMode>
		<CssBaseline />
		<AuthProvider>
			<BrowserRouter>
				<NavProvider>
					<DataProvider>
						<App />
					</DataProvider>
				</NavProvider>
			</BrowserRouter>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
