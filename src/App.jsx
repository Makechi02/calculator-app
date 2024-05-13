import {Attribution, Header, Keypad, Screen} from "./components";
import {useTheme} from "./context/ThemeContext.jsx";

function App() {

	const {theme} = useTheme();

	return (
		<div className={`flex flex-col items-center justify-center h-svh gap-4 p-4 main-bg-${theme}`}>
			<main className={`max-w-md w-full flex flex-col gap-4`}>
				<Header />
				<Screen />
				<Keypad />
			</main>
			<Attribution/>
		</div>
	)
}

export default App
