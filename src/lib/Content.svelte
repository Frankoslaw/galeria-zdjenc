<script>
    import { onMount } from 'svelte';
    import { getContext } from 'svelte';
    import Popup from '$lib/Popup.svelte';
    const { open } = getContext('simple-modal');

    onMount(() => {
        if (browser) {
            open(Popup, { header: "Info",message: "Uwaga! Kliknięcie na zdjęcie wyświetla więcej szczegółów." });
        }
    })
</script>