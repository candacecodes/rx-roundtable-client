import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class SavedPrescriptionSingle extends Component {
	render() {
		return (
			<div>
				<h5>{this.props.rx}</h5>
				<Button variant="outline-dark">Delete</Button>
				<br />
			</div>
		);
	}
}
