<script>
    export let navlists = [];
    export let header;
</script>

<section id="nav-bar">
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                {header}
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                data-target="#nav1"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                {#each navlists as list}
                    <li class="nav-item">
                        <a class="nav-link {list.active && 'disabled'}" href={list.url}>{list.label}</a>
                    </li>
                {/each}
                </ul>
            </div>
        </div>
    </nav>
</section>

<style>
    .navbar-toggler-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }

    .navbar {
        background-color: var(--first-color);
        border-color: var(--first-color);
    }

    .navbar .navbar-brand {
        color: white;
    }

    .navbar-nav > li{
        padding-left:30px;
        padding-right:30px;
    }

    .navbar .navbar-brand:hover,
    .navbar .navbar-brand:focus {
        color: #5E5E5E;
    }

    .navbar .navbar-nav {
        background-color: var(--fourth-color);
        border-radius: 10px;
        margin-right: 10px;
    }

    .navbar .navbar-nav > li > a {
        color: var(--fifth-color);
    }
    .navbar .navbar-nav > li > a:hover,
    .navbar .navbar-nav > li > a:focus {
        color: white;
    }
</style>