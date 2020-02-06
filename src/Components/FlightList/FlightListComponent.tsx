import React, { FC } from "react";
import { Flight } from "./FlightComponent";

export const FlightList = ({flights}) => (
    <>
        { flights.map( (flight: any) => <Flight key = {flight.flight_number} flight = {flight} /> ) }
    </>
)

FlightList.defaultProps = {flights: []};