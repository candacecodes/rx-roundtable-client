import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

export default function Home() {
	return (
		<div>
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
					<NavLink className="loginButton" to="/login">
						{" "}
						Login{" "}
					</NavLink>
					<NavLink className="loginButton" to="/signup">
						{" "}
						Sign Up{" "}
					</NavLink>
				</Container>
			</Jumbotron>
		</div>
	);
}
