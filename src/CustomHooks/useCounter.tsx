import { useState } from "react";

// eslint-disable-next-line import/prefer-default-export
export const useCounter = initialCount => {
	const [count, setCount] = useState(
		initialCount,
	);
	const handleClick = (): void => {
		setCount(
			// eslint-disable-next-line no-shadow
			(count: number) =>
				count + 1,
		);
	};
	return { count, handleClick };
};
