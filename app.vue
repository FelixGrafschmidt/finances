<template>
	<div class="min-h-screen flex flex-col justify-between">
		<header class="h-16 bg-gray-8"></header>
		<main class="w-screen flex grow flex-row">
			<Sidebar class="w-1/5 bg-gray-6" />
			<Content class="w-4/5" />
		</main>
		<footer class="h-16 bg-gray-8"></footer>
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
