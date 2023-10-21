<script>
	import '../app.css';
	import { Footer, Navbar, ProgressBar } from '../components';
	import { inject } from '@vercel/analytics';
	inject();
</script>

<div
	id="main"
	class="da min-h-screen bg-gradient-to-tr from-slate-100 to-slate-300 dark:from-slate-500 dark:to-slate-900 dark:text-white"
>
	<ProgressBar />
	<Navbar />
	<slot />
	<Footer />
</div>
