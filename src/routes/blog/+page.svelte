<script lang='ts'>
    import moment from "moment";

    export let data;
</script>

{#if data.blogs.length === 0}
<div class="flex flex-col container mx-auto w-full h-full p-5">
    <div class="flex flex-col-reverse relative md:flex-row p-8 border-4 w-full border-white/40 rounded-xl bg-white/20">
        <div class="flex flex-col w-full p-5">
                <div class="relative text-center">
                    <h1 class="text-4xl font-semibold">No Blogs Found</h1>
                    <hr class="my-4 border-2">
                    <p class="text-lg">Sorry, but there are no blogs available at the moment. Please check back later.</p>
                </div>
            </div>
        </div>
    </div>
{:else}
    <h1 class="text-4xl font-semibold text-center">Blogs</h1>
    <div class="container mx-auto min-h-screen">
        {#each data.blogs as blog}
            <div class="flex flex-row items-center justify-center p-5">
                <div class="flex flex-col-reverse relative md:flex-row items-center p-8 border-4 w-full border-white/40 rounded-xl bg-white/20">
                    <img src={blog.thumbnail.url} alt={blog.title} class="w-96 object-cover rounded-xl">
                    <div class="flex flex-col items-center justify-center p-5">
                        <div class="relative prose-invert px-4 mb-2">
                            <h1 class="text-4xl font-semibold text-center mb-2">{blog.title}</h1>
                            {@html blog.description.html}
                        </div>
                        <a href="/blog/{blog.slug}/" class="self-end mt-4 text-blue-300 font-bold text-lg underline hover:text-indigo-400">Read More >></a>
                    </div>
                </div>
            </div>
            <hr class="m-4 border-2 border-white/20">
        {/each}
    </div>
{/if}
