import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Comment from "./AddCommentForm";
export default class RxSingle extends Component {
	handleSaveUserRx = () => {
		console.log(this.props.result.reaction["0"].reactionmeddrapt);
	};
	render() {
		// console.log(this.props.result);
		return (
			<>
				<div>
					<Card className="text-center">
						<Card.Header>Rx Name</Card.Header>
						<Card.Body>
							<Card.Title>Side Effect</Card.Title>
							<Card.Text>
								{this.props.result.reaction["0"].reactionmeddrapt}
							</Card.Text>
							<Button onClick={this.handleSaveUserRx} variant="secondary">
								Save to Profile
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
