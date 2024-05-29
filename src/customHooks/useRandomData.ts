import { useCallback, useEffect, useState } from "react";
// import getMortyData from "../apiCalls/getMortydata";
import { ICharacter } from "../interface";
const URL_GET_CHARACTERS = import.meta.env.VITE_CHARACTERS_URL;

const useRandomData = (resource: string) => {
	const [characters, setCharacters] = useState<ICharacter[] | null>(null);

	const getData = useCallback(async () => {
		const config = {
			method: "GET",
			headers: { Accept: "application/json", "Content-Type": "application/json" },
		};

		console.log("url", URL_GET_CHARACTERS + resource);

		try {
			const response = await fetch(URL_GET_CHARACTERS, config);

			if (response.status !== 200) {
				const errorData = await response.json();
				console.log("getDataApi", errorData);
				return errorData;
			}

			const data = await response.json();

			// console.log("done data", data.results);

			// return data.results;
			setCharacters(data.results);
		} catch (err: unknown) {
			console.log("getDataApi: Check your internet connection!", err);
			return { errorMessage: "Error: Check your internet connection!" };
		}
	}, [resource]);

	useEffect(() => {
		console.log("useeffect ran");
		getData();
	}, [getData]);

	return { characters };
};

export default useRandomData;
