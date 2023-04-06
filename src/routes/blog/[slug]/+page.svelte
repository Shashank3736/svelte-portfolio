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
				class="relative prose lg:prose-xl bg-white/60 b border-4 border-white/40 rounded-2xl w-full px-2 sm:px-10 py-5"
			>
				<h1 class="text-4xl font-semibold text-center">{data.title}</h1>
				<img
					src={data.thumbnail.url}
					alt={data.title}
					class="w-full max-h-96 object-cover rounded-xl"
				/>
				<hr class="border-2" />
				<article class="text-lg">
					{@html data.content.html}
				</article>
				<p class="absolute text-base bottom-2 right-2 text-gray-600">
					- By Shreyash Raj on {moment(data.publishedAt).format('MMMM Do YYYY')}
				</p>
			</div>
		</div>
	</div>
</div>
