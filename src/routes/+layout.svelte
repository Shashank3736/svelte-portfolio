<script>
	import '../app.css';
	import { Footer, Navbar, ProgressBar } from '../components';
</script>

<div id="main" class="gradient_bg min-h-screen">
	<ProgressBar />
	<Navbar />
	<slot />
	<Footer />
</div>

<style>
	.gradient_bg {
		width: 100%;
		background: linear-gradient(45deg, #1d4ed8, #db2777, #3730a3, #ea580c);
		background-size: 800% 800%;
		animation: gradient 15s ease infinite;
	}
</style>
