import logo from "./logo.svg";
import "./App.css";
import Login from "./components/home/Login";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Comment from "./components/AddCommentForm";
import RxSingle from "./components/RxSingle";
import FilterSearch from "./components/FilterSearch";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* <Navbar />
				<Home /> */}
				{/* <RxSingle /> */}
				{/* <FilterSearch /> */}
				<Login />
			</header>
		</div>
	);
}

export default App;
