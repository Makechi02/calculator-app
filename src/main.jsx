import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ThemeProvider} from "./context/ThemeContext.jsx";
import {ExpressionProvider} from "./context/ExpressionContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider>
			<ExpressionProvider>
				<App/>
			</ExpressionProvider>
		</ThemeProvider>
	</React.StrictMode>,
)
