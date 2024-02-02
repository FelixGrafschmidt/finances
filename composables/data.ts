import { skipHydrate } from "pinia";

export const useData = defineStore("data", () => {
	const data = useLocalStorage<Data>("finances-data", { categories: [], months: [] });

	return { data: skipHydrate(data) };
});
