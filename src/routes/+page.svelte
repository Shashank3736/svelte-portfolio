<script>
    import { About, Skills, Projects } from "../components";
    export let data;
</script>

<About />
<Skills skills={data.skills} />
<Projects projects={data.projects} />