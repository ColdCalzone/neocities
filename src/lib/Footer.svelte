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
        /* background color for footer */
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

    /* Slider https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch */

    .button-switch {
        position: relative;
        display: inline-block;
        width: 34px;
        height: 18px;
        margin-bottom: 0;
        transform: translateY(-13px);
    }

    .button-switch input { 
        opacity: 0;
        width: 0;
        height: 0;
    }

    .button-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 34px;
        height: 18px;
        background-image: url('/misc/ButtonToggleSlider.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        -webkit-transition: .4s;
        transition: .4s;
        image-rendering: pixelated;
        image-rendering: crisp-edges;
    }

    .button-slider:before {
        position: absolute;
        content: "";
        height: 10px;
        width: 10px;
        left: 4px;
        bottom: 4px;
        background-image: url('/misc/ButtonToggle.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        -webkit-transition: .4s;
        transition: .4s;
        background-color: #ff0044;
        image-rendering: pixelated;
        image-rendering: crisp-edges;
    }

    input:checked + .button-slider:before {
        transform: translateX(16px);

        background-color: #00ff44;
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


    const all_buttons = [
        new NeocitiesButton("https://wiregrrrl.neocities.org/", "https://wiregrrrl.neocities.org/design/wiregrrrlbutton.gif", "WIREGRRRL button"),
        new NeocitiesButton("https://other-space.neocities.org/", "https://other-space.neocities.org/resources/OSbuttonX.gif", "Other Space button"),
        new NeocitiesButton("https://sadgrl.online/", "https://sadgrl.online/assets/images/buttons/sadgrlonline.gif", "sadgrl button"),
        new NeocitiesButton("https://excessiveclownery.neocities.org/", "https://excessiveclownery.neocities.org/Buttons/DaCircus.png", "da circus button"),
        new NeocitiesButton("https://doctorispie.neocities.org/", "https://doctorispie.neocities.org/images/DoclingButton.png", "Docling invasion button"),
        new NeocitiesButton("https://oberon-industries.neocities.org/", "https://oberon-industries.neocities.org/buttons/OberonButton.gif", "Oberon Industries button"),
        new NeocitiesButton("https://undeadmel.neocities.org/", "https://doctorispie.neocities.org/images/Mel.png", "Undead Mel button"),
        new NeocitiesButton("https://timelesstinka.neocities.org/", "https://timelesstinka.neocities.org/Images/buttonless.png", "Timelessness button"),
        new NeocitiesButton("https://timewatcher.neocities.org/", "https://timewatcher.neocities.org/img/site-button.gif", "A button that will take you to Timewatcher's website/fake OS."),
        new NeocitiesButton("https://store.steampowered.com/app/2256450/RAM_Random_Access_Mayhem/", "https://deep-freezer.neocities.org/images/RAM.gif", "RAM: Random Access Mayhem"),
        new NeocitiesButton("https://homestuck.com/", "/images/misc_buttons/HomestuckButton.gif", "Read Homestuck"),
        new NeocitiesButton("https://413.gay/", "/images/misc_buttons/sburb.gif", "Read Homestuck via the UHC"),
        new NeocitiesButton("https://acdsstuck.neocities.org/", "https://acdsstuck.neocities.org/MiscAssets/ACDSstuckButton.gif", "Read ACDSStuck!"),
        new NeocitiesButton("https://acdsstuck.neocities.org/", "https://acdsstuck.neocities.org/MiscAssets/izzybutton.gif", "Read ACDSStuck! Feat. Izzy Pendles"),
        new NeocitiesButton("https://sporewhore.neocities.org/", "https://sporewhore.neocities.org/Button.gif", "Sporewhore button"),
    ]

    const my_buttons = [
        new NeocitiesButton("https://store.steampowered.com/app/2256450/RAM_Random_Access_Mayhem/", "https://deep-freezer.neocities.org/images/RAM.gif", "RAM: Random Access Mayhem"),
        new NeocitiesButton("https://homestuck.com/", "/images/misc_buttons/HomestuckButton.gif", "Read Homestuck"),
        new NeocitiesButton("https://acdsstuck.neocities.org/", "https://acdsstuck.neocities.org/MiscAssets/ACDSstuckButton.gif", "Read ACDSStuck!"),
        new NeocitiesButton("https://acdsstuck.neocities.org/", "https://acdsstuck.neocities.org/MiscAssets/izzybutton.gif", "Read ACDSStuck! Feat. Izzy Pendles"),
    ]

    let buttons : NeocitiesButton[] = all_buttons;
    let showing_my_buttons : boolean = false;

    function swap_buttons(e : Event) {
        if(!e.target) return;
        if((<HTMLInputElement>e.target).checked) {
            buttons = my_buttons;
            showing_my_buttons = true;
        } else {
            buttons = all_buttons;
            showing_my_buttons = false;
        }
        buttons = buttons;
    }

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
            {#if showing_my_buttons}
                <p>These buttons were made by me! Feel free to use them. Credit's appreciated, though just leaving a <a href="/comments/">comment</a> would more than suffice.</p>
            {/if}
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
            <li><a href="https://cohost.org/coldcalzone">Cohost</a></li>
            <li><a href="https://coldcalzone.itch.io">Itch.io</a></li>
            <li><a href="https://github.com/ColdCalzone">Github</a></li>
            <li><a href="/shopfalls/prelude/">Shopfalls</a></li>
            <li><a href="https://acdsstuck.neocities.org/">ACDSstuck</a></li>
            <li><a href="/homestuck/">Homestuck</a></li>
        </ul>
    </div>
    <label class="button-switch">
        <input type="checkbox" on:change={ swap_buttons }/>
        <span class="button-slider" />
    </label>
</footer>
