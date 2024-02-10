<script lang="ts">
    import { marked } from "marked";
    import Box from "./Box.svelte";
    const posts = import.meta.glob("$lib/blog/*", {eager: true, query: "raw"});
    const post_contents : string[] = Object.values(posts).map( (x : any) => x.default ).reverse();

    

    
    let post_index = 0;
    $: current_post = marked(post_contents[post_index]);

    function decrementPost() {
        post_index--;
        if(post_index < 0) {
            post_index = post_contents.length - 1;
        }
    }

    function incrementPost() {
        post_index = (post_index + 1) % post_contents.length;
    }
</script>

<h1 style='text-align: center'>Blog</h1>
<hr>
<Box>
    {@html current_post}
</Box>
<div style="margin: 0 auto; width: fit-content;">
    <Box style="display: inline-block; padding: 0;">
        <button style="border:none; background-color:transparent; color:white;" on:click={decrementPost}>&lt;=</button>
    </Box>
    <Box style="display: inline-block; padding: 0;">
        <button style="border:none; background-color:transparent; color:white;" on:click={incrementPost}>=&gt;</button>
    </Box>
</div>