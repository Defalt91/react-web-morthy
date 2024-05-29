import { FC } from "react";
import "./Search.css";

interface IProps {
	getData: () => Promise<void>;
}

const Search: FC<IProps> = ({ getData }) => {
	return (
		<div className="search-content">
			<h1>Home content</h1>
			<input type="text" placeholder="Search a character or planet!" />
			<button type="button" onClick={getData}>
				Randomize Character!
			</button>
		</div>
	);
};

export default Search;
