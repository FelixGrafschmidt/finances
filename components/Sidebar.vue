<template>
	<div class="flex flex-col gap-4 py-4">
		<div class="h-1/10 flex flex-row items-center gap-2 px-4">
			<ClientOnly>
				<VueDatePicker v-model="newMonth" dark model-type="timestamp" month-picker auto-apply :max-date="new Date()" />
				<FGButton :disabled="!newMonth" label="Add" size="2xl" color="teal" @click="addMonth" />
				<template #fallback></template>
			</ClientOnly>
		</div>
		<div class="h-9/10 flex flex-col justify-start gap-2 overflow-y-auto">
			<div
				v-for="(month, i) in months"
				:key="i"
				class="group h-16 w-full flex flex-row cursor-pointer items-center gap-2 rounded p-4 hover:bg-gray-5"
				@click="data.month = month"
			>
				<FGButton size="lg" :icon="'i-material-symbols:close'" color="red" @click.stop="deleteMonth(i)" />
				<FGButton
					size="lg"
					:icon="month.edit ? 'i-material-symbols:save-outline' : 'i-material-symbols:edit-square-outline'"
					color="gray"
					@click.stop="month.edit = !month.edit"
				/>
				<input
					v-model="month.name"
					:class="!month.edit ? 'pointer-events-none border-gray-6 group-hover:border-gray-5' : 'border-black'"
					class="h-10 w-full border-2 rounded bg-gray-6 px-2 text-2xl group-hover:bg-gray-5"
					@click.stop
				/>
				<div class="flex flex-row gap-1 text-lg">
					<span>{{ month.total }}</span>
					<span>{{ currency }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import VueDatePicker from "@vuepic/vue-datepicker";
	import { format } from "date-fns";
	const data = useData();
	const months = ref(data.data.months);

	const currency = useState<string>("currency");

	const newMonth: Ref<string | undefined> = ref();

	function addMonth() {
		const month = new Date(newMonth.value!);
		months.value.push({
			entries: [],
			month: month.getMonth(),
			year: month.getFullYear(),
			name: format(month, "MM/yyyy"),
			edit: false,
			total: 0,
		});
	}

	function deleteMonth(index: number) {
		const month = months.value[index];
		const del = window.confirm(
			"Are you sure you want to delete " + month.name + " with a total of " + month.total + " " + currency.value + " ?"
		);
		if (del) {
			months.value.splice(index, 1);
		}
	}
</script>

<style>
	@import "@vuepic/vue-datepicker/dist/main.css";
</style>
