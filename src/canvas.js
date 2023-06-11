const canvas = document.createElement("canvas");
canvas.id = "canvas";
// sidebar containing color changer buttons
var palette = document.createElement("div");
palette.id = "palette";

// The controls, at the bottom
var controlsDiv = document.createElement("div")
controlsDiv.id = "drawingControl";

var paintButton = document.createElement("button");
paintButton.id = "brush";
var paintImg = document.createElement("img");
paintImg.src = "images/drawing/brush.png";
paintButton.appendChild(paintImg);
paintButton.onclick = setModeDraw;

var eraseButton = document.createElement("button");
eraseButton.id = "erase";
var eraseImg = document.createElement("img");
eraseImg.src = "images/drawing/eraser.png";
eraseButton.appendChild(eraseImg);
eraseButton.onclick = setModeErase;

controlsDiv.appendChild(paintButton);
controlsDiv.appendChild(eraseButton);

// The button making the controls appear / canvas activate
var toggleDiv = document.createElement("div");
toggleDiv.id = "drawingToggle";
var toggleButton = document.createElement("button");
toggleButton.id = "toggle";
var paletteImg = document.createElement("img");
paletteImg.src = "images/drawing/palette.png";
toggleButton.appendChild(paletteImg);
toggleButton.onclick = playAnimations;
toggleDiv.appendChild(toggleButton);

document.body.appendChild(canvas);
document.body.appendChild(controlsDiv);
document.body.appendChild(toggleDiv);
document.body.appendChild(palette);

const ctx = canvas.getContext("2d");
// Width / Height of pixels
var pixelX = 20;
var pixelY = 20;

// Last selected color selecting box
var last = undefined; 

var drawing = false;

// Are the drawing tools out
var drawingsOut = false;

// A variable containing the function being called during drawing, allowing it to erase
var rect = ctx.rect;
/*
    0: Draw
    1: Erase
*/
var mode = 0;

// Brings out / puts away drawing tools
function playAnimations() {
    drawingsOut = !drawingsOut;
    if(drawingsOut) {
        palette.className = "animate";
        controlsDiv.className = "animate";
        canvas.className = "animate";
    } else {
        palette.className = "";
        controlsDiv.className = "";
        canvas.className = "";
    }
}

// Makes clicking start drawing again
function setModeDraw() {
    canvas.classList.remove("erase");
    mode = 0;
    rect = ctx.rect;
}

// Makes clicking start erasing again
function setModeErase() {
    canvas.classList.add("erase");
    mode = 1;
    rect = ctx.clearRect;
}

const colors = [     
    "#000000",
    "#FFFFFF",
    "#FF0000",
    "#00FF00",
    "#0000FF",
];

// Does some silly math with the pixel sizes
function resizeCanvas() {
    var height = window.innerHeight;
    var width = window.innerWidth;

    if(width > height) {
        canvas.width = 2000;
        var ratio = width / height;
        canvas.height = canvas.width / ratio;
    } else { 
        canvas.height = 2000;
        var ratio = height / width;
        canvas.width = canvas.height / ratio;
    }
    
}

addEventListener('resize', resizeCanvas);

// Begin drawing and set a pixel
function startDraw(event) {
    ctx.beginPath();
    var x = event.x / canvas.clientWidth * canvas.width;
    var y = event.y / canvas.clientHeight * canvas.height;

    x /= pixelX;
    x = Math.floor(x) * pixelX;
    y /= pixelY;
    y = Math.floor(y) * pixelY;

    rect.apply(ctx, [x, y, pixelX, pixelY]);
    ctx.fill();

    drawing = true;
}

// Set pixels at every point overlapped by the mouse cursor
function draw(event) {
    if(!drawing) return;
    var x = event.x / canvas.clientWidth * canvas.width;
    var y = event.y / canvas.clientHeight * canvas.height;

    x /= pixelX;
    x = Math.floor(x) * pixelX;
    y /= pixelY;
    y = Math.floor(y) * pixelY;

    rect.apply(ctx, [x, y, pixelX, pixelY]);
    ctx.fill();

}

// Stop drawing when the mouse is moved
function endDraw(event) {
    drawing = false;
    ctx.closePath();
}

canvas.addEventListener('mousedown', startDraw, false); 

canvas.addEventListener('mousemove', draw, false); 

canvas.addEventListener('mouseup',   endDraw, false); 

// Mobile
canvas.addEventListener('touchstart', startDraw, false); 

canvas.addEventListener('touchmove', draw, false); 

canvas.addEventListener('touchend',   endDraw, false); 
canvas.addEventListener('touchcancel',   endDraw, false); 


resizeCanvas();

// Generates a function which changes the color... yeah.
function generateChangeColor(num, col) {
    return function(e) {
        if(mode == 1) { return; }
        if(last != undefined) {
            last.style.outlineColor = "#000000";
        }
        col.style.outlineColor = "#FFFFFF";
        last = col;
        ctx.fillStyle = colors[num];
    };
}

var addColor = document.createElement("input");
addColor.innerText = "+"
addColor.type = "color";
addColor.id = "colorpick";
// add color to the colors thingy and regenerate palette
addColor.onchange = (e) => {
    colors.push(e.target.value);
    generatePalette();
};
addColor.oninput = (e) => {
    e.target.style.backgroundColor = e.target.value;
};

// Populates the palette
function generatePalette() {
    palette.innerHTML = '';
    for(var color = 0; color < colors.length; color += 1) {
        var paletteColor = document.createElement("div");
        paletteColor.className = "paletteColor";
        paletteColor.style.backgroundColor = colors[color];
        paletteColor.num = color;
        palette.appendChild(paletteColor);
        paletteColor.onmousedown = generateChangeColor(color, paletteColor);
        // lol
        if(color == 0) paletteColor.click();
    }
    palette.appendChild(addColor);
}

generatePalette()