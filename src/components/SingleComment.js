import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class SingleComment extends Component {
	render() {
		return (
			<div>
				{this.props.comment} <br />
				<Button variant="outline-dark" size="sm">
					Delete Comment
				</Button>
				<br />
				<br />
			</div>
		);
	}
}
