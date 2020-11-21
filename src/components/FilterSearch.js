import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import RxContainer from "../containers/RxContainer";
import Navbar from "./Navbar";

export default class FilterSearch extends Component {
	componentDidMount() {
		fetch(
			"https://api.fda.gov/drug/label.json?count=openfda.product_type.exact"
		)
			.then((res) => res.json())
			.then((json) => console.log(json));
		//   .then(
		// 	(result) => {
		// 	  this.setState({
		// 		isLoaded: true,
		// 		items: result.items
		// 	  });
		// 	},
		// 	// Note: it's important to handle errors here
		// 	// instead of a catch() block so that we don't swallow
		// 	// exceptions from actual bugs in components.
		// 	(error) => {
		// 	  this.setState({
		// 		isLoaded: true,
		// 		error
		// 	  });
		// 	}
		//   )
	}

	render() {
		return (
			<>
				<Navbar />
				<br />
				<br />
				<div>
					<Form>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Search Medications </Form.Label>
							<Form.Control as="textarea" rows={1} />
							<Button variant="outline-secondary">Search</Button>
						</Form.Group>
					</Form>
					<RxContainer />
				</div>
			</>
		);
	}
}
{
	/* <Form.Group controlId="exampleForm.ControlSelect2">
<Form.Label>Example multiple select</Form.Label>
<Form.Control as="select" multiple>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
</Form.Control>
</Form.Group> 

For multiple selects */
}
