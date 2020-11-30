import React, { Component } from "react";
import SavedPrescriptionSingle from "../components/SavedPrescriptionSingle";

export default class SavedPrescriptionsContainer extends Component {
	state = {
		rxes: [],
	};
	// mapRx = () => {
	// 	// map through each element in the array
	// 	// display an individual div for each prescription
	// 	// i think it's rxUserSingle
	// 	console.log(this.props.rxes);
	// 	this.props.rxes.map((rx) => <SavedPrescriptionSingle rx={rx} />);
	// };

	render() {
		return (
			<>
				<div>
					Saved Prescriptions
					<br />{" "}
					{this.props.rxes.map((rx) => (
						<SavedPrescriptionSingle rx={rx} />
					))}
				</div>
			</>
		);
	}
}
