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

	export let projects: Project[];
</script>

<div id="project" class="container relative mx-auto min-h-full sm:p-5">
	<div class="rounded-xl border-4 border-white/40 bg-white/20 md:m-10 md:p-10">
		<h1 class="text-center text-4xl font-semibold">Projects</h1>
		<hr class="my-4 border-2" />
		<div class="relative flex flex-col p-4">
			{#each projects as project, i}
				<div
					class="gradient-bg flex shrink-0 grow scale-90 flex-col rounded-lg border-2 p-5 shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-100 hover:shadow-2xl"
				>
					<h1 class="text-center text-2xl font-bold md:text-3xl">{project.title}</h1>
					<hr class="my-4 border-2" />
					<div class="flex flex-col md:flex-row md:items-center">
						<div class="overflow-hidden rounded-lg">
							<img
								src={project.thumbnail.url}
								alt={project.title}
								class="w-full max-w-4xl rounded-lg object-cover transition delay-150 duration-300 ease-in-out hover:scale-125"
							/>
						</div>
						<div class="m-4 flex flex-col space-y-2">
							<p class="grow text-center">{@html project.description.html}</p>
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
								<h1 class="my-2 text-xl font-bold md:hidden">Skills used:</h1>
								<div class="flex flex-wrap">
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
