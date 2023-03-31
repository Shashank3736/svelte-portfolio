<script lang='ts'>
	// import Down from "./Down.svelte";
    import caloriemeter from "../assets/caloriemeter.png";
    import calapi from "../assets/cal-api.png";
    type Project = {
        title: string,
        description: {html: string},
        thumbnail: { url: string }
        link: string,
        github: string,
        id: string
    }
    
    export let projects: Project[];
</script>

<div id='project' class="relative sm:p-5 container mx-auto min-h-full">
    <div class="bg-white/20 md:m-10 md:p-10 border-4 border-white/40 rounded-xl">
        <h1 class="text-4xl font-semibold text-center">Projects</h1>
        <hr class="my-4 border-2">
        <div class={"flex flex-row space-x-4 overflow-x-auto relative " + (projects.length > 3 ? "": "xl:justify-center ") + (projects.length > 2 ? "" : "lg:justify-center")}>
            {#each projects as project}
                <div class="gradient-bg flex flex-col grow scale-90 transition ease-in-out delay-150 duration-300 hover:scale-100 p-5 space-y-4 rounded-lg border-2 min-w-[300px] max-w-[18rem] shrink-0 shadow-lg hover:shadow-2xl">
                    <h1 class="text-2xl md:text-3xl font-bold text-center">{project.title}</h1>
                    <hr class="my-4 border-2">
                    <p class="text-center grow">{@html project.description.html}</p>
                    <img src={project.thumbnail.url} alt={project.title} class="w-full object-cover rounded-lg">
                    <div class='flex flex-row space-x-8 items-center justify-center'>
                        <a class="bg-gray-700/80 transition ease-in-out delay-150 duration-300 hover:scale-110 hover:bg-gray-700 px-4 py-2 rounded" href={project.github}>GitHub</a>
                        <a class="bg-indigo-700/80 transition ease-in-out delay-150 duration-300 hover:scale-110 hover:bg-indigo-700 px-4 py-2 rounded" href={project.link}>Live</a>
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <!-- <Down link="#contact" /> -->
</div>

<style>
    .gradient-bg {
        background: rgb(4,23,163,1);
    }
    
    .gradient-bg:hover {
        background: linear-gradient(135deg, rgba(2,15,91,1) 0%, rgba(4,23,163,1) 38%, rgba(0,0,74,1) 64%, rgba(45,82,145,1) 100%);
        background-size: 500% 500%;
        animation: gradient 5s ease infinite;
   }
</style>