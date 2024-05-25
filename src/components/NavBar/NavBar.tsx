import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./NavBar.css";

const NavBar: FC = () => {
	const { pathname } = useLocation();
	return (
		<nav className="nav-menu">
			<ul className="nav-tab left">
				<Logo />
				<li>
					<Link to={"/"} className={`nav-item ${pathname === "/" ? "active" : null}`}>
						Home
					</Link>
				</li>
				<li>
					<Link to={"/"} className={`nav-item ${pathname === "/characters" ? "active" : null}`}>
						Characters
					</Link>
				</li>
				<li>
					<Link to={"/"} className={`nav-item ${pathname === "/planets" ? "active" : null}`}>
						Planets
					</Link>
				</li>
				<li>
					<Link to={"/"} className={`nav-item ${pathname === "/favorites" ? "active" : null}`}>
						Favorites
					</Link>
				</li>
				<li>
					<Link to={"/about"} className={`nav-item ${pathname === "/about" ? "active" : null}`}>
						About
					</Link>
				</li>
			</ul>
			<ul className="nav-tab right">
				<li>
					<Link to={"/login"} className={`nav-item ${pathname === "/login" ? "active" : null}`}>
						Login
					</Link>
				</li>
				<span>hey</span>
			</ul>
		</nav>
	);
};

export default NavBar;
