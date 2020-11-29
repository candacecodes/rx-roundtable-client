import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Comment from "./AddCommentForm";
export default class RxSingle extends Component {
	// mapped Rx from Profile container previously

	render() {
		// console.log(this.props.result);
		return (
			<>
				<div>
					<Card className="text-center">
						<Card.Header>{this.props.search}</Card.Header>
						<Card.Body>
							<Card.Title>Rx Name</Card.Title>
							<Card.Text>{/* Rx Name  */}</Card.Text>
							<Button onClick={this.handleDeleteUserRx} variant="secondary">
								Add Comment
							</Button>

							<Button onClick={this.handleDeleteUserRx} variant="secondary">
								Delete from Profile
							</Button>
						</Card.Body>
						{/* <Card.Footer className="text-muted">Rx Roundtable</Card.Footer> */}
					</Card>
					{/* adds spacing */}
					&nbsp;&nbsp;
					{/* <Comment /> */}
				</div>
			</>
		);
	}
}
