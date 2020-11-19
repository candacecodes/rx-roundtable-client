import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

export default function Home() {
	return (
		<div>
			<Jumbotron fluid className="banner">
				<Container>
					<h1>Rx Roundtable</h1>
					<p>
						<b>Rx: A Doctor's Prescription</b>
						<br />
						<br />
						<i>
							The "R" in "Rx" stands for the Latin word recipe, meaning "take,"
							and the first doctor to use "Rx" used it as a verb with the same
							meaning, "Rx two aspirin" being equivalent to today's "Take two
							aspirin."
						</i>
					</p>
				</Container>
			</Jumbotron>
		</div>
	);
}
