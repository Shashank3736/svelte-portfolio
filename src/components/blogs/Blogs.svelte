<script lang="ts">
    type Blog = {
        title: string,
        publishedAt: string,
        slug: string,
        description: { html: string },
        thumbnail: { url: string },
    }

    export let blogs: Blog[];
</script>

<h1 class="text-4xl font-semibold text-center">Blogs</h1>
{#each blogs as blog}
    <div class="flex flex-col container mx-auto items-center justify-center p-5">
        <div class="flex flex-col-reverse relative md:flex-row items-center p-8 border-4 w-full border-white/40 rounded-xl bg-white/20">
            <img src={blog.thumbnail.url} alt={blog.title} class="w-96 object-cover rounded-xl">
            <div class="flex flex-col items-center justify-center p-5">
                <div class="relative prose">
                    <h1 class="text-4xl font-semibold text-center">{blog.title}</h1>
                    <hr class="my-4 border-2">
                    {@html blog.description.html}
                </div>
            </div>
            <a href="/blog/{blog.slug}" class="absolute right-2 bottom-2 text-blue-300 font-bold text-lg underline hover:text-indigo-400">Read More >></a>
        </div>
    </div>
{/each}