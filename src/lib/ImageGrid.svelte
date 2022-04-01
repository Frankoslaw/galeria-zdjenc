<script>
    import { page } from '$app/stores';
    import LightboxImage from "$lib/LightboxImage.svelte";
    export let images = [[]];
</script>

{#each images as ImageList}
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        {#each ImageList as image}
            <div class="container-md image-box">
                <p> <b>Title: </b>{image.title} </p>
                <LightboxImage 
                    image = "{image.image}"
                    alt = "{image.title}"
                    description = "{image.description}"
                    group = "0"
                />
                <button class="btn">
                    <a href="{image.image}" download="{image.image}">
                        <i class="fa fa-download">
                        </i> Download
                    </a>
                </button>

                <button class="btn" id="pure-facebook-with-label">
                    <a href="https://www.facebook.com/sharer/sharer.php?u={$page.url.pathname}{image.image}" target="_blank">
                        <i class="fa fa-share">
                        </i> Share
                    </a>
                </button>
            </div>
        {/each}
    </div>
{/each}

<style>
    p {
        color: black
    }

    .btn{
        background-color: lightgreen;
        color: black;
    }

    .btn > a > i {
        color: black;
    }
    .image-box {
        background-color: #8f8f8f;
        border-radius: 10px;
        margin-top: 30px;
        padding: 20px;
        padding-bottom: 20px;
    }
</style>

