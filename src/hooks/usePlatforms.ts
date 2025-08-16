// import useData from "./useData";
import platforms from "../data/platforms";
export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const usePlatforms = () => {
	// const { data, isLoading, error } = useData<Platform>("/platforms/lists/parents");
	return { data: platforms, isLoading: false, error: null };
}

export default usePlatforms;