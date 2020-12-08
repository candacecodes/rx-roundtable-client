import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class AddComment extends Component {
	state = {
		input: "",
	};

	handleChange = (e) => {
		this.setState({ input: e.target.value });
		console.log(this.state);
	};

	handleForm = () => {
		// console.log("handle form", this.state.input);
		// pass down to addComment function
		this.props.addComment(this.state.input);
		this.refs.form.value = "";
	};
	render() {
		console.log("Add Comment Form");
		return (
			<div>
				{" "}
				<Form.Group>
					<Form.Control
						onChange={this.handleChange}
						size="sm"
						type="text"
						placeholder="Add comment here"
						ref="form"
					/>
					<Button
						onClick={this.handleForm}
						variant="outline-info"
						type="submit"
						size="sm"
					>
						Submit
					</Button>
				</Form.Group>
			</div>
		);
	}
}
