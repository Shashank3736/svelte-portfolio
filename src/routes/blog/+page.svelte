<script lang='ts'>
    import moment from "moment";

    export let data;
</script>

{#if data.blogs.length === 0}
<div class="flex flex-col container mx-auto w-full min-h-screen p-5">
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
    <h1 class="text-4xl font-semibold text-center mb-4">Blogs</h1>
    <div class="container mx-auto min-h-screen">
        {#each data.blogs as blog}
            <div class="flex flex-col-reverse relative md:flex-row p-4 border-4 w-full h-min border-white/40 rounded-xl bg-white/20">
                <a href="/blog/{blog.slug}/" class="md:absolute bottom-2 right-2 mt-4 text-blue-300 font-bold text-lg rounded-md hover:bg-white/20 px-4 py-2">Read More >></a>
                <a href="/blog/{blog.slug}/" class="max-w-[354px] shrink-0 relative rounded-xl show-div">
                    <div class="visible-div absolute top-0 left-0 rounded-xl items-center justify-center bg-black/70 w-full h-full">
                        <p class="text-xl font-bold">
                            {moment(blog.firstPublish).format("MMMM Do YYYY, hh:mm a")}
                        </p>
                    </div>
                    <img src={blog.thumbnail.url} alt={blog.title} class="object-cover rounded-xl">
                </a>
                <div class="bg-gray-200/60 ml-4 w-1 hidden md:flex" />
                <div class="flex flex-col items-center justify-center w-full h-full p-4">
                    <div class="relative prose-invert h-full">
                        <h1 class="text-4xl font-semibold text-center mb-2">{blog.title}</h1>
                        {@html blog.description.html}
                    </div>
                </div>
            </div>
            {#if blog.slug !== data.blogs[data.blogs.length - 1].slug}
                <hr class="m-4 border-2 border-white/20">
            {/if}
        {/each}
    </div>
{/if}

<style>
    .show-div div{
        display: none;
    }
    .show-div:hover .visible-div {
        display: flex;
    }
</style>
