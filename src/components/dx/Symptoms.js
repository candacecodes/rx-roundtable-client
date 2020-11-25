import React, { useState, Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Symptoms extends Component {
	render() {
		// console.log(this.state);
		return (
			<>
				<br />
				<br />
				<div>
					<Form>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Search Commonly Associated Symptoms </Form.Label>
							<Form.Control
								as="textarea"
								type="text"
								name="search"
								// value={this.state.search}
								// onChange={this.handleChange}
								rows={1}
							/>{" "}
							<br />
							<Button
								// onClick={this.localHandleSearch}
								variant="outline-secondary"
							>
								Add
							</Button>
						</Form.Group>
					</Form>
				</div>
			</>
		);
	}
}
