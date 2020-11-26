import React, { Component } from "react";
import RxSingle from "../components/RxSingle";

export default class RxContainer extends Component {
	mapResults = () => {
		// console.log(this.props.result);
		// this.props.result.map((info) => console.log(info));
	};
	render() {
		// console.log(this.props.result);
		// console.log(this.props.search);
		// console.log(this.state);
		// map through and render

		return (
			<div>
				<div className="header">Search results for {this.props.search}</div>
				{console.log(this.props.result.patient.reaction)}
				{/* {this.mapResults} */}
			</div>
		);
	}
}
