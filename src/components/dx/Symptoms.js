import React, { useState, Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Symptoms extends Component {
	render() {
		console.log(this.props.result);
		return <>{this.props.result}</>;
	}
}
