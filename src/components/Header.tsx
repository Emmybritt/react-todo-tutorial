import React from "react";
import { headerLink } from "../constant";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<div className="bg-slate-950 text-white w-full px-[6rem] p-[1.5rem] my-auto">
			<div className="flex items-center justify-between">
				<div>React Tutorial</div>
				<div className="space-x-5">
					{headerLink.map((link) => (
						<Link to={link.to}>{link.name}</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;
