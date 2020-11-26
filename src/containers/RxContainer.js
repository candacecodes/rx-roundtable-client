import React, { Component } from "react";
import RxSingle from "../components/RxSingle";

export default class RxContainer extends Component {
	state = {
		// set new state for side effects, specific into object
		// results show object with more than just side effects
		effects: {},
	};

	// mapResults = () => {
	// 	console.log(
	// 		this.props.result.patient.reaction.map((rxn) => console.log(rxn))
	// 	);
	// 	// this.props.result.map((info) => console.log(info));
	// };
	render() {
		// console.log(this.props.result);
		// console.log(this.props.search);
		// console.log(this.state);
		// map through and render

		return (
			<>
				<div>
					<div className="header">Search results for {this.props.search}</div>
					<div>
						<>{this.props.result.patient ? <RxSingle /> : "no result"} </>{" "}
					</div>
					{/* {this.mapResults()} */}
				</div>
			</>
		);
	}
}
