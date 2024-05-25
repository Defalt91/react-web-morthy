import { FC } from "react";
import logo1 from "../../assets/logo.png";
import "./Logo.css";

const Logo: FC = () => {
	return <img src={logo1} alt="logo" className="small-logo" />;
};

export default Logo;
