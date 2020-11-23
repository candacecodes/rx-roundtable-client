import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/home/Login";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Welcome from "./components/home/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import Comment from "./components/AddCommentForm";
import RxSingle from "./components/RxSingle";
import FilterSearch from "./components/FilterSearch";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Profile from "./components/Profile";

class App extends Component {
	state = {
		user: "",
		token: "",
	};

	handleHome = () => <Welcome username={this.state.user.username} />;

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
				user: {
					username: info.username,
					password: info.password,
				},
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				this.setState({ user: data, token: data.token }, () => {
					console.log(this.state);
					console.log(this.props.history);
					this.props.history.push("/home");
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
						<Route exact path="/profile" component={Profile} />
					</main>
				</div>
			</Router>
		);
	}
}

export default App;
