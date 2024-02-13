<script>
    import Footer from "$lib/Footer.svelte";
    import Navigation from "$lib/Navigation.svelte";
</script>
<head>
    <title>Homestuck | Deep Freezer</title>
    <link href="/homestuck/hs.css" rel="stylesheet" type="text/css" media="all">
    <meta name="description" content="A directory of many Homestuck theories, essays, etc.">
    <meta name="author" content="Cold Calzone">
</head>

<Navigation custom={[["/homestuck/", "Home(stuck)"], ["/homestuck/classpects", "Classpect Analysis (WIP DRAFT BAD ETC.)"]]}/>

<slot />

<Footer />