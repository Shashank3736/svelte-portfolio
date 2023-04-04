<script lang='ts'>
    type Project = {
        title: string,
        description: {html: string},
        thumbnail: { url: string }
        link: string,
        github: string,
        id: string,
        skill_used: { name: string, id: string }[]
    }

    let focus_project: Project | null;

    function show_project(project: Project | null) {
        focus_project = project;
        return true;
    }
    
    export let projects: Project[];
</script>
{#if focus_project}
    <div class="fixed top-0 left-0 w-screen h-screen z-[1000]">
        <div on:click={() => show_project(null)} on:keypress={() => show_project(null)} class="flex justify-center items-center bg-black/70 w-full h-full py-4">
            <div on:click|stopPropagation={() => true} on:keypress={() => show_project(null)} class="gradient-bg flex flex-col md:flex-row p-10 rounded-lg border-2 container relative overflow-y-scroll max-h-[90vh]">
                <button on:click={() => show_project(null)} class="absolute top-0 right-0 m-4 p-4 font-medium hover:bg-white/20 rounded-full">X</button>
                <div class="flex justify-center items-center">
                    <img src={focus_project.thumbnail.url} alt={focus_project.title} class="max-w-[384px] rounded-xl" />
                </div>
                <div class="flex flex-col ml-4 justify-center items-center space-y-4">
                    <div class="prose-invert">
                        <h1 class="text-2xl font-bold text-center">{focus_project.title}</h1>
                        <hr class="my-4 border-2">
                        {@html focus_project.description.html}
                    </div>
                    <h1 class="text-2xl font-bold">Skills Used:</h1>
                    <div class="flex flex-wrap">
                        {#each focus_project.skill_used as skill}
                        <div class="m-2 px-4 py-2 border-2 min-w-[100px] text-center transition ease-in-out duration-500 delay-150 hover:bg-white hover:shadow-lg hover:text-indigo-600 hover:scale-110 border-white/40 rounded-xl cursor-default">
                            {skill.name}
                        </div>
                        {/each}
                    </div>
                    <div class='flex flex-row space-x-8 items-center justify-center'>
                        <a class="bg-gray-700/80 transition ease-in-out delay-150 duration-300 hover:scale-110 hover:bg-gray-700 px-4 py-2 rounded" href={focus_project.github}>GitHub</a>
                        <a class="bg-indigo-700/80 transition ease-in-out delay-150 duration-300 hover:scale-110 hover:bg-indigo-700 px-4 py-2 rounded cursor-pointer" href={focus_project.link}>Live</a>
                    </div>
                    </div>
            </div>
        </div>
    </div>
{/if}
<div id='project' class="relative sm:p-5 container mx-auto min-h-full">
    <div class="bg-white/20 md:m-10 md:p-10 border-4 border-white/40 rounded-xl">
        <h1 class="text-4xl font-semibold text-center">Projects</h1>
        <hr class="my-4 border-2">
        <div class={"flex flex-row space-x-4 overflow-x-auto relative " + (projects.length > 3 ? "": "xl:justify-center ") + (projects.length > 2 ? "" : "lg:justify-center")}>
            {#each projects as project, i}
                <div class="gradient-bg flex flex-col overflow-y-auto max-h-[550px] grow scale-90 transition ease-in-out delay-150 duration-300 hover:scale-100 p-5 space-y-4 rounded-lg border-2 min-w-[300px] max-w-[18rem] shrink-0 shadow-lg hover:shadow-2xl">
                    <h1 class="text-2xl md:text-3xl font-bold text-center">{project.title}</h1>
                    <hr class="my-4 border-2">
                    <p class="text-center grow">{@html project.description.html}</p>
                    <div class="overflow-hidden rounded-lg">
                        <img src={project.thumbnail.url} alt={project.title} class="w-full hover:scale-125 transition ease-in-out delay-150 duration-300 object-cover rounded-lg">
                    </div>
                    <div class='flex flex-row space-x-8 items-center justify-center'>
                        <a class="bg-gray-700/80 transition ease-in-out delay-150 duration-300 hover:scale-110 hover:bg-gray-700 px-4 py-2 rounded" href={project.github}>GitHub</a>
                        <a class="bg-indigo-700/80 transition ease-in-out delay-150 duration-300 hover:scale-110 hover:bg-indigo-700 px-4 py-2 rounded cursor-pointer" href={project.link}>Live</a>
                    </div>
                    <div class='flex flex-col'>
                        <button on:click={() => show_project(projects[i])} class="rounded-md px-4 py-2 hidden md:block font-medium hover:bg-orange-400/90 border-2 transition ease-in-out delay-150 duration-300">Show Details</button>
                        <h1 class="text-xl font-bold my-2 md:hidden">Skills used:</h1>
                        <div class="flex flex-wrap md:hidden">
                            {#each project.skill_used as skill}
                            <div class="m-2 px-4 py-2 border-2 min-w-[100px] text-center transition ease-in-out duration-500 delay-150 hover:bg-white hover:shadow-lg hover:text-indigo-600 hover:scale-110 border-white/40 rounded-xl cursor-default">
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
        background: rgb(4,23,163,1);
    }
    
    .gradient-bg:hover {
        background: linear-gradient(135deg, rgba(2,15,91,1) 0%, rgba(4,23,163,1) 38%, rgba(0,0,74,1) 64%, rgba(45,82,145,1) 100%);
        background-size: 500% 500%;
        animation: gradient 5s ease infinite;
   }
</style>