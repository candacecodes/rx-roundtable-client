import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import AddComment from "../components/AddComment";
import SingleComment from "../components/SingleComment";

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

	mapComments = () => {
		this.state.comments.map((comment) => <SingleComment comment={comment} />);
	};

	deleteComment = (comment) => {
		console.log("delete comment");
		this.setState({
			comments: this.state.comments.filter(
				(eachcomment) => eachcomment !== comment
			),
		});
	};

	render() {
		return (
			<div>
				<br />
				{this.state.comments.map((comment) => (
					<SingleComment
						key={comment}
						comment={comment}
						deleteComment={this.deleteComment}
					/>
				))}

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
