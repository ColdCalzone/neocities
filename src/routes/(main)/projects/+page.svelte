<script>
    import Box from "$lib/Box.svelte";
</script>
<style>
    :root {
        --playButtonColor: #d8a825;
    }
    .projectBox > img {
        width: 64px;
        display: inline-block; 
        position: absolute;
        right: 0px;
        top: 0px;
    }
    .projectBox {
        display:flex;
        position: relative;
        width: 100%;
    }
    .projectBox > a {
        margin-right:64px;
    }
    .playButton {
        transition-duration: 0.2s;
        background-color: transparent; /* Green */
        border: none;
        color: white;
        padding: 8px 16px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
        border: 2px solid var(--playButtonColor);
        border-radius: 10px;
    }

    .playButton:hover {
        background-color: var(--playButtonColor);
        color: white;
    }
</style>

<div class="flex">
    <main>
        <h1>Games</h1>
        <p>I spend a lot of my time making games, to the chagrin of my friends who will inevitably see me incessantly post in-dev screenshots and loudly complaining about something being broken. Below will be a few of those games.</p>
        <Box>
            <div class="projectBox">
                <a href="https://github.com/ColdCalzone/bread-bread-breadvolution"><h2>Bread Bread Breadvolution</h2></a>
                <img src="/images/icons/bread1.png" alt="The logo of Bread Bread Breadvolution">
            </div>
            <p>This project was made for the <a href="https://itch.io/jam/godot-wild-jam-26">26th Godot Wild Jam</a>. This was my first submission despite being in the server for a few months and it scored 8th place overall, which is incredible and is way higher than I expected!</p>
            <strong>Note: This does not hold up to my current standard.</strong>
            <br>
            <button class="playButton" on:click={ () => window.location.href = "https:\/\/coldcalzone.itch.io/bread-bread-breadvolution" }>Play it now!</button>
        </Box>
        <Box>
            <div class="projectBox">
                <a href="https://github.com/ColdCalzone/fire-and-fondness-2-EE"><h2>Fire & Fondness 2: Enhanced Edition</h2></a>
                <img src="/images/icons/F&F2.png" alt="The logo of F&F2">
            </div>
            <p>This project is the biggest undertaking I’ve had yet. This is a mod of <a href="https://johngabrieluk.itch.io">John Gabriel’s</a> <a href="https://johngabrieluk.itch.io/fire-and-fondness-2">Fire & Fondness 2</a> adding an extra seven levels and several components. It was of course made with Godot.</p>
            <button class="playButton" on:click={ () => window.location.href ="https:\/\/coldcalzone.itch.io/ff2-ee" }>Play it now!</button>
        </Box>
        <Box>
            <div class="projectBox">
                <a href="https://github.com/ColdCalzone/Bread-Bread-Breadvolution-Extra-Toasty"><h2>Bread Bread Breadvolution: Extra Toasty</h2></a>
                <img src="/images/icons/BreadLogo.png" alt="The logo of Bread Bread Breadvolution: Extra Toasty">
            </div>
            <p>This project was a remake of the old Bread Bread Breadvolution. This game features brand new input detection, an extra level, and way more fun! This project was made in Godot in the span of 9 days.</p>
            <button class="playButton" on:click={ () => window.location.href ="https:\/\/coldcalzone.itch.io/bread" }>Play it now!</button>
        </Box>
        <Box>
            <div class="projectBox">
                <a href="https://github.com/ColdCalzone/GWJ-47"><h2>Mamus</h2></a>
                <img src="/images/icons/Mamus.gif" alt="The robot protagonist of Mamus.">
            </div>
            <p>This project was made for the <a href="https://itch.io/jam/godot-wild-jam-47">47th Godot Wild Jam</a>. I really liked working on it, playing with viewports to make the symmetry effect was surprisingly easy. The hardest part (save for level design) was fine tuning the controls and audio - this is my first time using Rigid Bodies for the player, and I think it shows with the code turning the player into a glorified Kinematic Body with physics overhead.</p>
            <button class="playButton" on:click={ () => window.location.href ="https:\/\/coldcalzone.itch.io/mamus" }>Play it now!</button>
        </Box>
        <Box>
            <div class="projectBox">
                <a href="https://github.com/ColdCalzone/GWJ-52"><h2>Refractoplasm</h2></a>
                <img src="/images/icons/Ghost.gif" alt="A ghost!">
            </div>
            <p>This project was made for the <a href="https://itch.io/jam/godot-wild-jam-52">52nd Godot Wild Jam</a>. I had a lot of stuff going on during the jam so the game is sub-par to say the least. I fundamentally like the idea of the game but the crunch meant some mechancis weren't as fleshed out as I wanted them to be. One of the biggest time sinks on this project was making the grid mechanic... yeah that took like 3 days. To rub salt in this gaping wound, despite playtesters liking it, it's clear the people participating in the jam didn't, since I nearly got dead last and a mere 5 votes.</p>
            <strong>Note: This does not hold up to my current standard...</strong>
            <br>
            <br>
            <strong><i>...yet?</i></strong>
            <br>
            <br>
            <button class="playButton" on:click={ () => window.location.href ="https:\/\/coldcalzone.itch.io/refractoplasm" }>Play it now!</button>
        </Box>
        <h1>Misc.</h1>
        <Box>
            <div class="projectBox">
                <a href="https://github.com/ColdCalzone/minimal-brainfuck-interpreter"><h2>Minimal Brainfuck Interpretter</h2></a>
                <img src="/images/icons/BF-Clearer.png" alt="A short Brainfuck program that clears the entire tape.">
            </div>
            <p>This project was made to learn C++. <a href="https://esolangs.org/wiki/Brainfuck">BrainFuck</a> is an easy to implement language, with several pieces of example code to test against to make a faithful implementation.</p>
        </Box>
        <Box>
            <div class="projectBox">
                <a href="https://github.com/ColdCalzone/discord_plays"><h2>Discord Plays</h2></a>
                <img src="/images/icons/Discord-Logo-Color.png" alt="The Discord logo">
            </div>
            <p>This project is a remiplementation of a feature from an abandoned project. This effectively allows Discord to control your computer, and is intended to let a Discord server host a game night with a host streaming and viewers watching and controlling the game in real time. Due to the nature of this bot, it cannot be hosted publically as a normal bot, and must be ran in a new instance on the host’s computer. Instructions, source code, and examples can be seen in the repository.</p>
        </Box>
    </main>
</div>