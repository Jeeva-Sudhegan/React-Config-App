import axios from "axios";
import {
	useEffect,
	useState,
} from "react";

export const useFetch = ({ url }) => {
	let data;
	useEffect(() => {
		data = axios
			.get(url)
			.then(
				result => result.data,
			);
	}, []);
	return data;
};
