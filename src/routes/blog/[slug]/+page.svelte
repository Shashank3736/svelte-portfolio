<script lang="ts">
    import moment from "moment";

    type Blog = {
        title: string;
        publishedAt: string;
        createdAt: string;
        content: { html: string };
        thumbnail: { url: string };
    };
    export let data: Blog;
</script>

<div class="container my-5 mx-auto p-5">
    <div class="bg-white/20 border-2 border-white/40 rounded-xl w-full p-5">
        <img src={data.thumbnail.url} alt={data.title} class="w-full h-96 object-cover rounded-xl">
        <div class="flex flex-col items-center justify-center p-5">
            <div class="relative prose p-4">
                <h1 class="text-4xl font-semibold text-center">{data.title}</h1>
                <hr class="my-4 border-2">
                <article class="text-lg">
                    {@html data.content.html}
                </article>
                <p class="absolute bottom-2 right-2 text-gray-400">
                    - By Shreyash Raj on {moment(data.publishedAt).format("MMMM Do YYYY")}
                </p>
            </div>
        </div>
    </div>
</div>