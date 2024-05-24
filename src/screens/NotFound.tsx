import { FC } from "react";
import "./NotFound.css";

const NotFound: FC = () => {
	return (
		<>
			<h1>
				<label className="red-font">(404)</label> page not Found!
			</h1>
			<hr />
			<p>The page you are trying to access doesn't exist...</p>
		</>
	);
};

export default NotFound;
