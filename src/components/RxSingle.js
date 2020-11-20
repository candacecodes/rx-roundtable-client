import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Comment from "./AddCommentForm";
export default class RxSingle extends Component {
	render() {
		return (
			<div>
				<Card className="text-center">
					<Card.Header>Rx Name</Card.Header>
					<Card.Body>
						<Card.Title>Generic Name</Card.Title>
						<Card.Text>
							With supporting text below as a natural lead-in to additional
							content.
						</Card.Text>
						<Button variant="secondary">Save or Add Comment</Button>
					</Card.Body>
					<Card.Footer className="text-muted">Rx Roundtable</Card.Footer>
				</Card>
				{/* adds spacing */}
				&nbsp;&nbsp;
				<Comment />
			</div>
		);
	}
}
