import React, { Component } from "react";

export default class SavedPrescriptionsContainer extends Component {
	render() {
		console.log("Saved Prescriptions Container", this.props.rxes);
		return <div>Saved Prescriptions</div>;
	}
}
