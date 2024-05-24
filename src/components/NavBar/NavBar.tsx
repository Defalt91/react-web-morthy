import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar: FC = () => {
	const { pathname } = useLocation();
	return (
		<nav className="nav-menu">
			<ul className="nav-tab">
				<span className="nav-item">Logo</span>
				<li>
					<Link to={"/"} className={`nav-item ${pathname === "/" ? "active" : null}`}>
						Home
					</Link>
				</li>
				<li>
					<Link to={"/about"} className={`nav-item ${pathname === "/about" ? "active" : null}`}>
						About
					</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link to={"/login"} className={`nav-item ${pathname === "/login" ? "active" : null}`}>
						Login
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
