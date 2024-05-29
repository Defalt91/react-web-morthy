import { FC } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Search from "../../components/Search/Search";
import PhotoContainer from "../../components/PhotoContainer/PhotoContainer";
import useRandomData from "../../customHooks/useRandomData";

const Home: FC = () => {
	const { characters, getData } = useRandomData("character");

	return (
		<>
			<NavBar />
			<section className="main-section">
				<Search getData={getData} />
				<PhotoContainer characters={characters} />
			</section>
		</>
	);
};

export default Home;
