import {
	renderHook,
	act,
	cleanup,
} from "@testing-library/react-hooks";
import { useCounter } from "../CustomHooks/useCounter";

describe("useCounter custom hooks", () => {
	afterEach(() => cleanup());

	test("returns initial value", () => {
		const {
			result,
		} = renderHook(() =>
			useCounter(),
		);
		expect(
			result.current.count,
		).toBe(0);
		act(() => {
			result.current.handleClick();
		});
		expect(
			result.current.count,
		).toBe(1);
	});

	test("set initial value as passed value", () => {
		const {
			result,
		} = renderHook(() =>
			useCounter(5),
		);
		expect(
			result.current.count,
		).toBe(5);
		act(() => {
			result.current.handleClick();
		});
		expect(
			result.current.count,
		).toBe(6);
	});
});
