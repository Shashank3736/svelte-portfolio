<script>
	import Down from "./Down.svelte";
    const skills = [
        'CSS',
        'Git',
        'SQL',
        'HTML',
        'Rust',
        'NoSQL',
        'Nginx',
        'Linux',
        'SQLite',
        'GitHub',
        'Python',
        'NextJS',
        'Svelte',
        'Django',
        'Node.js',
        'ReactJS',
        'MongoDB',
        'VS Code',
        'Git Bash',
        'REST API',
        'MS Office',
        'Bootstrap',
        'C Language',
        'PostgreSQL',
        'JavaScript',
        'Algorithms',
        'TypeScript',
        'TailwindCSS',
        'LibreOffice',
        'Data Structures',
    ]
</script>
<div id="skills" class="relative flex justify-center h-[100vh] py-5 md:px-20">
    <div class="container overflow-auto sm:m-20 sm:p-20 p-5 border-4 border-white/40 rounded-xl bg-white/20">
        <h1 class="text-4xl font-semibold text-center">Skills</h1>
        <hr class="my-4 border-2">
        <div class="flex flex-wrap justify-center">
            {#each skills as skill}
                <div class="m-2 px-4 py-2 border-2 min-w-[100px] text-center transition ease-in-out duration-500 delay-150 hover:bg-white hover:shadow-lg hover:text-indigo-600 hover:scale-110 border-white/40 rounded-xl">
                    {skill}
                </div>
            {/each}
        </div>
    </div>
    <Down link="#project" />
</div>