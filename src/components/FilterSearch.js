import React, { useState, Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import RxContainer from "../containers/RxContainer";

export default class FilterSearch extends Component {
	state = {
		search: "",
	};

	handleChange = (e) => {
		let { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	localHandleSearch = (e) => {
		e.preventDefault();
		this.props.handleSearch(this.state.search);
	};

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
	// }

	render() {
		// console.log(this.state);
		return (
			<>
				<br />
				<br />
				<div>
					<Form>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Search </Form.Label>
							<Form.Control
								as="textarea"
								type="text"
								name="search"
								value={this.state.search}
								onChange={this.handleChange}
								rows={1}
							/>{" "}
							<br />
							<Button
								onClick={this.localHandleSearch}
								variant="outline-secondary"
							>
								Go
							</Button>
						</Form.Group>
					</Form>
					{this.props.result ? (
						<RxContainer result={this.props.result} />
					) : (
						<div>No Results from Search</div>
					)}
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
