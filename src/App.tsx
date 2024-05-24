import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Login from "./screens/Login/Login";
import "./styles/App.css";
import NotFound from "./screens/NotFound/NotFound";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
