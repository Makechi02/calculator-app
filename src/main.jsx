import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";
import {ThemeProvider} from "./context/ThemeContext.jsx";
import {ExpressionProvider} from "./context/ExpressionContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
			<ThemeProvider>
				<ExpressionProvider>
					<App/>
				</ExpressionProvider>
			</ThemeProvider>
		</DevSupport>
	</React.StrictMode>,
)
