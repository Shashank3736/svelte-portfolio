<script lang="ts">
	import moment from 'moment';

	export let data;
</script>

{#if data.blogs.length === 0}
	<div class="container mx-auto flex min-h-screen w-full flex-col p-5">
		<div
			class="relative flex w-full flex-col-reverse rounded-xl border-4 border-white/40 bg-white/20 p-8 md:flex-row"
		>
			<div class="flex w-full flex-col p-5">
				<div class="relative text-center">
					<h1 class="text-4xl font-semibold">No Blogs Found</h1>
					<hr class="my-4 border-2" />
					<p class="text-lg">
						Sorry, but there are no blogs available at the moment. Please check back later.
					</p>
				</div>
			</div>
		</div>
	</div>
{:else}
	<h1 class="text-center text-4xl font-semibold">Blogs</h1>
	<div class="container mx-auto my-4 min-h-screen">
		{#each data.blogs as blog}
			<div
				class="relative flex h-min w-full flex-col-reverse rounded-xl border-4 border-white/40 bg-white/20 p-4 md:flex-row"
			>
				<a
					href="/blog/{blog.slug}/"
					class="bottom-2 right-2 mt-4 rounded-md px-4 py-2 text-lg font-bold text-blue-300 hover:bg-white/20 md:absolute"
					>Read More >></a
				>
				<a
					href="/blog/{blog.slug}/"
					class="show-div relative flex max-w-[354px] shrink-0 items-center justify-center overflow-hidden rounded-xl"
				>
					<div
						class="visible-div absolute top-0 left-0 z-10 h-full w-full items-center justify-center rounded-xl bg-black/70"
					>
						<p class="text-xl font-bold">
							{moment(blog.firstPublish).format('MMMM Do YYYY, hh:mm a')}
						</p>
					</div>
					<img src={blog.thumbnail.url} alt={blog.title} class="rounded-xl object-cover" />
				</a>
				<div class="ml-4 hidden w-1 bg-gray-200/60 md:flex" />
				<div class="flex h-full w-full flex-col items-center justify-center p-4">
					<div class="prose prose-invert relative h-full">
						<h1 class="mb-2 text-center text-4xl font-semibold">{blog.title}</h1>
						{@html blog.description.html}
					</div>
				</div>
			</div>
			{#if blog.slug !== data.blogs[data.blogs.length - 1].slug}
				<hr class="m-4 border-2 border-white/20" />
			{/if}
		{/each}
	</div>
{/if}

<style>
	.show-div div {
		display: none;
	}
	.show-div:hover .visible-div {
		display: flex;
	}

	.show-div:hover img {
		@apply scale-125 transition delay-150 duration-500 ease-in-out;
	}
</style>
