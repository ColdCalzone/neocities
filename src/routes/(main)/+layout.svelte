<script>
    import Footer from "$lib/Footer.svelte";
    import Navigation from "$lib/Navigation.svelte";
</script>
<head>
    <title>Home of Cold Calzones</title>
    <link href="/main.css" rel="stylesheet" type="text/css" media="all">
    <meta name="description" content="A website full of stuff made by a person">
    <meta name="author" content="Cold Calzone">
</head>

<Navigation />

<slot />

<Footer />