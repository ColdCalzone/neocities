<script>
    import { onMount } from "svelte";

    onMount(() => {
        let x = document.getElementById("hcb");
        // @ts-ignore
        let code = x.innerText;
        // @ts-ignore
        x.remove();

        let script = document.createElement("script");
        script.innerText = code;

        // @ts-ignore
        document.getElementById("hcb_container").appendChild(script);
    })
</script>

<div class="flex">
    <main style="max-width: 100%;">
        <div id="hcb_container">
            <!-- begin wwww.htmlcommentbox.com -->
            <div id="HCB_comment_box"><a href="http://www.htmlcommentbox.com">Comment Form</a> is loading comments...</div>
            <link rel="stylesheet" type="text/css" href="https://www.htmlcommentbox.com/static/skins/bootstrap/twitter-bootstrap.css?v=0" />
            <script type="text/javascript" id="hcb"> /*<!--*/ if(!window.hcb_user){hcb_user={};} (function(){var s=document.createElement("script"), l=hcb_user.PAGE || (""+window.location).replace(/'/g,"%27"), h="https://www.htmlcommentbox.com";s.setAttribute("type","text/javascript");s.setAttribute("src", h+"/jread?page="+encodeURIComponent(l).replace("+","%2B")+"&mod=%241%24wq1rdBcg%24G8e0.yiZvZ41BI%2FlQF8FE1"+"&opts=16798&num=10&ts=1707785265173");if (typeof s!="undefined") document.getElementsByTagName("head")[0].appendChild(s);})(); /*-->*/ </script>
            <!-- end www.htmlcommentbox.com -->
        </div>
    </main>
</div>