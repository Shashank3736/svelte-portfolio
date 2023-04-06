<script lang="ts">
	import moment from 'moment';

	type Blog = {
		title: string;
		publishedAt: string;
		createdAt: string;
		content: { html: string };
		thumbnail: { url: string };
	};
	export let data: Blog;
</script>

<div class="my-5 sm:p-5">
	<div>
		<div class="flex flex-col items-center justify-center p-5">
			<div
				class="b prose relative w-full rounded-2xl border-4 border-white/40 bg-white/60 px-2 py-5 lg:prose-xl sm:px-10"
			>
				<h1 class="text-center text-4xl font-semibold">{data.title}</h1>
				<img
					src={data.thumbnail.url}
					alt={data.title}
					class="max-h-96 w-full rounded-xl object-cover"
				/>
				<hr class="border-2" />
				<article class="text-lg">
					{@html data.content.html}
				</article>
				<p class="absolute bottom-2 right-2 text-base text-gray-600">
					- By Shreyash Raj on {moment(data.publishedAt).format('MMMM Do YYYY')}
				</p>
			</div>
		</div>
	</div>
</div>
