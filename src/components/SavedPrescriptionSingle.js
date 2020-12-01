import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class SavedPrescriptionSingle extends Component {
	handleDelete = () => {
		this.props.deleteSavedRx();
	};

	handleComment = () => {
		this.props.commentSavedRx();
	};
	render() {
		return (
			<div>
				<div>
					<h6>{this.props.rx}</h6>
					<Button onClick={this.handleComment} variant="outline-dark" size="sm">
						Comment
					</Button>{" "}
					<Button onClick={this.handleDelete} variant="outline-dark" size="sm">
						Delete
					</Button>
					<br />
				</div>
			</div>
		);
	}
}
