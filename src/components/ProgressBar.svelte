<script lang="ts">
    import { onMount } from 'svelte';

    onMount(() => {
        const pageProgressBar:(HTMLElement | null) = document.querySelector(".progress-bar");
        document.addEventListener("scroll", () => {
            if(pageProgressBar === null) return;
            const totalHeight = document.body.scrollHeight - window.screen.height;
            const currentScrollPosition = window.scrollY;
            const percentage = (currentScrollPosition / totalHeight) * 100;
            pageProgressBar.style.width = `${percentage}%`;
        });
    })
</script>

<div class="progress-bar" />

<style>
    .progress-bar {
        @apply fixed top-0 left-0 z-50 w-0 h-1 bg-white;
    }
</style>