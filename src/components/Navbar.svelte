<script>
    import { onMount } from 'svelte';
    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    onMount(() => {
        window.addEventListener('scroll', () => {
            const top_button = document.getElementById('go-to-top');
            const navbar = document.getElementById('navbar');
            if (top_button === null) return;
            if (navbar === null) return;
            console.log(navbar.getBoundingClientRect().bottom);
            if (navbar.getBoundingClientRect().bottom < 0) {
                top_button.classList.remove('hidden');
            } else {
                top_button.classList.add('hidden');
            }
        });
    })
</script>

<div id='navbar' class="flex flex-col sm:flex-row justify-between m-4 py-4 px-10 border-4 border-white/40 rounded-2xl backdrop-blur-xl bg-white/20 shadow-2xl">
    <div class="flex flex-row items-center space-x-2">
        <h1 class="text-2xl font-bold">Shreyash Raj</h1>
    </div>
    <div class="flex flex-wrap space-x-4 my-auto">
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
    </div>
</div>
<button id='go-to-top' on:click={goTop} class="fixed right-4 bottom-4 z-50 hidden animate-bounce text-indigo-500 bg-white/20 p-4 rounded-full hover:cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>      
</button>

<style>
    * {
        color: white;
    }

    a {
        @apply relative;
    }

    a::after {
        position: absolute;
        content: '';
        right: 0;
        bottom: -4px;
        width: 0%;
        height: 2px;
        background: white;
        border-radius: 8px;
        transition: all ease 0.45s;
    }

    a:hover::after {
        width: 100%;
    }
</style>