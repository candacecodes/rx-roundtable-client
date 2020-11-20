import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class AddCommentForm extends Component {
	render() {
		return (
			<div>
				<Form>
					<Form.Group controlId="AddCommentForm">
						<Form.Label>Add A Comment</Form.Label>
						<Form.Control as="textarea" rows={3} />
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}

// https://react-bootstrap.github.io/components/forms/
