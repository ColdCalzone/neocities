<script>
    import Footer from "$lib/homestuck/Footer.svelte";
    import Navigation from "$lib/Navigation.svelte";
</script>
<svelte:head>
    <title>Homestuck | Deep Freezer</title>
    <link href="/main.css" rel="stylesheet" type="text/css" media="all">
    <link href="/homestuck/hs.css" rel="stylesheet" type="text/css" media="all">
    <meta name="description" content="A directory of many Homestuck theories, essays, etc.">
    <meta name="author" content="Cold Calzone">
</svelte:head>

<Navigation custom={[["/homestuck/", "Home(stuck)"], ["/homestuck/classpects", "Classpect Analysis (WIP DRAFT BAD ETC.)"]]} banner="/homestuck/images/banner.png"/>
<!-- <Navigation /> -->

<slot />

<Footer />