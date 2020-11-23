import React from "react";
import Home from "./Home";

const Welcome = (props) => {
	console.log(props);
	return (
		<div className="item">
			<h1> Welcome {props.username} </h1>
		</div>
	);
};
export default Welcome;
