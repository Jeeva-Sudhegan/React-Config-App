import React, {
	useEffect,
	ReactElement,
	FC,
} from "react";
import { useCounter } from "../../CustomHooks/useCounter";

// FC is for including children property in the props
export const Counter:FC<{}> = props => {
	const { count, handleClick } = useCounter(0);
	const { children } = props;
	useEffect(() => {
		console.log(
			"Count is incremented",
		);
		return () => {};
	}, [count]);
	return (
		<>
			<h2>{count}</h2>
			<button
				type="submit"
				onClick={handleClick}>
				{children}
			</button>
		</>
	);
};
