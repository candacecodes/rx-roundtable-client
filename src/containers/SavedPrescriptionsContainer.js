import React, { Component } from "react";

export default class SavedPrescriptionsContainer extends Component {
	state = {
		rxes: [],
	};
	mapRx = () => {
		console.log(this.props.rxes);
		// return console.log(this.props.rxes);
		// map through array
		// return this.props.rxes.map((rx) => {
		// 	console.log("test");
		// });
	};

	render() {
		return (
			<>
				<div>
					Saved Prescriptions
					<br /> {this.mapRx()}
				</div>
			</>
		);
	}
}
