<script>
    const buttons = [
        "/images/misc_buttons/tyg.gif",
        "/images/misc_buttons/nonbinary.png",
        "/images/misc_buttons/portal1.png",
        "/images/misc_buttons/transnow2.gif",
        "/images/misc_buttons/queercoded.png",
        "/images/misc_buttons/badapple.gif",
        "/images/misc_buttons/krusie.png",
        "/images/misc_buttons/firefox.gif",
        "/images/misc_buttons/portal2.png",
        "/images/misc_buttons/lagtrain.gif",
        "/images/misc_buttons/i-was-on-cohost.gif",
  ]
</script>
<style>
    .buttonsContainer {
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        width:100%;
    }

    .buttons {
        display: inline-block;
        vertical-align: middle;
        text-align: center;
    }

    .buttons * {
        display: inline-block;
        vertical-align: middle;
        margin-top:3px;
        margin-left:3px;
    }
</style>
<div class="buttonsContainer">
    <div class="buttons">
        {#each buttons as src}
        <img {src}>
        {/each}
    </div>   
</div>
