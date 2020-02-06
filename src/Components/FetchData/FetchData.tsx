// eslint-disable-next-line no-unused-vars
import React, { FC } from "react";
import { useFetch } from "../../CustomHooks/useFetch";
import { FlightList } from "../FlightList/FlightListComponent";

// eslint-disable-next-line import/prefer-default-export
export const FetchData: FC<{}> = () => {
	const { data } = useFetch({
		url:"https://api.spacexdata.com/v3/launches",
	});
	// eslint-disable-next-line no-console
	console.log(data);
	return (
		<FlightList flights = { data } />
	);
};
