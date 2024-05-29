import { FC } from "react";
import "./PhotoCard.css";
import { ICharacter } from "../../interface";

interface IProps {
	character: ICharacter;
}

const PhotoCard: FC<IProps> = (props) => {
	const { character } = props;

	return (
		<article className="card">
			<div className="img-container">
				<img src={character.image} alt="character selfie" />
			</div>
			<div className="card-info">
				<div className="label-group">
					<label className="card-title">{character.name}</label>
					<label>
						<span
							className={`dot ${character.status === "Alive" ? "alive" : character.status === "Dead" ? "dead" : "uknown"}`}
						></span>{" "}
						{`${character.status} - ${character.species}`}
					</label>
				</div>
				<div className="label-group">
					<label>Last Known Location:</label>
					<label>{character.location.name}</label>
				</div>
				{character.type && (
					<div className="label-group">
						<label>Type: {character.type}</label>
					</div>
				)}
			</div>
		</article>
	);
};

export default PhotoCard;
