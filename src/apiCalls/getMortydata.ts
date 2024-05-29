const getMortyData = async (resource: string) => {
	const URL_GET_CHARACTERS = import.meta.env.VITE_CHARACTERS_URL;
	console.log("url", URL_GET_CHARACTERS + resource);

	const config = {
		method: "GET",
		headers: { Accept: "application/json", "Content-Type": "application/json" },
	};

	try {
		const response = await fetch(URL_GET_CHARACTERS, config);

		if (response.status !== 200) {
			const errorData = await response.json();
			console.log("getDataApi", errorData);
			return errorData;
		}

		const data = await response.json();

		console.log("done data", data.results);

		return data.results;
	} catch (err: unknown) {
		console.log("getDataApi: Check your internet connection!", err);
		return { errorMessage: "Error: Check your internet connection!" };
	}
};

export default getMortyData;
