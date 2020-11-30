import React, { Component } from "react";

export default class SavedPrescriptionsContainer extends Component {
	state = {
		rxes: [],
	};
	mapRx = () => {
		// map through each element in the array
		// display an individual div for each prescription
		// i think it's rxUserSingle

		// problem: trying to map through rxes but error saying this.props.rxes.map is not a function
		// is this because it's not in an array? (not sure)
		// do i need to make this into an array?
		// this.props.rxes.map((rx) => console.log(rx));
		this.props.rxes.map((rx) => console.log(rx));
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
