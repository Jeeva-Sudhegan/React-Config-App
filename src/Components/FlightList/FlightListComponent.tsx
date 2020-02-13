import React, { FC, ReactElement } from "react";
import { Flight } from "./FlightComponent";

// since enclosed inside Fragments returning ReactElement
export const FlightList = ({flights}): ReactElement => (
    <>
        { flights.map( flight => <Flight key = {flight.flight_number} flight = {flight} /> ) }
    </>
)

FlightList.defaultProps = {flights: []};