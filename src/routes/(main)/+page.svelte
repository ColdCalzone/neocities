<script lang="ts">
    import Box from "$lib/Box.svelte";
    import Buttons from "$lib/Buttons.svelte";
    import Blog from "$lib/Blog.svelte";
    import { browser } from "$app/environment";

    if(browser) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() 
        {
            if (this.readyState == 4 && this.status == 200) 
            {
                let site_data = JSON.parse(this.responseText);
                let num_arr = site_data.info.views.toString().split("");
                let num_str = "";
                for (let i = 0; i < num_arr.length; i++) 
                {
                    num_str += num_arr[i];
                    if ( (num_arr.length-1 - i) % 3 == 0 && (num_arr.length-1 - i) != 0 ) {num_str += ",";}
                    let date_str = site_data.info.last_updated;
                    let date_obj = new Date(site_data.info.last_updated);
                    document.getElementById("lastupdate")!.innerHTML = (date_obj.getMonth()+1) + "-" + date_obj.getDate() + "-" + date_obj.getFullYear();
                }
                document.getElementById("hitcount")!.innerHTML = num_str;
            }
        };
        xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=deep-freezer", true);
        xhttp.send();
    }
</script>

<style>
    .horizontal-box {
        display: flex;
        gap: 10px;
    }

    :global(.horizontal-box > *) {
        flex: 1;
    }

    :global(.changes-box > div) {
        height: 200px;
        overflow-y: auto;
    }

    @media only screen and (max-width: 850px) {
        .horizontal-box {
            display: block;
        }
    }

    @keyframes greensunblink {
        0% {
            color: #00ed45;
        }

        100% {
            color: #00d246;
        }
    }

    @font-face {
    	font-family: 'courierstuck';
    	src: url("/homestuck/greensuntext/courierstuck.ttf");
    }

    .greensun {
        animation: greensunblink 100ms infinite steps(2, end);
        font-family: 'courierstuck'; 
    }
</style>

<div class="flex">
    <main>
        <h1>Welcome to my website!</h1>
        <div class="horizontal-box">
            <Box title="I make things!">
                <p><a href="https://coldcalzone.itch.io">My itch.io page</a> has some games I've made.<br>It's mostly jam games, and they're certainly not my best work.</p>
                <p>I show off some <a href="/art">art</a> on this site, too. I use <a href="https://www.aseprite.org/">Aseprite</a> for most of my work.</p>
            </Box>
            <Box title="Reading?">
                <p>I read things! Sometimes! Less than I'd like!</p>
                <p>Here's a? <a href="/read/">Reading list?</a> It'll have stuff I've read/wanna read.</p>
            </Box>
        </div>
        <Box title="Open Source!" style="text-align: center;">
            <h4>I use <a href="https://godotengine.org">Godot</a> to make my games, all of which have their source available on my github (see links)</h4>
            <p>I try to use open source tools for everything. Some day I'll contribute my own tools to the open source pool, but for now all I can do is show the ones I like.</p>
            <h5>if you'd like to see the code behind this site (there's a few moving parts), it's available <a href="https://github.com/ColdCalzone/neocities">here!</a></h5>
        </Box>
        <div style="margin-top:10px" class="changes-box horizontal-box">
            <Box>
                <h3>Changelog</h3>
                <hr>
                <h4>12/27/24</h4>
                <ul>
                    <li>Patched my age.</li>
                    <li>Changed displayed <a href="/art">art</a>.</li>
                    <li>Added some more music.</li>
                </ul>
                <hr>
                <h4>8/24/24</h4>
                <ul>
                    <li>Added <a href="/listening/">a page for the music I'm listening to</a>. There's still *so much* to add.</li>
                </ul>
                <h4>7/21/24</h4>
                <ul>
                    <li>Added <a class="greensun" href="/homestuck/greensuntext/">GREEN SUN</a> text generator</li>
                    <li>Fixed navigation covering the home button</li>
                </ul>
                <h4>4/13/24</h4>
                <ul>
                    <li>Added rudimentary image functionality to blog posts</li>
                    <li>Added the <a href="https://sporewhore.neocities.org/">sporewhore</a> button</li>
                </ul>
                <h4>2/20/24</h4>
                <ul>
                    <li>Added a Homestuck button I made</li>
                </ul>
                <h4>2/19/24</h4>
                <ul>
                    <li>Added a toggle to the footer to show only the buttons I made.</li>
                </ul>
                <h4>2/18/24</h4>
                <ul>
                    <li>Made the colors variables. Now hs.css is cooler. :)</li>
                </ul>
                <h4>2/12/24 - 2/17/24</h4>
                <ul>
                    <li>Split the blog into its own page (experimental)</li>
                    <li>Made the site mobile compatible</li>
                    <li>Added nullring</li>
                    <li>Homestuck</li>
                    <li>Rewrote site in Svelte</li>
                </ul>
            </Box>
            <Box>
                <h3>TODO</h3>
                <hr>
                <ul>
                    <li>Think of stuff to put on the TODO list</li>
                </ul>
            </Box>
        </div>
        <Blog locked="5"/>
        
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
                    <li>I've been programming for 12 years now (what the fuck)</li>
                    <li>I've been doing game development for 4 years</li>
                    <hr>
                    <li>I'm 18!!!</li>
                    <li>any pronouns</li>
                    <li>My favorite language is Rust</li>
                </ul>
            </Box>
            <hr>
            <Box>
                <p>Last Updated: <span id="lastupdate"></span></p>
                <p>You are visitor #<span id="hitcount"></span></p>
            </Box>
            <Buttons />
        </div>
    </aside>
</div>
