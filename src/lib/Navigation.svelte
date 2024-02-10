<style>
    #header {
        width: 20%;
        min-width: 270px;
        background-color: #00000000;
        height: 150px;
        background-image: url('/images/banner.png');
        
        background-repeat: no-repeat;
        background-position: center;
        position: fixed;
    }

    /* navigation section!! */
    #navbar {
        height: calc(100vh - 150px);
        /* navbar color */
        background-color: #00000000;
        position: fixed;
        bottom: 0;
        width: 20%;
        min-width: 270px;
    }

    #navbar ul {
        padding: 0;
        padding-top: 20px;
        padding-bottom: 20px;
        list-style-type: none;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #navbar li {
        padding-top: 10px;
        text-align: center;
        margin: auto;
    }

    
    a {
        color: #d7cdf7;
        /* navbar text color */
        font-weight: 800;
        text-decoration: none;
        /* this removes the underline */
    }

    
    a:hover {
        color: #ffffff;
        text-decoration: underline;
    }

    #navbar div {
        margin: 0 auto;
        height: 100%;
    }

    #navigation {
        float: left;
        height: 100vh;
        width: 20%;
        min-width: 270px;
    }


    @media only screen and (max-width: 800px) {
        #navbar ul {
            flex-wrap: wrap;
        }

        #navbar div {
            width: 100%;
        }
    }
</style>
<div id="navigation">
    <div id="header"></div>
    <nav id="navbar">
        <div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/projects/">Projects</a></li>
                <li><a href="/art/">Art</a></li>
                <li><a href="/read/">Reading</a></li>
            </ul>
        </div>
    </nav>
</div>