import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WebLayout: React.FC = () => {
	return (
		<div className="relative">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default WebLayout;
