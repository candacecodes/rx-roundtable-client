import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import RxSingle from "./RxSingle";
import SavedPrescriptionsContainer from "../containers/SavedPrescriptionsContainer";
import EditableLabel from "react-inline-editing";

export default class Profile extends Component {
	constructor(props) {
		super(props);

		this._handleFocus = this._handleFocus.bind(this);
		this._handleFocusOut = this._handleFocusOut.bind(this);
	}

	_handleFocus(text) {
		console.log("Focused with text: " + text);
	}

	_handleFocusOut(text) {
		console.log("Left editor with text: " + text);
		this.setState((prevState) => ({
			age: text,
		}));
	}

	state = {
		rxes: [],
		age: "",
		note: "",
	};

	// handles state for age change
	handleAgeChange = (age) => {
		console.log(age);
		this.setState((prevState) => ({
			age: age,
		}));
	};

	// handles state for note change
	handleNoteChange = (note) => {
		console.log(note);
		this.setState((prevState) => ({
			note: note,
		}));
	};

	// handles save change
	handleEditSubmit = () => {
		// get token
		var existing = localStorage.getItem("token");
		var token = existing;

		console.log(this.props.user.id);
		console.log("age", this.state.age);
		console.log("note", this.state.note);

		let data = {
			age: this.state.age,
			note: this.state.note,
		};

		fetch(`http://localhost:3000/users/${this.props.user.id}`, {
			method: "PATCH",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => res.json())
			.then((json) => console.log(json));
	};

	showSavedRx = () => {
		// console.log("saved prescriptions");

		// get rxes from local storage
		const getRxes = localStorage.getItem("rxes");
		// console.log(getRxes);

		// set state of rxes from result
		this.setState({ rxes: getRxes.split(",") });
	};

	commentSavedRx = () => {
		console.log("comment function for savedRx");
		return <div>Comment</div>;
	};

	deleteSavedRx = (rx) => {
		console.log("delete function savedRx", rx);
		// console.log(this.state);
		console.log("delete", rx);
		// update state to hold rxes
		var existing = localStorage.getItem("rxes");
		existing = existing ? existing.split(",") : [];
		// this.setState({ rxes: existing });

		this.setState({
			rxes: this.state.rxes.filter((eachrx) => eachrx !== rx),
		});

		console.log(this.state.rxes);
		// existing.push(`${rx}`);
		// localStorage.setItem("rxes", existing.toString());
	};

	render() {
		// user information
		// console.log(this.props.user);

		return (
			<>
				<div className="page-content page-container" id="page-content">
					<div className="padding">
						<div className="row container d-flex justify-content-center">
							<div className="col-xl-6 col-md-12">
								<div className="card user-card-full">
									<div className="row m-l-0 m-r-0">
										<div className="col-sm-4 bg-c-lite-green user-profile">
											<div className="card-block text-center text-white">
												<div className="m-b-25">
													{/* <img
													src="https://img.icons8.com/bubbles/100/000000/user.png"
													className="img-radius"
													alt="User-Profile-Image"
												> */}{" "}
												</div>
												<h6 className="f-w-600">User Profile Card</h6>
												<p>Username: {this.props.user.username} </p>
											</div>
										</div>
										<div className="col-sm-8">
											<div className="card-block">
												<h6 className="m-b-20 p-b-5 b-b-default f-w-600">
													{/* {this.props.user} */}
												</h6>
												<div className="row">
													{/* <div className="col-sm-6">
														<p className="m-b-10 f-w-600">Email</p>
														<h6 className="text-muted f-w-400">
															whatever@gmail.com
														</h6>
													</div> */}
													{/* <div className="col-sm-6">
														<p className="m-b-10 f-w-600">Phone</p>
														<h6 className="text-muted f-w-400">98979989898</h6>
													</div> */}
												</div>
												<h5>User Information</h5>
												<div className="row">
													<div className="col-sm-6">
														<p className="m-b-10 f-w-600">Age </p>
														<EditableLabel
															// onChange={this.handleAgeChange}
															text={
																this.props.age
																	? this.props.age
																	: "Click to Update Age"
															}
															labelClassName="myLabelClass"
															inputClassName="myInputClass"
															inputWidth="100px"
															inputHeight="25px"
															inputMaxLength="50"
															// labelFontWeight="bold"
															// inputFontWeight="bold"
															onFocus={this._handleFocus}
															onFocusOut={this.handleAgeChange}
														/>
													</div>
													<div className="col-sm-6">
														<p className="m-b-10 f-w-600">Notes</p>
														<EditableLabel
															onChange={this.handleNoteChange}
															text="Click to Update Note"
															labelClassName="myLabelClass"
															inputClassName="myInputClass"
															inputWidth="100px"
															inputHeight="25px"
															inputMaxLength="150"
															// labelFontWeight="bold"
															// inputFontWeight="bold"
															onFocus={this._handleFocus}
															onFocusOut={this.handleNoteChange}
														/>{" "}
													</div>
												</div>
												<Button
													onClick={this.handleEditSubmit}
													variant="outline-secondary"
												>
													{" "}
													Save Changes{" "}
												</Button>{" "}
												<Button
													onClick={this.props.handleDelete}
													variant="outline-secondary"
												>
													{" "}
													Delete Profile{" "}
												</Button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<Button variant="outline-success" onClick={this.showSavedRx}>
							See Saved Prescriptions
						</Button>
						{
							this.state.rxes.length > 0 ? (
								<SavedPrescriptionsContainer
									rxes={this.state.rxes}
									deleteSavedRx={this.deleteSavedRx}
									commentSavedRx={this.commentSavedRx}
								/>
							) : null
							// <Button onClick={this.showSavedRx}>
							// 	See Saved Prescriptions
							// </Button>
							// <Button>No Saved Prescriptions</Button>
						}
					</div>
				</div>
			</>
		);
	}
}
