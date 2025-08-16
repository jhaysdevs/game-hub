import useData from "./useData";
import type { Genre } from "./useGenres";
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

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => 
	useData<Game>(
		"/games", { 
			params: { 
				genres: selectedGenre?.id, 
				platforms: selectedPlatform?.id 
			} 
		}, [selectedGenre?.id, selectedPlatform?.id]);

export default useGames;