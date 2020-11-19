import logo from "./logo.svg";
import "./App.css";
import Login from "./components/home/Login";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Navbar />
				<Home />
			</header>
		</div>
	);
}

export default App;
