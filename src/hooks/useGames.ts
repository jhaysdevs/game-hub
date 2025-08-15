import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}
export interface Game {
	parent_platforms: any;
	id: number;
	name: string;
	slug: string;
	metacritic: number;
	rating: number;
	rating_top: number;
	background_image: string;
	platforms: { platform: Platform }[];
}

interface FetchGamesResponse {
	count: number;
	results: Game[];
}

const useGames = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setIsLoading(true);
		apiClient.get<FetchGamesResponse>("/games", { signal: controller.signal })
			.then((res) => {
				setGames(res.data.results);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setIsLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { games, error, isLoading };
};

export default useGames;