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
	return (
		<>
			<h2 data-testid = "count">{count}</h2>
			<button
				data-testid = "count-button"
				type="submit"
				onClick={handleClick}>
				{children}
			</button>
		</>
	);
};
