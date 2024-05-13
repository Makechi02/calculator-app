import {useTheme} from "../context/ThemeContext.jsx";
import {useExpression} from "../context/ExpressionContext.jsx";

const Screen = () => {

	const {expression} = useExpression();

	const {theme} = useTheme();

	return (
		<div className={`h-[100px] rounded-lg screen-bg-${theme} text-right flex items-center justify-end p-8 overflow-x-hidden overflow-y-hidden`}>
			<p className={`text-4xl`}>{expression}</p>
		</div>
	)
}

export default Screen;