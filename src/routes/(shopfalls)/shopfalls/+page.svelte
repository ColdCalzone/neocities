<div id="container">
    <!-- CALL -->
    {#if call !== undefined}
        <main id="call" style="margin-bottom: 2px; padding-top:2px;">
            <div class="centered"><strong>{call}</strong></div>
        </main>
    {/if}

    <!-- PANEL -->
    <div id="flex">
        <main id="panel">
            {#each panels as src}
                {#if panelMode = "img"}
                    <img width="100%" {src}>
                    
                {/if}
            {/each}
        </main>
    </div>
    <!-- RESPONSE -->

    {#if response !== undefined}
        <main id="response" style="padding: 10px;">
            <div class="centered">
                {@html response}
            </div>
        </main>
    {/if}
    <!-- NAVIGATION -->
    <div id="navi" style="padding: 10px;">
        <div class="centered">
            <a href="/shopfalls/">
                <img style="position:relative;left:0px;top:-30px;z-index:1000" src="/shopfalls/ui/ArrowLeftLeft.png" width="7%">
            </a>
            <a id="PrevPage">
                <img style="position:relative;left:0px;top:-30px;z-index:1000" src="/shopfalls/ui/ArrowLeft.png" width="7%">
            </a>
            <a href="/">
                <img style="position:relative;left:0px;top:-30px;z-index:1000" src="/shopfalls/ui/Return.png" width="7%">
            </a>
            <a id="NextPage">
                <img style="position:relative;left:0px;top:-30px;z-index:1000" src="/shopfalls/ui/ArrowRight.png" width="7%">
            </a>
            <a id="LastPage" href="/shopfalls/">
                <img style="position:relative;left:0px;top:-30px;z-index:1000" src="/shopfalls/ui/ArrowRightRight.png" width="7%">
            </a>
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

<script lang="ts">
    import { browser } from "$app/environment";
    
    let panelMode : "img" | "video" = "img";
    let panels : string[] = ["/shopfalls/panels/Panel0.png"];
    let call : string = "Hello, World!";
    let response : string = "blah blah blah blah blah blah blah";
</script>