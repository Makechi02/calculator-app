import {useTheme} from "../context/ThemeContext.jsx";
import {useExpression} from "../context/ExpressionContext.jsx";

const Keypad = () => {

	const {theme} = useTheme();
	const {reset, onDelete} = useExpression();

	return (
		<div className={`grid grid-cols-4 gap-4 rounded-lg p-4 toggle-bg-${theme}`}>
			<KeypadButton>7</KeypadButton>
			<KeypadButton>8</KeypadButton>
			<KeypadButton>9</KeypadButton>
			<ActionButton text={`del`} onBtnClick={onDelete} />

			<KeypadButton>4</KeypadButton>
			<KeypadButton>5</KeypadButton>
			<KeypadButton>6</KeypadButton>
			<KeypadButton>+</KeypadButton>

			<KeypadButton>1</KeypadButton>
			<KeypadButton>2</KeypadButton>
			<KeypadButton>3</KeypadButton>
			<KeypadButton>-</KeypadButton>

			<KeypadButton>.</KeypadButton>
			<KeypadButton>0</KeypadButton>
			<KeypadButton>/</KeypadButton>
			<KeypadButton>x</KeypadButton>

			<ActionButton text={`reset`} onBtnClick={reset} />
			<EqualsButton/>
		</div>
	)
}

const KeypadButton = ({children}) => {
	const {theme} = useTheme();
	const {setExpression} = useExpression();

	const onBtnClick = (e) => {
		setExpression(prev => {
			const exp = e.target.textContent.trim();
			console.log(prev + exp);
			return prev + exp;
		});
	}

	return (
		<button className={`btn-${theme}`} onClick={onBtnClick}> {children}</button>
	)
}

const ActionButton = ({text, onBtnClick}) => {
	const {theme} = useTheme();

	return (
		<button
			className={`${text === 'reset' && 'col-span-2'} uppercase action-btn-${theme}`}
			onClick={onBtnClick}
		>
			{text}
		</button>
	)
}

const EqualsButton = () => {
	const {theme} = useTheme();
	const {calculate} = useExpression();

	return (
		<button className={`col-span-2 equals-btn-${theme}`} onClick={calculate}>=</button>
	)
}

export default Keypad;