import { FC } from "react";
import "./PhotoContainer.css";
import PhotoCard from "../PhotoCard/PhotoCard";
import { ICharacter } from "../../interface";

interface IProps {
	characters: ICharacter[] | null;
}

const PhotoContainer: FC<IProps> = ({ characters }) => {
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
