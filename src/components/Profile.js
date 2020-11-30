import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import RxSingle from "./RxSingle";
import SavedPrescriptionsContainer from "../containers/SavedPrescriptionsContainer";

export default class Profile extends Component {
	state = {
		rxes: [],
	};

	showSavedRx = () => {
		// console.log("saved prescriptions");

		// get rxes from local storage
		const getRxes = localStorage.getItem("rxes");
		// console.log(getRxes);

		// set state of rxes from result
		this.setState({ rxes: getRxes.split(",") });

		//console log to check
		// console.log("saved prescriptions", this.state.rxes);

		// render onto screen
		// return <SavedPrescriptionsContainer rxes={this.state.rxes} />;
		// console.log(this.props);
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
												<h6 className="f-w-600">Patient Profile</h6>
												<p>Patient Name</p> {this.props.user.username}
												<i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
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
												<h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
													Rx
												</h6>
												<div className="row">
													<div className="col-sm-6">
														<p className="m-b-10 f-w-600">Rx 1 </p>
														<h6 className="text-muted f-w-400">
															Rx Information
														</h6>
													</div>
													<div className="col-sm-6">
														<p className="m-b-10 f-w-600">Rx 2</p>
														<h6 className="text-muted f-w-400">
															Rx Information
														</h6>
													</div>
												</div>
												<Button
													onClick={this.props.handleEdit}
													variant="outline-secondary"
												>
													{" "}
													Edit Profile{" "}
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
							<Button onClick={this.showSavedRx}>
								See Saved Prescriptions
							</Button>
							<br />
							{
								this.state.rxes.length > 0 ? (
									<SavedPrescriptionsContainer rxes={this.state.rxes} />
								) : null
								// <Button onClick={this.showSavedRx}>
								// 	See Saved Prescriptions
								// </Button>
								// <Button>No Saved Prescriptions</Button>
							}
						</div>
					</div>
				</div>
			</>
		);
	}
}
