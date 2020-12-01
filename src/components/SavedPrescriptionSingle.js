import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class SavedPrescriptionSingle extends Component {
	render() {
		return (
			<div>
				<div>
					<h6>{this.props.rx}</h6>
					<Button variant="outline-dark" size="sm">
						Comment
					</Button>{" "}
					<Button variant="outline-dark" size="sm">
						Delete
					</Button>
					<br />
				</div>
			</div>
		);
	}
}
