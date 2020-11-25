import React, { Component } from "react";
import "./App.css";
import Login from "./components/home/Login";
import Logout from "./components/home/Logout";
import Home from "./components/home/Home";
import Welcome from "./components/home/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterSearch from "./components/FilterSearch";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Profile from "./components/Profile";
import ls from "local-storage";
import NavBar from "./components/Navbar";
import DxContainer from "./components/dx/DxContainer";

class App extends Component {
	state = {
		result: [],
		user: { username: "" },
	};

	handleHome = () => <Welcome username={this.state.user.username} />;

	renderForm = (routerProps) => {
		// console.log(routerProps);
		if (routerProps.location.pathname === "/login") {
			return (
				<Login
					name="Login"
					handleSubmit={this.handleLogin}
					{...routerProps} // access to router props
				/>
			);
		} else if (routerProps.location.pathname === "/signup") {
			return (
				<Login
					name="Signup"
					handleSubmit={this.handleSignup}
					// props={this.state.routerProps}
					{...routerProps} // access to router props
				/>
			);
		}
	};

	//auth
	handleLogin = (info, history) => {
		console.log("login");
		this.handleAuthFetch(info, "http://localhost:3000/login", history);
	};

	handleSignup = (info, history) => {
		console.log("sign up");
		this.handleAuthFetch(info, "http://localhost:3000/users", history);
	};

	handleLogout = () => {
		localStorage.removeItem("token");
		this.setState({ user: {} });
	};

	handleDelete = () => {
		console.log("delete");
		// fetch(`http://localhost:3000/users/${this.state.user.id}`, {
		// 	method: "DELETE",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// });
		// this.renderLogout();
	};

	handleEdit = () => {
		console.log("edit");
	};

	renderLogout = () => {
		<Logout />;
	};

	handleAuthFetch = (info, request, history) => {
		fetch(request, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user: {
					username: info.username,
					password: info.password,
				},
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				localStorage.setItem("token", data.token);
				this.setState({ user: data.user }, () => {
					history.push("/profile");
					console.log(this.state);
				});
			});
	};

	handleSearch = (search) => {
		const URL = `https://api.fda.gov/drug/event.json?api_key=erNcZBRL2Jy0yJru61XsO98hXqdGtYKs6QjGJTY8&search=`;
		const response = fetch(`URL${search}`);
		console.log(response);
		const data = response.json();
		console.log(data);
		this.setState({ result: data.results[0] });
		console.log(this.state.result);
	};

	componentDidMount() {
		// holds {jwt, user: {id, username}}

		let token = localStorage.getItem("token");
		if (token) {
			fetch("http://localhost:3000/profile", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then((res) => res.json())
				.then((user) => {
					console.log(user);
					this.setState({ user: user.user });
				});
		}
	}

	render() {
		return (
			<>
				<NavBar handleLogout={this.handleLogout} />
				<Router>
					<div className="App">
						<main id="page-wrap">
							<Route exact path="/" component={this.handleHome} />
							<Route exact path="/home" component={Home} />
							<Route exact path="/login" component={this.renderForm} />
							{/* if user in state redirect to home  */}
							<Route path="/signup" exact component={this.renderForm} />
							<Route
								exact
								path="/rx"
								render={() => (
									<FilterSearch
										handleSearch={this.handleSearch}
										result={this.state.result}
									/>
								)}
							/>
							<Route
								exact
								path="/profile"
								render={() => (
									<Profile
										user={this.state.user}
										handleDelete={this.handleDelete}
										handleEdit={this.handleEdit}
									/>
								)}
							/>
							<Route exact path="/symptoms" render={() => <DxContainer />} />

							<Route exact path="/logout" render={() => <Logout />} />
						</main>
					</div>
				</Router>
			</>
		);
	}
}

export default App;
