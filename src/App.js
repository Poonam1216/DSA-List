import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import DSASheet from "./DSA/DsaSheet.jsx";
import { useState } from "react";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<Router>
				<Routes>
					<Route path="/" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route
						path="/home"
						element={
							loggedIn ? (
								<DSASheet />
							) : (
								<Login setLoggedIn={setLoggedIn} />
							)
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
