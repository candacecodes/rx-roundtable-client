import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class AddComment extends Component {
	render() {
		console.log("Add Comment Form");
		return (
			<div>
				{" "}
				<Form.Group>
					<Form.Control size="sm" type="text" placeholder="Small text" />
					<Button variant="primary" type="submit" size="sm">
						Submit
					</Button>
				</Form.Group>
			</div>
		);
	}
}
