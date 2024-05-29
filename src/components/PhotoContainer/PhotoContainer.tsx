import { FC } from "react";
import "./PhotoContainer.css";
import useRandomData from "../../customHooks/useRandomData";
import PhotoCard from "../PhotoCard/PhotoCard";

const PhotoContainer: FC = () => {
	const { characters } = useRandomData("character");

	return (
		<div className="card-container">
			{characters && characters.length > 0 ? (
				characters.map((character) => <PhotoCard character={character} key={character.id} />)
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};

export default PhotoContainer;
