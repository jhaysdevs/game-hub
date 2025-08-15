import useData from "./useData";
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

const useGames = () => useData<Game>("/games");

export default useGames;