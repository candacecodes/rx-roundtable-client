import React, { Component } from "react";
import "./App.css";
import Login from "./components/home/Login";
import Home from "./components/home/Home";
import Welcome from "./components/home/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterSearch from "./components/FilterSearch";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Profile from "./components/Profile";

class App extends Component {
	state = {
		user: "",
	};

	handleHome = () => <Welcome username={this.state.user.username} />;

	renderForm = (routerProps) => {
		console.log(routerProps);
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
				console.log(data);
				this.setState({ user: data }, () => {
					console.log(data);
					history.push("/profile");
				});
			});
	};

	render() {
		return (
			<Router>
				<div className="App">
					<main id="page-wrap">
						<Route exact path="/" component={this.handleHome} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/login" component={this.renderForm} />
						{/* if user in state redirect to home  */}
						<Route path="/signup" exact component={this.renderForm} />
						<Route exact path="/rx" component={FilterSearch} />
						<Route
							exact
							path="/profile"
							component={Profile}
							user={this.state.user}
						/>
					</main>
				</div>
			</Router>
		);
	}
}

export default App;
