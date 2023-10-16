<script>
	import logo from '../../assets/computer_geek.png';
</script>

<div id="navbar" class="container mx-auto py-4">
	<div
		class="flex flex-col justify-between rounded-2xl border-4 border-white/40 bg-white/20 py-4 px-10 shadow-2xl backdrop-blur-xl sm:flex-row"
	>
		<div class="flex cursor-default flex-row items-center space-x-2">
			<img src={logo} alt="logo" class="h-12 w-12 rounded-full" />
			<h1 class="text-2xl font-bold">Shreyash Raj</h1>
		</div>
		<div class="my-auto flex flex-wrap space-x-4">
			<a href="/">Home</a>
			<a href="/blog">Blogs</a>
			<a href="/#skills">Skills</a>
			<a href="/#project">Projects</a>
		</div>
	</div>
</div>

<style>
	a {
		@apply relative;
	}

	a::after {
		position: absolute;
		content: '';
		right: 0;
		bottom: -4px;
		width: 0%;
		height: 2px;
		background: white;
		border-radius: 8px;
		transition: all ease 0.45s;
	}

	a:hover::after {
		width: 100%;
	}
</style>
