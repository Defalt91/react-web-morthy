import { FC } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Search from "../../components/Search/Search";
import PhotoContainer from "../../components/PhotoContainer/PhotoContainer";

const Home: FC = () => {
	return (
		<>
			<NavBar />
			<section className="main-section">
				<Search />
				<PhotoContainer />
			</section>
		</>
	);
};

export default Home;
