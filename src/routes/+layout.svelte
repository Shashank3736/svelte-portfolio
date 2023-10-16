<script>
	import '../app.css';
	import { Footer, Navbar, ProgressBar } from '../components';
	import { inject } from '@vercel/analytics';
	inject();
</script>

<div id="main" class="min-h-screen bg-slate-300 dark:bg-slate-800 dark:text-white">
	<ProgressBar />
	<Navbar />
	<slot />
	<Footer />
</div>
