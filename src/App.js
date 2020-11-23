import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/home/Login";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Comment from "./components/AddCommentForm";
import RxSingle from "./components/RxSingle";
import FilterSearch from "./components/FilterSearch";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./components/Profile";

class App extends Component {
	state = {
		user: "",
		token: "",
	};

	renderForm = (routerProps) => {
		console.log(routerProps);
		if (routerProps.location.pathname === "/login") {
			return <Login name="Login" handleSubmit={this.handleLogin} />;
		} else if (routerProps.location.pathname === "/signup") {
			return <Login name="Signup" handleSubmit={this.handleSignup} />;
		}
	};

	//auth
	handleLogin = (info) => {
		console.log("login");
		this.handleAuthFetch(info, "http://localhost:3000/login");
	};

	handleSignup = (info) => {
		console.log("sign up");
		this.handleAuthFetch(info, "http://localhost:3000/users");
	};

	handleAuthFetch = (info, request) => {
		fetch(request, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: info.username,
				password: info.password,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				this.setState({ user: data.user, token: data.token }, () => {
					console.log(this.state);
					this.props.history.push("/home");
				});
			});
	};

	render() {
		return (
			<Router>
				<div className="App">
					{/* <header className="App-header">
				<Navbar />
				<Home />
				<RxSingle />
				<FilterSearch />
				<Login />
			</header> */}

					<main id="page-wrap">
						<Route exact path="" component={Home} />
						<Route exact path="/login" component={this.renderForm} />
						<Route path="/signup" exact component={this.renderForm} />
						<Route exact path="/rx" component={FilterSearch} />
						<Route exact path="/profile" component={Profile} />
					</main>
				</div>
			</Router>
		);
	}
}

export default App;
