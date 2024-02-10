<script lang="ts">
    import Box from "$lib/Box.svelte";

    import { marked } from "marked";
    const posts = import.meta.glob("$lib/blog/*", {eager: true, query: "raw"});
    const post_contents : string[] = Object.values(posts).map( (x : any) => x.default ).reverse();

    const buttons = import.meta.glob("$lib/images/misc_buttons/*");
    const button_srcs = Object.keys(buttons);

    
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

<div id="flex">
    <main>
        <h1>Welcome to my website!</h1>
        
        <p>I'm Cold! I'm a programmer, artist, and game developer.</p>
        <p>This site contains my games, art, and whatever else I want to put on it.</p>
        <hr>
        <Box title="I make things!">
            <p>I make games at <a href="https://coldcalzone.itch.io">my Itch!</a></p>
            <p>More secretive is my <a href="art.html">art</a>, which I don't post elsewhere!</p>
        </Box>
        <Box title="Reading?">
            <p>I read things! Sometimes! Less than I'd like!</p>
            <p>Here's a? <a href="read.html">Reading list?</a> It'll have stuff I've read/wanna read.</p>
            <p>Be warned, it's gonna be all compsci all the way down.</p>
        </Box>
        <Box title="Open Source!">
            <h4>I use <a href="https://godotengine.org">Godot</a> to make my games, all of which have their source available on my github (see links)</h4>
            <h5>Additionally, if you'd like to see the code behind this site (There's a few moving parts, y'know!) it's available <a href="https://github.com/ColdCalzone/neocities">here!</a></h5>
        </Box>
        <div>
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
        </div>
    </main>
    <aside id="leftSidebar">
        <div id="latestGame">
            <h1>My Latest Game!</h1>
            <iframe src="https://itch.io/embed/1397309?bg_color=0d1120&amp;fg_color=cccccc&amp;link_color=f2843c&amp;border_color=bebebe" width="100%" height="200" frameborder="0"><a href="https://coldcalzone.itch.io/bread">Bread Bread Breadvolution: Extra Toasty by ColdCalzone</a></iframe>
        </div>
        <div>
            <h2>About Me</h2>
            <Box>
                <ul style="padding-left:10px;">
                    <li>I've been programming for 11 years now (what the fuck)</li>
                    <li>I've been doing game development for 3 years</li>
                    <hr>
                    <li>I'm 17!!!</li>
                    <li>any pronouns!!!!!</li>
                    <li>My favorite language is Rust</li>
                </ul>
            </Box>
            <hr>
            <div class="box">
                <p>Last Updated: <span id="lastupdate"></span></p>
                <p>You are visitor #<span id="hitcount"></span></p>
            </div>
            <div class="buttonsContainer">
                <div class="buttons">
                    {#each button_srcs as src}
                    <img {src}>
                    {/each}
                </div>   
            </div>
        </div>
    </aside>
</div>