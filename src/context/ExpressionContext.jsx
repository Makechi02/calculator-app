import {createContext, useContext, useState} from "react";

const ExpressionContext = createContext({});

export const ExpressionProvider = ({children}) => {

	const [expression, setExpression] = useState("");

	const calculate = () => {
		const results = eval(expression.replace("x", "*"));
		setExpression(results);
	}

	const reset = () => {
		setExpression("");
	}

	const onDelete = () => {
		const newExpression = expression.slice(0, expression.length - 1);
		setExpression(newExpression);
	}

	return (
		<ExpressionContext.Provider value={{expression, setExpression, calculate, reset, onDelete}}>
			{children}
		</ExpressionContext.Provider>
	)
}

export const useExpression = () => useContext(ExpressionContext);