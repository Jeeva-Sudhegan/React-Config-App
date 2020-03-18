import axios from "axios";
import {
	useEffect,
	useState,
} from "react";

export const useFetch = ({ url }) => {
	const [data, setData] = useState<
		Array<any>
	>([]);
	useEffect(() => {
		axios.get(url).then(result => {
			const resp = result.data;
			setData(prevData => [
				...prevData,
				...resp,
			]);
		});
	}, []);

	const handleData = newData => {
		setData(prevData => [
			...prevData,
			newData,
		]);
	};
	return { data, handleData };
};
