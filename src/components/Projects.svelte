<script lang='ts'>
	// import Down from "./Down.svelte";
    import caloriemeter from "../assets/caloriemeter.png";
    import calapi from "../assets/cal-api.png";
    type Project = {
        name: string,
        description: string,
        image: string,
        link: string,
        github: string
    }
    const projects: Project[] = [
        {
            name: "Caloriemeter",
            description: "A website made using NextJS, TailwindCSS, and Material UI. It is a calorie counter website that allows users to track their calories and save it. It uses a Calorimeter API to get the data.",
            image: caloriemeter,
            link: "https://cm.shreyashraj.com/",
            github: "https://github.com/Shashank3736/caloriemeter"
        }, {
            name: "Caloriemeter API",
            description: "A REST API made using Python and Django. It is a REST API that allows users to get, post, update, and delete data from the database. Allow them to read, create and update user, create tokens and add and delete foods.",
            image: calapi,
            link: "https://api.cm.shreyashraj.com/api/",
            github: "https://github.com/Shashank3736/caloriemeter"
        }, {
            name: 'captcha-canvas',
            description: 'A captcha generator by using skia-canvas. It creates captchas which OCR can\'t read. It is made using TypeScript and Skia Canvas.',
            image: 'https://raw.githubusercontent.com/Shashank3736/captcha-canvas/master/examples/example.png',
            link: 'https://www.npmjs.com/package/captcha-canvas',
            github: 'https://github.com/Shashank3736/captcha-canvas'
        }
    ]
</script>

<div id='project' class="relative sm:p-5 container mx-auto min-h-full">
    <div class="bg-white/20 md:m-10 md:p-10 border-4 border-white/40 rounded-xl">
        <h1 class="text-4xl font-semibold text-center">Projects</h1>
        <hr class="my-4 border-2">
        <div class={"flex flex-row space-x-4 overflow-x-auto relative " + (projects.length > 3 ? "": "xl:justify-center ") + (projects.length > 2 ? "" : "lg:justify-center")}>
            {#each projects as project}
                <div class="gradient-bg flex flex-col grow scale-90 transition ease-in-out delay-150 duration-300 hover:scale-100 p-5 space-y-4 rounded-lg border-2 min-w-[300px] max-w-[18rem] shrink-0 shadow-lg hover:shadow-2xl">
                    <h1 class="text-2xl md:text-3xl font-bold text-center">{project.name}</h1>
                    <hr class="my-4 border-2">
                    <p class="text-center grow">{project.description}</p>
                    <img src={project.image} alt={project.name} class="w-full object-cover rounded-lg">
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