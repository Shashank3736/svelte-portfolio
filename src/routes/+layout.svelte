<script>
	import '../app.css';
	import { Footer, Navbar, ProgressBar } from '../components';
	import { inject } from '@vercel/analytics';
	inject();
</script>

<div id="main" class="dark:bg-slate-800 dark:text-white bg-slate-300 min-h-screen">
	<ProgressBar />
	<Navbar />
	<slot />
	<Footer />
</div>
