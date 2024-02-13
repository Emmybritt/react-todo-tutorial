import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import About from "../pages/About";
import WebLayout from "../layouts/WebLayout";

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<WebLayout />}>
				<Route path="/home" element={<Home />} />
				<Route path="/About" element={<About />} />
			</Route>
		</Routes>
	);
};

const AppRouter = () => {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
};

export default AppRouter;
