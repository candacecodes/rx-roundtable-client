import React, { Component } from "react";

export default class RxContainer extends Component {
	// renderResults = () => {
	// 	return this.props.rxs.map((rx) => {
	// 		return (
	// 			<div>
	// 				<span data-toggle="collapse" data-target={rx.id}>
	// 					<div className="row">
	// 						<div className="item-header">{rx.name}</div>
	// 					</div>
	// 				</span>
	// 				<div id={rx.id} className="collapse">
	// 					<RxInfo key={rx.id} rx={rx} saveRx={this.props.saveRx} />
	// 				</div>
	// 			</div>
	// 		);
	// 	});
	// };

	// renderResults = () => {
	// 	<div>{this.props.result["results"]["0"]["patient"]["drug"]["0"]}</div>;
	// };

	// search = () => {
	// 	console.log(this.props.result);
	// };
	render() {
		console.log(this.props.result);
		// console.log(this.state);
		// map through and render

		return (
			<div>
				<div className="header">Search Results</div>
				{/* <div>{this.props}</div> */}
			</div>
		);
	}
}
