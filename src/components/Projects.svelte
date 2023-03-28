<script lang='ts'>
	import Down from "./Down.svelte";

    type Project = {
        name: string,
        description: string,
        image: string,
        link: string,
        github: string
    }
    const projects: Project[] = [
        {
            name: "Project 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            image: "https://picsum.photos/600/400",
            link: "https://google.com",
            github: "https://github.com"
        }, {
            name: "Project 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            image: "https://picsum.photos/600/400",
            link: "https://google.com",
            github: "https://github.com"
        }, {
            name: "Project 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            image: "https://picsum.photos/600/400",
            link: "https://google.com",
            github: "https://github.com"
        }, {
            name: "Project 4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            image: "https://picsum.photos/600/400",
            link: "https://google.com",
            github: "https://github.com"
        }, {
            name: "Project 5",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
            image: "https://picsum.photos/600/400",
            link: "https://google.com",
            github: "https://github.com"
        }
    ]
</script>

<div id='project' class="relative p-5 container mx-auto min-h-full">
    <div class="bg-white/20 m-10 p-10 border-4 border-white/40 rounded-xl">
        <h1 class="text-4xl font-semibold text-center">Projects</h1>
        <hr class="my-4 border-2">
        <div class="flex flex-row space-x-4 overflow-x-auto relative">
            {#each projects as project}
                <div class="bg-white/40 m-5 p-5 space-y-4 rounded-lg border-2 w-96 shadow-lg">
                    <h1 class="text-3xl font-bold text-center">{project.name}</h1>
                    <hr class="my-4 border-2">
                    <p class="text-center">{project.description}</p>
                    <img src={project.image} alt={project.name} class="w-full h- h-40 object-cover rounded-lg">
                    <div class='flex flex-row space-x-8 items-center justify-center'>
                        <a class="bg-gray-700/80 transition ease-in-out delay-150 duration-300 hover:scale-110 hover:bg-gray-700 px-4 py-2 rounded" href={project.github}>GitHub</a>
                        <a class="bg-indigo-700/80 transition ease-in-out delay-150 duration-300 hover:scale-110 hover:bg-indigo-700 px-4 py-2 rounded" href={project.link}>Live</a>
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <Down link="#contact" />
</div>

<style>
</style>