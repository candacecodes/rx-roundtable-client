import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import AddComment from "../components/AddComment";

export default class CommentsContainer extends Component {
	state = {
		addComment: false,
	};

	handleAddComment = () => {
		this.setState((prevState) => ({
			addComment: !prevState.addComment,
		}));
		console.log(this.state);
	};

	render() {
		return (
			<div>
				<br />
				<Button
					onClick={this.handleAddComment}
					size="sm"
					variant="outline-info"
				>
					Add Comment
				</Button>
				{this.state.addComment ? <AddComment /> : null}
			</div>
		);
	}
}
