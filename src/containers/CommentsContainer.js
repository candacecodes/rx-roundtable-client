import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import AddComment from "../components/AddComment";

export default class CommentsContainer extends Component {
	state = {
		addComment: false,
		comments: [],
	};

	handleAddCommentButton = () => {
		this.setState((prevState) => ({
			addComment: !prevState.addComment,
		}));
		console.log(this.state);
	};

	addComment = (input) => {
		this.setState((prevState) => ({
			comments: [...prevState.comments, input],
		}));
		console.log(this.state.comments);
		alert("Comment Added");
	};

	render() {
		return (
			<div>
				<br />
				{/* {this.mapComments} */}
				<Button
					onClick={this.handleAddCommentButton}
					size="sm"
					variant="outline-info"
				>
					Add Comment
				</Button>
				{this.state.addComment ? (
					<AddComment addComment={this.addComment} />
				) : null}
			</div>
		);
	}
}
