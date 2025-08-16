// import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
	id: number;
	name: string;
	slug: string;
	image_background: string;
}

// const useGenres = (selectedGenre: Genre | null) => useData<Genre>("/genres");
const useGenres = (selectedGenre: Genre | null) => ({ data: genres, isLoading: false, error: null });

export default useGenres;