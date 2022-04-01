<script>
    export let image;
    export let alt;
    export let description;
</script>

<div class="column">
    <div class="row" id="title-box">
        <div class="col-lg-3 col-md-4 mb-4 mb-lg-0">
            <img 
                src = "{image}"
                alt = "{alt}"
            />
        </div>
        <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <h1>{alt}</h1>
            <p> {description} </p>
        </div>
    </div>
</div>

<style>
    div#title-box {
		background-color: #8f8f8f;
		border-radius: 10px;
		padding: 20px;
		margin-top: 15px;
		margin-bottom: 20px;
	}

	p {
		margin: 0px;
        color: var(--fifth-color)
	}
</style>

