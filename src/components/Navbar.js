import React, { Component } from "react";

export default class navbar extends Component {
	render() {
		return (
			<div>
				<div class="topnav">
					<a class="active" href="/home">
						Home
					</a>
					<a href="/profile">Profile</a>
					<a href="/rx">Search Rx</a>
				</div>
			</div>
		);
	}
}
