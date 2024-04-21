<script>
    import Canvas from "$lib/Canvas.svelte";
    import Footer from "$lib/Footer.svelte";
    import Navigation from "$lib/Navigation.svelte";
</script>
<svelte:head>
    <title>Home of Cold Calzones</title>
    <link href="/main.css" rel="stylesheet" type="text/css" media="all">
		<link rel="icon" href="/favicon.png" />
    <meta name="description" content="A website full of stuff made by a person">
    <meta name="author" content="Cold Calzone">
</svelte:head>

<Navigation />

<slot />

<Footer />

<Canvas />
