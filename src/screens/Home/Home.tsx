import { FC } from "react";
import NavBar from "../../components/NavBar/NavBar";

const Home: FC = () => {
	return (
		<>
			<NavBar />
			<section className="main-section">
				<h2>Home content</h2>
			</section>
		</>
	);
};

export default Home;
