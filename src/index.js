import * as React from "react";
import { render } from "react-dom";
import App from "./Components/App/App.tsx";
import "./Components/App/App.css";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { library } from '@fortawesome/fontawesome-svg-core';

// library.add(fab, fas);

render(
	<App />,
	document.getElementById("app"),
);
