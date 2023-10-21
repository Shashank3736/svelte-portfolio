<script>
	import { fade } from 'svelte/transition';
	import logo from '../../assets/computer_geek.png';
	import DarkMode from './DarkMode.svelte';

	let show = false;
	const links = [
		['Home', '/'],
		['Blog', '/blog'],
		['Skills', '/#skills'],
		['Projects', '/#project']
	];
</script>

<div id="navbar" class="mx-4 py-4">
	<div
		class="flex items-center justify-between rounded-2xl border-4 border-white/40 bg-white/20 py-4 px-2 shadow-2xl backdrop-blur-xl sm:px-10"
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="flex cursor-pointer sm:hidden" on:click={() => (show = !show)}>
			{#if show}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			{/if}
		</div>
		<div class="flex cursor-default flex-row items-center space-x-2">
			<img src={logo} alt="logo" class="h-12 w-12 rounded-full" />
			<h1 class="text-2xl font-bold">Shreyash Raj</h1>
		</div>
		<div class="my-auto hidden flex-wrap space-x-4 sm:flex">
			{#each links as link}
				<a class="after:bg-black dark:after:bg-white" href={link[1]}>{link[0]}</a>
			{/each}
		</div>
		<DarkMode />
	</div>
</div>

{#if show}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		on:click={() => (show = !show)}
		class="fixed left-0 top-0 z-[1000] flex h-screen w-screen flex-col items-center space-y-5 bg-white/90 p-10 dark:bg-slate-900/90"
		in:fade
	>
		{#each links as link}
			<a class="after:bg-black dark:after:bg-white" href={link[1]}>{link[0]}</a>
		{/each}
	</div>
{/if}

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
		border-radius: 8px;
		transition: all ease 0.45s;
	}

	a:hover::after {
		width: 100%;
	}
</style>
