<script>
	import Down from "./Down.svelte";
    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'Node.js',
        'Python',
        'Data Structures',
        'Algorithms',
        'TypeScript',
        'ReactJS',
        'NextJS',
        'TailwindCSS',
        'Svelte',
        'MongoDB',
        'Django',
        'Nginx',
        'Bootstrap',
        'REST API',
        'Linux',
        'Git',
        'GitHub',
        'Git Bash',
        'VS Code',
        'Rust',
        'LibreOffice',
        'SQL',
        'SQLite',
        'PostgreSQL',
        'NoSQL',
        'C Programming',
        'MS Office',
    ]
</script>
<div id="skills" class="relative flex justify-center h-[100vh] p-4">
    <div class="container m-10 mb-20 p-10 border-4 border-white/40 rounded-xl bg-white/20">
        <h1 class="text-4xl font-semibold text-center">Skills</h1>
        <hr class="my-4 border-2">
        <div class="flex flex-wrap justify-center">
            {#each skills as skill}
                <div class="m-2 p-2 border-2 transition ease-in-out duration-500 delay-150 hover:bg-white hover:shadow-lg hover:text-indigo-600 hover:scale-110 border-white/40 rounded-xl">
                    {skill}
                </div>
            {/each}
        </div>
    </div>
    <Down link="#project" />
</div>

<style>
    * {
        color: white;
    }
</style>