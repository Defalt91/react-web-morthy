import { useCallback, useEffect, useState } from "react";
// import getMortyData from "../apiCalls/getMortydata";
import { ICharacter } from "../interface";
const URL_GET_URL = import.meta.env.VITE_GLOBAL_URL;

const useRandomData = (resource: string) => {
	const [characters, setCharacters] = useState<ICharacter[] | null>(null);

	const generateNumArray = () => {
		const randomArray = Array(20)
			.fill("")
			.map(() => Math.floor(1 + (826 - 1 + 1) * Math.random()));

		return randomArray;
	};

	const getData = useCallback(async () => {
		const config = {
			method: "GET",
			headers: { Accept: "application/json", "Content-Type": "application/json" },
		};

		console.log("url:", `${URL_GET_URL}/${resource}`);

		try {
			const response = await fetch(`${URL_GET_URL}/${resource}/${generateNumArray()}`, config);

			if (response.status !== 200) {
				const errorData = await response.json();
				console.error("getDataApi", errorData);
				// return errorData;
			}

			const data = await response.json();

			// console.log("done data", data.results);
			setCharacters(data);
		} catch (err: unknown) {
			console.error("getDataApi: Check your internet connection!", err);
			// return { errorMessage: "Error: Check your internet connection!" };
		}
	}, [resource]);

	useEffect(() => {
		console.log("useeffect ran");
		getData();
	}, [getData]);

	return { characters, getData };
};

export default useRandomData;
