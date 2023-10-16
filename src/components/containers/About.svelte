<script>
	import icon from '../../assets/computer_geek.png';
	import Down from '../Down.svelte';
	import { onMount } from 'svelte';
	let visible = false;

	// @ts-ignore
	function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (/** @type {number} */ t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}

	onMount(() => {
		visible = true;
	});
</script>

<div
	id="about"
	class="container relative mx-auto flex min-h-screen flex-col overflow-visible md:flex-row"
>
	<!-- My Information -->
	<div class="flex w-[100vw] items-center justify-center md:w-1/2">
		<div
			class="relative mx-4 rounded-2xl border-4 border-white/60 bg-white/20 p-10 md:mx-20"
		>
			<h1 class="relative text-center text-xl font-semibold md:text-2xl lg:text-4xl">
				About {#if visible}
					<span
						class="text-center text-xl font-semibold md:text-2xl lg:text-4xl"
						transition:typewriter={{ speed: 1 }}>Shreyash Raj</span
					>
				{/if}
			</h1>
			<hr class="my-4 border-2" />
			<p class="text-lg font-medium md:text-xl">
				Hello, I'm Shreyash Raj, a full stack developer. I have expertise in both front-end and
				back-end technologies, such as HTML, CSS, JavaScript, React, Node.js, MongoDB, and more. I
				enjoy creating user-friendly and responsive websites that meet the needs and expectations of
				the clients. I'm always eager to learn new skills and tools to enhance my performance and
				deliver quality products.
			</p>
		</div>
	</div>
	<!-- Image -->
	<div class="hidden w-[100vw] items-center justify-center md:flex md:w-1/2">
		<img class="h-96 w-96 rounded-full border-4 border-white/10 shadow-xl" src={icon} alt="icon" />
	</div>
	<Down link="#skills" />
</div>

<style>
	img {
		animation: wiggle 1s ease-in-out infinite;
	}

	@keyframes wiggle {
		0% {
			transform: translateY(-1%);
		}
		50% {
			transform: translateY(1%);
		}
		100% {
			transform: translateY(-1%);
		}
	}
</style>
