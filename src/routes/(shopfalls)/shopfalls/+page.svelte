<script lang="ts">
    import { browser } from "$app/environment";
    import type { ComicState } from "$lib/shopfalls/modules/parse/parsecomic";
    import { resetPage, setPage, updatePage } from "$lib/shopfalls/comic";
    import { onMount } from "svelte";
    
    let progress : string[] = [];
    let state : ComicState = {
        panelMode: [],
        panels: [],
        call: undefined,
        response: undefined
    }

    async function leftArrow() {
        let url = new URL(document.URL);
        let page = url.searchParams.get("page");
        if(!page) page = "0";
        if(page) await setPage(parseInt(page) - 1, state);
        state = state;
    }

    async function rightArrow() {
        let url = new URL(document.URL);
        let page = url.searchParams.get("page");
        if(!page) page = "0";
        if(page) await setPage(parseInt(page) + 1, state);
        state = state;
    }

    onMount(() => {
        if(browser){
            window.onpopstate = () => {
                resetPage(state);
                updatePage(state);

                state = state;
            }
            // page navigation with arrow keys
            window.onkeyup = (ev : KeyboardEvent) => {
                // prevents bugginess with switching pages too quickly
                if(ev.altKey) return;
                if(ev.key == "ArrowRight") {
                    rightArrow();
                } else if(ev.key == "ArrowLeft") {
                    leftArrow();
                }
            }
            (async () => {
                state = await updatePage(state);
            
                state = state;
            })();
        }
        
    });
    $: {
        console.log(`Updated state: ${state.call}`);
        console.log(`${state.response}`);
        console.log(`${state.panels}`);
    }
</script>

<div id="container">
    <!-- CALL -->
    {#if state.call !== undefined}
        <main id="call" style="margin-bottom: 2px; padding-top:2px;">
            <div class="centered"><strong>{@html state.call}</strong></div>
        </main>
    {/if}

    <!-- PANEL -->
    <div id="flex">
        <main id="panel">
            {#each state.panels as src, i }
                {#if state.panelMode[i] = "image"}
                    <img width="100%" data-panel-type="image" {src}>
                {:else if state.panelMode[i] = "video"}
                    <div data-panel-type="video">
                        <video autoplay width="100%" preload="auto" {src} on:timeupdate={ (ev) => {
                            progress[i] = String(ev.currentTarget.currentTime / ev.currentTarget.duration * 100);
                            progress = progress;
                        }}></video>
                    </div>
                    <div style="background-color: #696969; bottom: 5px;" class="videoProgress"></div>
                    <div class="videoProgress" style="width:{progress[i]}%"></div>
                {:else if state.panelMode[i] = "embed"}
                    <!-- Embeds are not supported -->
                {/if}
            {/each}
        </main>
    </div>
    <!-- RESPONSE -->

    {#if state.response !== undefined}
        <main id="response" style="padding: 10px;">
            <div class="centered">
                {@html state.response}
            </div>
        </main>
    {/if}
    <!-- NAVIGATION -->
    <div id="navi" style="padding: 10px;">
        <div class="centered">
            <a href="javascript:void(0);" on:click={ (e) => {
                e.preventDefault();
                setPage(0, state);
                state = state;
            }}>
                <img style="position:relative;left:0px;top:-30px;z-index:1000" src="/shopfalls/ui/ArrowLeftLeft.png" width="7%">
            </a>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <a id="PrevPage" href="javascript:void(0);" on:click={ leftArrow }>
                <img style="position:relative;left:0px;top:-30px;z-index:1000" src="/shopfalls/ui/ArrowLeft.png" width="7%">
            </a>
            <a href="/">
                <img style="position:relative;left:0px;top:-30px;z-index:1000" src="/shopfalls/ui/Return.png" width="7%">
            </a>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <a id="NextPage" href="javascript:void(0);" on:click={ rightArrow }>
                <img style="position:relative;left:0px;top:-30px;z-index:1000" src="/shopfalls/ui/ArrowRight.png" width="7%">
            </a>
            {#await fetch("/shopfalls/shopfalls.json").then((x) => x.json()).then((y) => y["last"]).catch(() => {return 0})}
                
            {:then x} 
            <a id="LastPage"  href="javascript:void(0);" on:click={ async () => {
                let url = new URL(document.URL);
                let page = url.searchParams.get("page");
                if(page) await setPage(parseInt(x), state);
                state = state;
            }}>
                <img style="position:relative;left:0px;top:-30px;z-index:1000" src="/shopfalls/ui/ArrowRightRight.png" width="7%">
            </a>
            {/await}
        </div>
    </div>
    <div id="inventory" style="display:inline-block;width:100%;">
        <canvas id="inventoryGrid" width="200" height="126">The inventory display relies on canvas rendering, sorry.</canvas>
        <main id="description" style="float:right;width: 425px;max-width: 450px;">
            <h2 id="descriptionName">Item</h2>
            <hr>
            <p id="descriptionDescription" style="color:white;">Item descriptions will appear here.</p>
        </main>
    </div>
</div>