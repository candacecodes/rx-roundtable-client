import React, { Component } from "react";
import "./App.css";
import Login from "./components/home/Login";
import Home from "./components/home/Home";
import Welcome from "./components/home/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterSearch from "./components/FilterSearch";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Profile from "./components/Profile";
import ls from "local-storage";

class App extends Component {
	state = {
		id: "",
		username: "",
		result: [],
		token: "",
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

	handlePersist = (data) => {
		console.log(data);
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
				this.handlePersist(data);
				this.setState(
					{ username: data.user.username, id: data.user.id, token: data.token },
					() => {
						history.push("/profile");
						console.log(this.state);
					}
				);
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
							render={() => <Profile user={this.state.username} />}
							// component={Profile}
							// user={this.state.user}
						/>
					</main>
				</div>
			</Router>
		);
	}
}

export default App;
