<template>
	<div v-if="data.month" class="h-full flex flex-col gap-4 p-8">
		<div class="flex flex-row items-center gap-2">
			<span class="text-2xl">{{ data.month.name }}</span>
			<FGButton label="Add" size="2xl" color="teal" @click="addPosition" />
		</div>
		<div class="h-full border border-3">
			<div class="h-16 flex flex-row border-b-3 p-4 text-xl">
				<div class="w-1/4">Title</div>
				<div class="w-1/4">Income</div>
				<div class="w-1/4">Expense</div>
				<div class="w-1/4">Recurring</div>
			</div>
			<div class="max-h-[60vh] overflow-y-auto">
				<div v-for="(entry, i) in data.month.entries" :key="i" class="h-16 flex flex-row border-b p-4 text-lg last:border-b-0">
					<div class="w-1/4 px-2">{{ entry.title }}</div>
					<div class="w-1/4 px-2 text-green-5 font-bold">{{ entry.value >= 0 ? entry.value : "---" }}</div>
					<div class="w-1/4 px-2 text-red-5 font-bold">{{ entry.value < 0 ? entry.value : "---" }}</div>
					<div class="w-1/4 px-2">{{ entry.recurring }}</div>
				</div>
			</div>
			<div class="h-16 flex flex-row border-t-3 p-4 text-2xl font-bold">
				Total:
				{{ total }}
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const data = useData();

	const total = computed(() => {
		let t = 0;
		data.month?.entries.forEach((entry) => {
			t += entry.value;
		});
		return t;
	});

	function addPosition() {
		data.month?.entries.push({
			notes: "",
			recurring: "never",
			title: "",
			value: 0,
		});
	}
</script>
