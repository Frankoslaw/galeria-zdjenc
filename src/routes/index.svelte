<script context="module">
	export const prerender = true;
</script>

<script>
	import Author from "$lib/Author.svelte";
	import ImageGrid from "$lib/ImageGrid.svelte"
	import DATA from "../data/data.js";

	import Content from '$lib/Content.svelte';
  	import Modal from 'svelte-simple-modal';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<Modal><Content /></Modal>

	<div class="container">
		<div class="row">
			<div class="container">
				<Author 
					image={DATA.AUTHOR.IMAGE} 
					alt={DATA.AUTHOR.ALT} 
					description={DATA.AUTHOR.DESCRIPTION}
				/>
			</div>
		</div>

		<div class="row">

			<ImageGrid
				images={DATA.IMAGES}
			/>
		</div>
	</div>
</section>

<style>
</style>
