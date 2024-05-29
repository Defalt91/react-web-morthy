import { FC } from "react";
import "./Search.css";

const Search: FC = () => {
	return (
		<div className="search-content">
			<h1>Home content</h1>
			<input type="text" placeholder="Search a character or planet!" />
			<button type="button">Randomize Character!</button>
		</div>
	);
};

export default Search;
