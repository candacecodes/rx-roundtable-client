import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Comment from "./AddCommentForm";
export default class RxSingle extends Component {
	// renderResults = () => {
	// 	console.log(this.props);
	// };
	render() {
		console.log(this.props.result.reaction);
		return (
			<>
				<div>
					<Card className="text-center">
						<Card.Header>Rx Name</Card.Header>
						<Card.Body>
							<Card.Title>Generic Name</Card.Title>
							<Card.Text>{this.props.result.drug["1"].reaction}</Card.Text>
							<Button variant="secondary">Save to Profile</Button>
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
