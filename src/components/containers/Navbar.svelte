<script>
	import { onMount } from 'svelte';
	import logo from '../../assets/computer_geek.png';

	const goTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};
	onMount(() => {
		window.addEventListener('scroll', () => {
			const top_button = document.getElementById('go-to-top');
			const navbar = document.getElementById('navbar');
			if (top_button === null) return;
			if (navbar === null) return;
			if (navbar.getBoundingClientRect().bottom < 0) {
				top_button.classList.remove('hidden');
			} else {
				top_button.classList.add('hidden');
			}
		});
	});
</script>

<div id="navbar" class="container mx-auto py-4">
	<div
		class="flex flex-col justify-between rounded-2xl border-4 border-white/40 bg-white/20 py-4 px-10 shadow-2xl backdrop-blur-xl sm:flex-row"
	>
		<div class="flex cursor-default flex-row items-center space-x-2">
			<img src={logo} alt="logo" class="h-12 w-12 rounded-full" />
			<h1 class="text-2xl font-bold">Shreyash Raj</h1>
		</div>
		<div class="my-auto flex flex-wrap space-x-4">
			<a href="/">Home</a>
			<a href="/blog">Blogs</a>
			<a href="/#skills">Skills</a>
			<a href="/#project">Projects</a>
		</div>
	</div>
	<button
		id="go-to-top"
		on:click={goTop}
		class="fixed right-4 bottom-4 z-50 hidden rounded-full bg-white/20 p-4 text-indigo-500 hover:cursor-pointer"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			class="h-6 w-6"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
		</svg>
	</button>
</div>

<style>
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
