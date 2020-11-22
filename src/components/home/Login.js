import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class login extends Component {
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
