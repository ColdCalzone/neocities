<script lang="ts">
    import { marked } from "marked";
    import Box from "./Box.svelte";
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    
    // Marked customization
    const renderer = {
        image(href : string, title : string, _text : string) {
            return `
                <!-- This is super jank -->
                <a onclick="document.getElementById('fullview-${href}').style.display = 'block';">
                    <img style="image-rendering: auto; max-width: 100%;" src="${href}" title="${title}">
                </a>

                <div id="fullview-${href}" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: #000000a0; display: none;">
                    <a onclick="document.getElementById('fullview-${href}').style.display = 'none';" style="position: absolute; top: 1%; right: 1%;">X</a>
                    <img src="${href}" title="${title}" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); image-rendering: auto;">
                </div>
                `;
        }
    }

    marked.use({ renderer });

    // end of Marked customization
    
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
