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

function App() {
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
					<Route exact path="/home" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/rx" component={FilterSearch} />
					<Route exact path="/profile" component={Profile} />
				</main>
			</div>
		</Router>
	);
}

export default App;
