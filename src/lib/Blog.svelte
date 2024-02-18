<script lang="ts">
    import { marked } from "marked";
    import Box from "./Box.svelte";
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    
    export let locked : string | undefined = undefined;

    let posts : string[] = [];

    onMount(async () => {
        let loop : boolean = true
        function fetch_and_set(i : number) {
            return fetch(`/blog/${i.toString().padStart(4, "0")}.md`)
                .then( async (res) => {
                    if(res.status != 404) {
                        loop = true;
                        posts[i] = await marked(await res.text());
                    }
                    return "";
                })
                .catch(() => {
                    loop = false;
                    return "";
                });
        }
        let n = (locked !== "last" && locked !== undefined) ? parseInt(locked) : 0;
        while(loop) {
            loop = false;
            await fetch_and_set(n++);
            if(locked !== undefined) {
                loop = false;
            }
        }
        posts = posts.reverse();
        posts = posts;
    });
</script>

<h1 style='text-align: center'>
    {#if locked !== undefined}
    <a href="/blog">Blog</a>
    {:else}
    Blog
    {/if}
</h1>
<hr>
{#if locked !== undefined}
    <Box>
        {#if browser}
        {#await fetch(`/blog/${locked.padStart(4, "0")}.md`)
        .then( async (res) => {
            if(res.status != 404) {
                return await marked(await res.text());
            }
            return "";
        })}
            <h1>Loading</h1>
            <hr>
            <p>Please wait...</p>
        {:then x} 
            {@html x}
            
        {/await}
        {/if}
    </Box>
{:else}
    {#each posts as post, i}
        <Box id={(posts.length - i - 1).toString()}>
            {@html post}
        </Box>
    {/each}
{/if}