import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import CommentsContainer from "../containers/CommentsContainer";
export default class SavedPrescriptionSingle extends Component {
	state = {
		seeComment: false,
	};

	handleDelete = () => {
		this.props.deleteSavedRx(this.props.rx);
		// console.log(this.props.rx);
	};

	handleSeeComment = () => {
		this.setState((prevState) => ({
			seeComment: !prevState.seeComment,
		}));
		console.log(this.state);
	};
	render() {
		return (
			<div>
				<div>
					<h6>{this.props.rx}</h6>
					<Button
						onClick={this.handleSeeComment}
						variant="outline-dark"
						size="sm"
					>
						See Comments
					</Button>{" "}
					{this.state.seeComment ? <CommentsContainer /> : null}
					<Button onClick={this.handleDelete} variant="outline-dark" size="sm">
						Delete Rx
					</Button>
					<br />
				</div>
			</div>
		);
	}
}
