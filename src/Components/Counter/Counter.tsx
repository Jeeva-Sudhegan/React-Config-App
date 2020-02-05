/* eslint-disable no-unused-vars */
import React, {
	FC,
	useEffect,
} from "react";
import { useCounter } from "../../CustomHooks/useCounter";

// eslint-disable-next-line import/prefer-default-export
export const Counter: FC<{}> = (
	props: any,
) => {
	const {
		count,
		handleClick,
	} = useCounter(0);
	const { children } = props;
	useEffect(() => {
		// eslint-disable-next-line no-console
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
