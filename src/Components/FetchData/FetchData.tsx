import React, { ReactElement } from "react";
import { useFetch } from "../../CustomHooks/useFetch";
import { FlightList } from "../FlightList/FlightListComponent";

export const FetchData = (): ReactElement => {
	const { data } = useFetch({
		url:"https://api.spacexdata.com/v3/launches",
	});
	console.log(data);
	return (
		<FlightList flights = { data } />
	);
};
