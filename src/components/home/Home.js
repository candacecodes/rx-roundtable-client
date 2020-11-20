import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Navbar from "../Navbar";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron fluid="true" className="banner">
				<Container>
					<h1>Rx Roundtable</h1>
					<p>
						<i>
							Rx: A Doctor's Prescription
							<br />
							Roundtable: Discussion to help guide with clear, specific points
							and what you would like them to achieve.
						</i>
					</p>
					<Button variant="outline-secondary">Login</Button>
					<Button variant="outline-secondary">Sign Up</Button>
				</Container>
			</Jumbotron>
		</div>
	);
}
