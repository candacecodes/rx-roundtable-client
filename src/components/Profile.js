import React, { Component } from "react";
import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";

export default class Profile extends Component {
	state = {
		editable: false,
	};

	render() {
		return (
			<>
				<Navbar />

				<div className="page-content page-container" id="page-content">
					<div className="padding">
						<div className="row container d-flex justify-content-center">
							<div className="col-xl-6 col-md-12">
								<div className="card user-card-full">
									<div className="row m-l-0 m-r-0">
										<div className="col-sm-4 bg-c-lite-green user-profile">
											<div className="card-block text-center text-white">
												<div className="m-b-25">
													{this.props.username}
													{/* <img
													src="https://img.icons8.com/bubbles/100/000000/user.png"
													className="img-radius"
													alt="User-Profile-Image"
												> */}{" "}
												</div>
												<h6 className="f-w-600">Patient Profile</h6>
												<p>Patient Name</p>{" "}
												<i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
											</div>
										</div>
										<div className="col-sm-8">
											<div className="card-block">
												<h6 className="m-b-20 p-b-5 b-b-default f-w-600">
													{this.props.user}
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
												<Button variant="outline-secondary">
													{" "}
													Edit Profile{" "}
												</Button>{" "}
												<Button variant="outline-secondary">
													{" "}
													Delete Profile{" "}
												</Button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
