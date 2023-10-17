<script>
	import '../app.css';
	import { Footer, Navbar, ProgressBar } from '../components';
	import { inject } from '@vercel/analytics';
	inject();
</script>

<div id="main" class="min-h-screen from-slate-100 to-slate-300 dark:from-slate-500 dark:to-slate-900 bg-gradient-to-tr da dark:text-white">
	<ProgressBar />
	<Navbar />
	<slot />
	<Footer />
</div>
