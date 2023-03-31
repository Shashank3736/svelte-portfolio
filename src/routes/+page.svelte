<script>
    import { About, Navbar, Skills, Projects, ProgressBar, Footer } from "../components";
    export let data;
</script>

<ProgressBar />
<Navbar />
<About />
<Skills skills={data.skills} />
<Projects projects={data.projects} />
<Footer />