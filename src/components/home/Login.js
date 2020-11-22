import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class login extends Component {
	state = {
		// error: false,
		inputs: {
			username: "",
			password: "",
		},
	};

	handleChange = (e) => {
		const newInputs = { ...this.state.inputs, [e.target.name]: e.target.value };
		this.setState({
			inputs: newInputs,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<div>
				<Form>
					Sign In
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Username</Form.Label>
						<Form.Control type="name" placeholder="Your Username" />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Button variant="secondary" type="submit">
						Submit
					</Button>
				</Form>
				&nbsp;&nbsp; &nbsp;&nbsp;
				<Form>
					{" "}
					Sign Up
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Username</Form.Label>
						<Form.Control type="name" placeholder="Create a username" />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Button variant="secondary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}
