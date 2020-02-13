import React, {
	useState,
	useEffect,
	ReactElement,
} from "react";
import { HelloFunctionComponent } from "../Hello/Hello";
import { Counter } from "../Counter/Counter";
import TimeCounter from "../TimeCounter/TimeCounter";

// import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
// import { IconLookup, IconDefinition, findIconDefinition, config} from '@fortawesome/fontawesome-svg-core';

// config.observeMutations = true;


// const checkedLookup: IconLookup = { prefix: 'fas', iconName: 'check-square' }
// const checkedIconDefinition: IconDefinition = findIconDefinition(checkedLookup);

// const squareLookup: IconLookup = { prefix: 'fas', iconName: "square" };
// const squareIconDefinition: IconDefinition = findIconDefinition(squareLookup);

const App = (): ReactElement => {
	// let iconChange = squareIconDefinition;
	// let iconChange = 'square';

	// useEffect( () => {
	// 	// iconChange = checked ? checkedIconDefinition : squareIconDefinition;
	// 	iconChange = checked ? 'check-square' : 'square';
	// }, [checked] );

	const style = {
		cursor: "pointer"
	};

	return (
		<div className="App">
			<h1> Hello React Application </h1>
			{/* <FontAwesomeIcon icon = { checkedIconDefinition } />
			<FontAwesomeIcon onClick = {handleCheck} style = {style} icon = {iconChange} />
			<FontAwesomeIcon icon = { squareIconDefinition } /> */}
			<HelloFunctionComponent />
			<Counter>Click Me!</Counter>
			<TimeCounter />
		</div>
	)
}

export default App;
