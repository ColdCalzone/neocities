<style>
    /* simmy's webring thingy mabob */
    webring-css {
        background: url('https://raw.githubusercontent.com/wiregrrrl/ACDSring/main/bg.png');
        
        /*block or inline-block work. Adjust as you want babyyy*/
        display: block;
        vertical-align: middle;
        max-width: 180px;
    }
    
    .footer-button-container > span::after {
        content: ' ';
        text-decoration: none;
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
        new NeocitiesButton("https://wiregrrrl.neocities.org/", "https://wiregrrrl.neocities.org/design/wiregrrrlbutton.gif", "WIREGRRRL button"),
        new NeocitiesButton("https://other-space.neocities.org/", "https://other-space.neocities.org/resources/OSbuttonX.gif", "Other Space button"),
        new NeocitiesButton("https://sadgrl.online/", "https://sadgrl.online/assets/images/buttons/sadgrlonline.gif", "sadgrl button"),
        new NeocitiesButton("https://excessiveclownery.neocities.org/", "https://excessiveclownery.neocities.org/Buttons/DaCircus.png", "da circus button"),
        new NeocitiesButton("https://doctorispie.neocities.org/", "https://doctorispie.neocities.org/images/DoclingButton.png", "Docling invasion button"),
        new NeocitiesButton("https://oberon-industries.neocities.org/", "https://oberon-industries.neocities.org/buttons/OberonButton.gif", "Oberon Industries button"),
        new NeocitiesButton("https://undead-mel.neocities.org/", "https://doctorispie.neocities.org/images/Mel.png", "Undead Mel button"),
        new NeocitiesButton("https://timelesstinka.neocities.org/", "https://timelesstinka.neocities.org/Images/buttonless.png", "Timelessness button"),
        new NeocitiesButton("https://timewatcher.neocities.org/", "https://timewatcher.neocities.org/img/site-button.gif", "A button that will take you to Timewatcher's website/fake OS."),
        new NeocitiesButton("https://store.steampowered.com/app/2256450/RAM_Random_Access_Mayhem/", "https://deep-freezer.neocities.org/images/RAM.gif", "RAM: Random Access Mayhem"),
        new NeocitiesButton("https://homestuck.com/", "/images/misc_buttons/homestuckbutton1.png", "Read Homestuck"),
        new NeocitiesButton("https://413.gay/", "/images/misc_buttons/sburb.gif", "Read Homestuck via the UHC"),
        new NeocitiesButton("https://acdsstuck.neocities.org/", "https://acdsstuck.neocities.org/MiscAssets/ACDSstuckButton.gif", "Read ACDSStuck!"),
        new NeocitiesButton("https://acdsstuck.neocities.org/", "https://acdsstuck.neocities.org/MiscAssets/izzybutton.gif", "Read ACDSStuck! Feat. Izzy Pendles"),
    ]

    function handleCopyButton() {
        let html = document.getElementById('deepfreezerButton')?.cloneNode(true) as Element;
        html.removeAttribute("class");
        html.children[0].removeAttribute("class");
        navigator.clipboard.writeText(html.outerHTML);
    }

    onMount(() => {
        let x = document.getElementById("nullring")!;
        let y = x.parentElement;
        x.remove();

        y?.appendChild(x);
    })
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
        <div style="min-width:230px;padding-left: 35px;">
            <webring-css site="https://deep-freezer.neocities.org"></webring-css>
            <script type="text/javascript" src="https://wiregrrrl.neocities.org/js/ACDSring.js"></script>
            <div style="margin: 0 auto 0 0;max-width: 180px;">
                <script id="nullring" src="https://nuthead.neocities.org/ring/ring.js"></script> 
            </div>
        </div>
    </div>
    <div>
        <ul class="links-box">
            <li><a href="https://coldcalzone.tumblr.com">Tumblr</a></li>
            <li><a href="https://coldcalzone.itch.io">Itch.io</a></li>
            <li><a href="https://github.com/ColdCalzone">Github</a></li>
            <li><a href="/shopfalls/prelude/">Shopfalls</a></li>
            <li><a href="https://acdsstuck.neocities.org/">ACDSstuck</a></li>
        </ul>
    </div>
</footer>
