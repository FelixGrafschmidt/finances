import { skipHydrate } from "pinia";

export const useData = defineStore("data", () => {
	const data = useLocalStorage<Data>("finances-data", { categories: [], months: [] });
	const month: Ref<Month | undefined> = ref();

	return { data: skipHydrate(data), month };
});
