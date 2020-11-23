import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Home from "./Home";

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
			<>
				<Home />
				<form onSubmit={this.handleSubmit}>
					<h1>{this.props.name}</h1>
					<label htmlFor="username">Username:</label>
					<br />
					<input
						type="text"
						name="username"
						value={this.state.username}
						onChange={this.handleChange}
					/>{" "}
					<br /> <br />
					<label htmlFor="password">Password:</label>
					<br />
					<input
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<br /> <br />
					<input type="submit" value="Submit" />
				</form>
			</>
		);
	}
}
