<script lang="ts">
    import { browser } from "$app/environment";
    import { afterNavigate } from "$app/navigation";
    import { onMount } from "svelte";

    export let custom : string[][] = [];
    export let banner : string = '/images/banner.png';

    function showNav() {
        if(!browser) return;

        const nav = document.getElementById("navigation");
        nav?.classList.toggle("navigation-shown")
    }

    onMount(() => {
        showNav();
    });

    afterNavigate(() => {
        if(!browser) return;

        const nav = document.getElementById("navigation");
        nav?.classList.remove("navigation-shown")
    })
</script>
<style>
    #header {
        width: 20%;
        min-width: 270px;
        background-color: #00000000;
        height: 150px;
        background-image: var(--banner);
        
        background-repeat: no-repeat;
        background-position: center;
        position: fixed;
        z-index: 1;
    }

    /* navigation section!! */
    #navbar {
        height: calc(100vh - 150px);
        /* navbar color */
        background-color: #00000000;
        position: fixed;
        bottom: 0;
        width: 20%;
        min-width: 270px;
    }

    #navbar ul {
        padding: 0;
        padding-top: 20px;
        padding-bottom: 20px;
        list-style-type: none;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #navbar li {
        padding-top: 10px;
        text-align: center;
        margin: auto;
    }

    
    a {
        color: rgb(var(--link-color));
        /* navbar text color */
        font-weight: 800;
        text-decoration: none;
        /* this removes the underline */
    }

    
    a:hover {
        color: rgb(var(--link-hover-color));
        text-decoration: underline;
    }

    #navbar div {
        margin: 0 auto;
        height: 100%;
    }

    #navigation {
        float: left;
        height: 100vh;
        width: 20%;
        min-width: 270px;
    }

    #show {
        display: none;
        background-color: #191547ED;
        border-radius: 0 3px 3px 0;
        outline: #aaaaaa solid 1px;
        width: 32px;
        height: 32px;
        position: absolute;
        right: -32px;
        top: 8px;
        z-index: 999;
    }
    #show > * {
        width: 100%;
        height: 100%;
        
        -webkit-mask-image: url('https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg');
        mask-image: url('https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg');
        background-color: white;
    }

    @media only screen and (max-width: 850px) {
        #navbar ul {
            flex-wrap: wrap;
        }

        #navbar div {
            width: 100%;
        }
        
        #navigation {
            left: -270px;
            float:none;
            position: fixed;
            transition: 0.2s;

            background-color: rgb(var(--dark-background-color), 0.66);
            top: 0;
            z-index: 1000;
        }
        
        #show {
            display: inherit;
        }

        .navigation-shown:is(#navigation) {
            left: 0%;
        }
    }
</style>
<div class="navigation-shown"></div>
<div id="navigation" style="--banner: url('{banner}');">
    <a href="/"><div class="clickable" id="header"></div></a>
    <nav id="navbar">
        <div>
            <ul>
                {#if custom.length > 0}
                {#each custom as [href, inner]}
                    <li><a {href}>{inner}</a></li>
                {/each}
                {:else}
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects/">Projects</a></li>
                    <li><a href="/art/">Art</a></li>
                    <li><a href="/read/">Reading</a></li>
                    <li><a href="/listening/">Listening</a></li>
                    <li><a href="/homestuck/">Homestuck</a></li>
                    <li><a href="/comments/">Comments</a></li>
                {/if}
            </ul>
        </div>
    </nav>
    <div id="show" on:click={ showNav }>
        <div style="pointer-events: none;"></div>
    </div>
</div>
