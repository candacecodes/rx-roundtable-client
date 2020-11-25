import React, { Component } from "react";

export default class DxContainer extends Component {
	state = {
		search: "",
		result: [],
	};

	// handleChange = (e) => {
	// 	let { name, value } = e.target;
	// 	this.setState({
	// 		[name]: value,
	// 	});
	// };

	// localHandleSearch = (e) => {
	// 	e.preventDefault();
	// 	console.log(this.state);
	// 	// this.props.handleSearch(this.state);
	// };

	renderResults = () => {};

	componentDidMount() {
		fetch(
			`https://sandbox-healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImNhbmRhY2VoY2hvZUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjgyMDciLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIyMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiOTk5OTk5OTk5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiUHJlbWl1bSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMjAtMTEtMjUiLCJpc3MiOiJodHRwczovL3NhbmRib3gtYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTYwNjM0OTkxMywibmJmIjoxNjA2MzQyNzEzfQ.IhFE_XRf9Ntw_bby-6YarCJUG-npTE5k81T6qy5BOFA&format=json&language=en-gb`
		)
			.then((res) => res.json())
			.then((json) =>
				this.setState({
					result: json,
				})
			);
	}

	render() {
		return <div>{this.renderResults}</div>;
	}
}
