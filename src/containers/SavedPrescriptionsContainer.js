import React, { Component } from "react";
import SavedPrescriptionSingle from "../components/SavedPrescriptionSingle";
import Badge from "react-bootstrap/Badge";

export default class SavedPrescriptionsContainer extends Component {
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
					<br />
					<h4>
						<Badge pill variant="info">
							Prescription List
						</Badge>
					</h4>
					{this.props.rxes.map((rx) => (
						<SavedPrescriptionSingle
							rx={rx}
							key={Math.random()} // to prevent key error in console
							deleteSavedRx={this.props.deleteSavedRx}
							commentSavedRx={this.props.commentSavedRx}
						/>
					))}
				</div>
			</>
		);
	}
}
