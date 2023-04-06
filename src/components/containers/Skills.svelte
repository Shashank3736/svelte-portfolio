<script lang="ts">
	import Down from '../Down.svelte';

	type Skills = {
		name: String;
	};

	export let skills: Skills[];
</script>

<div id="skills" class="relative flex h-[100vh] justify-center py-5 md:px-20">
	<div
		class="container overflow-auto rounded-xl border-4 border-white/40 bg-white/20 p-5 sm:m-20 sm:p-20"
	>
		<h1 class="text-center text-4xl font-semibold">Skills</h1>
		<hr class="my-4 border-2" />
		<div class="flex flex-wrap justify-center">
			{#each skills as skill}
				<div
					class="m-2 min-w-[100px] rounded-xl border-2 border-white/40 px-4 py-2 text-center transition delay-150 duration-500 ease-in-out hover:scale-110 hover:bg-white hover:text-indigo-600 hover:shadow-lg"
				>
					{skill.name}
				</div>
			{/each}
		</div>
	</div>
	<Down link="#project" />
</div>
