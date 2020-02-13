import { useState } from "react";

export const useCounter = (
	initialCount: number = 0,
) => {
	const [count, setCount] = useState<
		number
	>(initialCount);
	const handleClick = (): void => {
		setCount(
			(count: number) =>
				count + 1,
		);
	};
	return { count, handleClick };
};
