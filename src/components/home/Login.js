import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class login extends Component {
	state = {
		username: "",
		password: "",
	};

	handleChange = (e) => {
		let { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleSubmit(this.state);
	};

	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmit}>
					<h1>{this.props.name}</h1>
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
			</div>
		);
	}
}
