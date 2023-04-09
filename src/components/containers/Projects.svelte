<script lang="ts">
	type Project = {
		title: string;
		description: { html: string };
		thumbnail: { url: string };
		live: string;
		github: string;
		id: string;
		skill_used: { name: string; id: string }[];
	};

	let focus_project: Project | null;

	function show_project(project: Project | null) {
		focus_project = project;
		return true;
	}

	export let projects: Project[];
</script>

{#if focus_project}
	<div class="fixed top-0 left-0 z-[1000] h-screen w-screen">
		<div
			on:click={() => show_project(null)}
			on:keypress={() => show_project(null)}
			class="flex h-full w-full items-center justify-center bg-black/70 py-4"
		>
			<div
				on:click|stopPropagation={() => true}
				on:keypress={() => show_project(null)}
				class="gradient-bg container relative flex max-h-[90vh] flex-col overflow-y-scroll rounded-lg border-2 p-10 md:flex-row"
			>
				<button
					on:click={() => show_project(null)}
					class="absolute top-0 right-0 m-4 rounded-full p-4 font-medium hover:bg-white/20"
					>X</button
				>
				<div class="flex items-center justify-center">
					<img
						src={focus_project.thumbnail.url}
						alt={focus_project.title}
						class="max-w-[384px] rounded-xl"
					/>
				</div>
				<div class="ml-4 flex flex-col items-center justify-center space-y-4">
					<div class="prose-invert">
						<h1 class="text-center text-2xl font-bold">{focus_project.title}</h1>
						<hr class="my-4 border-2" />
						{@html focus_project.description.html}
					</div>
					<h1 class="text-2xl font-bold">Skills Used:</h1>
					<div class="flex flex-wrap">
						{#each focus_project.skill_used as skill}
							<div
								class="m-2 min-w-[100px] cursor-default rounded-xl border-2 border-white/40 px-4 py-2 text-center transition delay-150 duration-500 ease-in-out hover:scale-110 hover:bg-white hover:text-indigo-600 hover:shadow-lg"
							>
								{skill.name}
							</div>
						{/each}
					</div>
					<div class="flex flex-row items-center justify-center space-x-8">
						<a
							class="rounded bg-gray-700/80 px-4 py-2 transition delay-150 duration-300 ease-in-out hover:scale-110 hover:bg-gray-700"
							href={focus_project.github}>GitHub</a
						>
						<a
							class="rounded bg-indigo-700/80 px-4 py-2 transition delay-150 duration-300 ease-in-out hover:scale-110 hover:bg-indigo-700"
							href={focus_project.live}>Live</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
<div id="project" class="container relative mx-auto min-h-full sm:p-5">
	<div class="rounded-xl border-4 border-white/40 bg-white/20 md:m-10 md:p-10">
		<h1 class="text-center text-4xl font-semibold">Projects</h1>
		<hr class="my-4 border-2" />
		<div
			class={'relative flex flex-row space-x-4 overflow-x-auto ' +
				(projects.length > 3 ? '' : 'xl:justify-center ') +
				(projects.length > 2 ? '' : 'lg:justify-center')}
		>
			{#each projects as project, i}
				<div
					class="gradient-bg flex max-h-[550px] min-w-[300px] max-w-[18rem] shrink-0 grow scale-90 flex-col space-y-4 overflow-y-auto rounded-lg border-2 p-5 shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-100 hover:shadow-2xl"
				>
					<h1 class="text-center text-2xl font-bold md:text-3xl">{project.title}</h1>
					<hr class="my-4 border-2" />
					<p class="grow text-center">{@html project.description.html}</p>
					<div class="overflow-hidden rounded-lg">
						<img
							src={project.thumbnail.url}
							alt={project.title}
							class="w-full rounded-lg object-cover transition delay-150 duration-300 ease-in-out hover:scale-125"
						/>
					</div>
					<div class="flex flex-row items-center justify-center space-x-8">
						<a
							class="rounded bg-gray-700/80 px-4 py-2 transition delay-150 duration-300 ease-in-out hover:scale-110 hover:bg-gray-700"
							href={project.github}>GitHub</a
						>
						<a
							class="rounded bg-indigo-700/80 px-4 py-2 transition delay-150 duration-300 ease-in-out hover:scale-110 hover:bg-indigo-700"
							href={project.live}>Live</a
						>
					</div>
					<div class="flex flex-col">
						<button
							on:click={() => show_project(projects[i])}
							class="hidden rounded-md border-2 px-4 py-2 font-medium transition delay-150 duration-300 ease-in-out hover:bg-orange-400/90 md:block"
							>Show Details</button
						>
						<h1 class="my-2 text-xl font-bold md:hidden">Skills used:</h1>
						<div class="flex flex-wrap md:hidden">
							{#each project.skill_used as skill}
								<div
									class="m-2 min-w-[100px] cursor-default rounded-xl border-2 border-white/40 px-4 py-2 text-center transition delay-150 duration-500 ease-in-out hover:scale-110 hover:bg-white hover:text-indigo-600 hover:shadow-lg"
								>
									{skill.name}
								</div>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.gradient-bg {
		background: rgb(4, 23, 163, 1);
	}

	.gradient-bg:hover {
		background: linear-gradient(
			135deg,
			rgba(2, 15, 91, 1) 0%,
			rgba(4, 23, 163, 1) 38%,
			rgba(0, 0, 74, 1) 64%,
			rgba(45, 82, 145, 1) 100%
		);
		background-size: 500% 500%;
		animation: gradient 5s ease infinite;
	}
</style>
