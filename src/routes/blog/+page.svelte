<script lang='ts'>
    import Blogs from '../../components/blogs/Blogs.svelte';

    export let data;
</script>

<Blogs blogs={data.blogs} />