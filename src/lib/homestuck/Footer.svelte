<style>
    /* simmy's webring thingy mabob */
    webring-css {
        background: url('https://raw.githubusercontent.com/wiregrrrl/ACDSring/main/bg.png');
        
        /*block or inline-block work. Adjust as you want babyyy*/
        display: block;
        vertical-align: middle;
        max-width: 180px;
    }
    
    footer {
        background-color: rgb(var(--dark-background-color));
        float: right;
        width: 80%;
        max-width: calc(100% - 270px);
        padding: 10px;
        text-align: center;
        order: 3;
        /* this centers the footer text */
    }
    
    .footer-button-container {
        flex:1;
        height: fit-content;
        margin-top: auto;
        margin-bottom: auto;
    }
    .footer-button-container > * {
        margin-bottom: 15px;
    }
    
    .footer-button-container > span::after {
        content: ' ';
        text-decoration: none;
    }

    #webring-contain {
        min-width:230px;
        padding-left: 35px;
    }

    @media only screen and (max-width: 850px) {        
        footer {
            order: 3;
            margin-left: 0px;
            max-width: 100%;
            width: 100%;
        }
    }

    @media only screen and (max-width: 700px) {
        footer > div {
            flex-wrap: wrap;
        }
        #webring-contain {
            width: 100%;
            padding-left: 0;
            flex-basis: 100%;
            margin: 15px 0;
        }
        #webring-contain > * {
            margin: 0 auto;
        }
    }

</style>

<script lang="ts">
    import { onMount } from "svelte";

    class NeocitiesButton {
        href : string;
        src : string;
        alt : string;

        constructor(href: string, src: string, alt: string) {
            this.href = href;
            this.src = src;
            this.alt = alt;
        }
    }
    const buttons = [
        new NeocitiesButton("https://timelesstinka.neocities.org/", "https://timelesstinka.neocities.org/Images/buttonless.gif", "Timelessness button"),
        new NeocitiesButton("https://homestuck.com/", "/images/misc_buttons/HomestuckButton.gif", "Read Homestuck"),
        new NeocitiesButton("https://413.gay/", "/images/misc_buttons/sburb.gif", "Read Homestuck via the UHC"),
        new NeocitiesButton("https://alternativefunction.neocities.org/", "https://alternativefunction.neocities.org/MiscAssets/ShatteredSpaceButton.gif", "Read Shattered Space!"),
        new NeocitiesButton("https://alternativefunction.neocities.org/", "https://alternativefunction.neocities.org/MiscAssets/izzybutton.gif", "Read Shattered Space! Feat. Izzy Pendles"),
        new NeocitiesButton("https://alternativefunction.neocities.org/", "https://alternativefunction.neocities.org/MiscAssets/drewbutton.gif", "Read Shattered Space! Feat. Drew Tinker"),
    ]

    function handleCopyButton() {
        let html = document.getElementById('deepfreezerButton')?.cloneNode(true) as Element;
        html.removeAttribute("class");
        html.children[0].removeAttribute("class");
        navigator.clipboard.writeText(html.outerHTML);
    }

    onMount(() => {
        let x = document.getElementById("nullring")!;
        x.innerHTML = "";
        let script = document.createElement("script");
        script.src = "https://nuthead.neocities.org/ring/ring.js";
        document.getElementById("nullring")?.appendChild(script);
        script.onload = () => { document.dispatchEvent(new Event("DOMContentLoaded")) };
    });
</script>

<footer>
    <div style="display:flex;">
        <div class="footer-button-container">
            <span style="display:inline-block;transform: translateY(13px);">
                <a id="deepfreezerButton" href="https://deep-freezer.neocities.org/" target="_blank"><img src="https://deep-freezer.neocities.org/images/deepfreeze.gif" alt="Deep Freezer button"></a>
                <a id="copyButton" href="javascript:void(0);" on:click={handleCopyButton}>(copy button)</a>
            </span>
            {#each buttons as button}
                <span>
                    <a href={button.href}><img src={button.src} alt={button.alt}></a>
                </span>
            {/each}
        </div>
        <div id="webring-contain">
            <webring-css site="https://deep-freezer.neocities.org"></webring-css>
            <script type="text/javascript" src="https://wiregrrrl.neocities.org/js/ACDSring.js"></script>
            <div style="max-width: 180px;" id="nullring">
            </div>
        </div>
    </div>
    <div>
        <ul class="links-box">
            <li><a href="https://coldcalzone.tumblr.com">Tumblr</a></li>
            <li><a href="https://coldcalzone.itch.io">Itch.io</a></li>
            <li><a href="https://github.com/ColdCalzone">Github</a></li>
            <li><a href="/shopfalls/prelude/">Shopfalls</a></li>
            <li><a href="https://alternativefunction.neocities.org/">Shattered Space</a></li>
            <li><a href="/homestuck/">Homestuck</a></li>
        </ul>
    </div>
</footer>
