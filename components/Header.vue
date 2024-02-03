<template>
	<header class="flex flex-row items-center justify-between px-4">
		<div></div>
		<label class="flex flex-col text-lg">
			<span>Currency</span>
			<select v-model="currency" class="rounded bg-gray-6 px-2 py-1">
				<option value="CHF">CHF</option>
				<option value="EUR">EUR</option>
				<option value="USD">USD</option>
			</select>
		</label>
	</header>
</template>

<script lang="ts" setup>
	const currency = useState("currency", () => "CHF");
</script>
