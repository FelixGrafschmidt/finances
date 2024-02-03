<template>
	<div class="h-screen max-h-screen flex flex-col justify-between">
		<Header class="h-2/20 bg-gray-8" />
		<main class="h-17/20 w-screen flex flex-row">
			<Sidebar class="h-full w-1/5 bg-gray-6" />
			<Content class="w-4/5" />
		</main>
		<footer class="h-1/20 bg-gray-8"></footer>
	</div>
</template>

<script setup lang="ts">
	import "@unocss/reset/tailwind.css";
</script>

<style>
	body {
		@apply bg-gray-7;
		@apply text-gray-2;
	}
</style>
