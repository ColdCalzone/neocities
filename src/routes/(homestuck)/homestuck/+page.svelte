<script>
    import Box from "$lib/Box.svelte";
</script>

<style>
    .wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    @media only screen and (max-width: 850px) {
        .box-container {
            width: 100%;
            margin: 5px;
            display: block;
        }
        .wrapper {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>

<div class="flex">
    <div>
        <div>
            <a href="https://413.gay"><img style="width: 100%;" src="https://www.homestuck.com/assets/HS_logo-d428d19c5a20af8e0e84ec06a0a67ab6add95a595c18a2d412031d7615edc2c7.png"></a>
        </div>
        <main>
            <div>
                <h1 style="text-align: center;">
                    Let me tell you about HOMESTUCK.
                </h1>
                <p>
                    Recently I've gotten into Homestuck. I don't even remember when I finished the comic, but I've been a fan for, like, 7 years? But now I'm actually actively thinking about it. I've thought about it so much I decided to dedicate part of my site to it.
                </p>
                <p>
                    Part of this is, undoubtedly, <a href="https://acdsstuck.neocities.org/">because I'm part of a team working on an MSPFA</a>. Turns out, when you start trying to make a story in direct response to another, you start to analyze the original.
                </p>
                <h2 style="text-align: center;">
                    So what's here?
                </h2>
                <p>
                    I've gotten into the habit of making essays across many messages on Discord talking about the systems of SBURB or the logistics of this and that, and well... I want to actually preserve those somewhere, and give them more thought than the hour of fervent typing they can be spared on Discord. You'll find a directory of those, starting with my theorizing on Classes.
                </p>
            </div>
            <h1 style="text-align: center;">Directory of Essays</h1>
            <div class="wrapper">
                <div class="box-container">
                    <Box>
                        <h2><a href="/homestuck/classpects/">An accidental analysis of Homestuck's Classes</a></h2>
                        <hr>
                        This is the big one I wanted to make this part of my site for. And it SUCKS! I want to fix it up some time, but for now I NEED to archive this.
                    </Box>
                </div>
            </div>
        </main>
    </div>
</div>
