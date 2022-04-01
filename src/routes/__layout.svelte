<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<style>
	:global(body) {
		background-color: var(--second-color);
	}
</style>
