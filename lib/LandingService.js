const LandingService = () => {
	const baseUrl = "http://localhost:3000";
	const landingUrl = "/api/landings";

	const getLandings = async () => {
		const response = await fetch(baseUrl + landingUrl);
		const result = await response.json();

		return result;
	};

	const getLanding = async (id) => {
		const response = await fetch(baseUrl + landingUrl + `/${id}`);
		const result = await response.json();

		return result;
	};

	return {
		getLandings,
		getLanding,
	};
};

export default LandingService;
