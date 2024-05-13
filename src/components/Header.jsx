import {useTheme} from "../context/ThemeContext.jsx";

const Header = () => {
	return (
		<header className={`flex justify-between items-center`}>
			<h1 className={`text-3xl`}>calc</h1>
			<ThemeSwitcher />
		</header>
	)
}

const ThemeSwitcher = () => {
	const {theme, setTheme} = useTheme();

	return(
		<div className={`flex gap-4 items-end`}>
			<p className={`uppercase text-sm`}>theme</p>

			<div className={`flex flex-col items-center`}>
				<div className={`flex gap-4 text-sm`}>
					<p>1</p>
					<p>2</p>
					<p>3</p>
				</div>

				<div className={`toggle-bg-${theme} rounded-full w-[70px] p-1`}>
					<div
						className={`h-[15px] aspect-square toggler-bg-${theme} rounded-full cursor-pointer position-${theme} transition-transform`}
						onClick={() => theme === 2 ? setTheme(0) : setTheme(prev => prev + 1)}
					></div>
				</div>
			</div>
		</div>
	)
}

export default Header;