import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class SingleComment extends Component {
	deleteComment = () => {
		// console.log("delete");
		this.props.deleteComment(this.props.comment);
	};
	render() {
		return (
			<div>
				{this.props.comment} <br />
				<Button onClick={this.deleteComment} variant="outline-dark" size="sm">
					Delete Comment
				</Button>
				<br />
				<br />
			</div>
		);
	}
}
