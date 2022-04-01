<script>
    export let image;
    export let alt;
    export let description;
    export let group;
</script>

<section id="nav-bar">
    <a href="{image}" data-lightbox="{group}" data-title="{description}">
        <img
            class="w-100 shadow-1-strong rounded mb-4"
            src="{image}"
            alt="{alt}"
        />
    </a>
</section>

<style>
</style>