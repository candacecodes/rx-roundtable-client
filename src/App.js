import logo from "./logo.svg";
import "./App.css";
import Login from "./components/home/Login";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Comment from "./components/AddCommentForm";
import RxSingle from "./components/RxSingle";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* <Navbar />
				<Home /> */}
				<RxSingle />
			</header>
		</div>
	);
}

export default App;
