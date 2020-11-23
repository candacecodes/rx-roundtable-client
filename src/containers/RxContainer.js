import React, { Component } from "react";

export default class RxContainer extends Component {
	// renderConditions = () => {
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
	render() {
		return (
			<div>
				<div className="header">Search Results</div>
				<div>{this.props.result}</div>
			</div>
		);
	}
}
