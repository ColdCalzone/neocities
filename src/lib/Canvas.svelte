<script lang="ts">
    import { onMount } from "svelte";
    let palette : HTMLDivElement;
    let controls_div  : HTMLDivElement;
    let canvas  : HTMLCanvasElement;
    let colors : string[] = [ 
        "#030621",
        "#FFFFFF",
        "#FF0000",
        "#00FF00",
        "#0000FF",
    ];

    let setModeDraw = (e : any) => {}
    let setModeErase = (e : any) => {}
    let playAnimations = (e : any) => {}
    let changeColor = (i : number) => {}
    let addColor = (e : any) => {}
    let colorAdderColorize = (e : any) => {}

    onMount(() => {
        console.log("AAAAAAAAAAAaa");
        palette = document.getElementById("palette") as HTMLDivElement;
        controls_div = document.getElementById("drawing-control") as HTMLDivElement;
        canvas = document.getElementById("canvas") as HTMLCanvasElement;

        const ctx = canvas.getContext("2d");

        const pixelX = 8;
        const pixelY = 8;

        type State = {
            mode : "draw" | "erase"
            func : ((x: number, y: number, w: number, h: number) => void) | undefined
            drawing : boolean
            last : HTMLElement | undefined
        }

        let state : State = {
            mode: "draw",
            func: ctx ? ctx.rect : undefined,
            drawing: false,
            last: undefined
        }

        let controls_out : boolean = false;
        
        // Animates drawing tools
        playAnimations = (event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }) => {
            controls_out = !controls_out;
            console.log(palette);
            if(controls_out) {
                palette!.classList.add("animate");
                controls_div!.classList.add("animate");
                canvas!.classList.add("animate");
            } else {
                palette!.classList.remove("animate");
                controls_div!.classList.remove("animate");
                canvas!.classList.remove("animate");
            }
        }

        setModeDraw = (event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }) => {
            canvas!.classList.remove("erase");
            state.mode = "draw";
            state.func = ctx!.rect;
        }

        setModeErase = (event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }) => {
            canvas!.classList.add("erase");
            state.mode = "erase";
            state.func = ctx!.clearRect;
        }

        addColor = (e : Event) => {
            colors.push((e.target! as any).value);
            colors = colors;
        }

        colorAdderColorize = (e : Event) => {
            (e.target! as HTMLElement).style.backgroundColor = (e.target! as any).value;
        }

        function resizeCanvas() {
            let height = window.innerHeight;
            let width = window.innerWidth;

            if(width > height) {
                canvas!.width = 2000;
                let ratio = width / height;
                canvas!.height = canvas!.width / ratio;
            } else { 
                canvas!.height = 2000;
                let ratio = height / width;
                canvas!.width = canvas!.height / ratio;
            }
            
        }
        
        addEventListener('resize', resizeCanvas);
        
        // Begin drawing and set a pixel
        function startDraw(event : any) {
            ctx!.beginPath();
            let x = event.x / canvas!.clientWidth * canvas!.width;
            let y = event.y / canvas!.clientHeight * canvas!.height;

            x /= pixelX;
            x = Math.floor(x) * pixelX;
            y /= pixelY;
            y = Math.floor(y) * pixelY;

            state.func!.apply(ctx!, [x, y, pixelX, pixelY]);
            ctx!.fill();

            state.drawing = true;
        }

        // Set pixels at every point overlapped by the mouse cursor
        function draw(event : any) {
            if(!state.drawing) return;
            let x = event.x / canvas!.clientWidth * canvas!.width;
            let y = event.y / canvas!.clientHeight * canvas!.height;

            x /= pixelX;
            x = Math.floor(x) * pixelX;
            y /= pixelY;
            y = Math.floor(y) * pixelY;

            state.func!.apply(ctx!, [x, y, pixelX, pixelY]);
            ctx!.fill();

        }

        // Stop drawing when the mouse is moved
        function endDraw(event : any) {
            state.drawing = false;
            ctx!.closePath();
        }

        canvas.addEventListener('mousedown', startDraw, false); 
        canvas.addEventListener('mousemove', draw, false); 
        canvas.addEventListener('mouseup', endDraw, false); 
        // Mobile
        canvas.addEventListener('touchstart', startDraw, false); 
        canvas.addEventListener('touchmove', draw, false); 
        canvas.addEventListener('touchend', endDraw, false); 
        canvas.addEventListener('touchcancel', endDraw, false); 
        document.getElementById("colorpick")!.innerText = "+";

        resizeCanvas();


        changeColor = (i: number) => {
            if(state.mode == "erase") return;
            let col = palette!.children[i] as HTMLElement;
            if(state.last != undefined) {
                state.last.style.outlineColor = "#000000";
            }
            col.style.outlineColor = "#FFFFFF";
            state.last = col;
            ctx!.fillStyle = colors[i];
        }
    });

    $: {
        if(palette) {
            let element = palette.children[(palette.children.length - 1)] as HTMLElement;
            if(element.nodeName.toLowerCase() == "div") {
                element.click();
            }
        }
    }
</script>

<canvas id="canvas"></canvas>
<div id="drawing-control">    
    <button id="brush" on:click={ setModeDraw }>
        <img src="/images/drawing/brush.png">
    </button>
    <button id="erase" on:click={ setModeErase }>
        <img src="/images/drawing/eraser.png">
    </button>
</div>
<div id="drawing-toggle">
    <button id="toggle" on:click={ playAnimations }>
        <img src="/images/drawing/palette.png">
    </button>
</div>
<div id="palette">
    {#each colors as color, i}
        <div class="palette-color" style="background-color: {color};" on:mousedown={ () => { changeColor(i) } }></div>
    {/each}
    <input id="colorpick" type="color" on:change={ addColor } on:input={ colorAdderColorize }>
</div>
