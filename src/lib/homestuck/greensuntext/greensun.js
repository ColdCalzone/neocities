import GIF from "gif.js";

// Custom kerning values
const KERN = {
	'AT': -1,
	'DI': -4,
	'NO': -1,
	'DS': -4,
	'_0': -2,
	':D': -4,
	':)': -4,
	':(': -6,
	':3': -6,
}

// Kerning values for the edge -- a bit imprecise, but it helps make it look better
const SPACE_KERN = {
	'Y': -1,
	'U': 3
}

// Color palette for the text
const COLORS = [
	"#1f9400",
	"#00fb00",
	"#000000",
];

// VERY SPECIFIC SHADE OF GRAY USED FOR THE MOTION BLUR STUFF
const SMEAR_COLOR = "#05050507";

// Color / position / shadow / smear for every frame
// Most of the girth comes from repeating smears like 18 times per frame
// Consider skipping to line 320.
const FRAMES = [
	{
		color: COLORS[0],
		offset: {x: 0, y: 0},
	},
	{
		color: COLORS[0],
		offset:	{x: 1, y: 1},
	},
	{
		color: COLORS[0],
		offset: {x: -1, y: -1},
	},
	{
		color: COLORS[0],
		offset: {x: 0, y: 1},
	},
	{
		color: COLORS[0],
		offset: {x: -1, y: -1},
		smear: [
			{
				offset: {x: -1, y: -1},
				direction: {x: 1, y: 0},
				iter: 13,	
			},
			{
				offset: {x: -1, y: -1},
				direction: {x: 1, y: 0},
				iter: 13,	
			},
		]
	},
	{
		color: COLORS[0],
		offset: {x: -1, y: 0},
		smear: [
			{
				offset: {x: 1, y: -1},
				direction: {x: 1, y: 0},
				iter: 12,	
			},
			{
				offset: {x: 1, y: -1},
				direction: {x: 1, y: 0},
				iter: 12,	
			},
			{
				offset: {x: 1, y: -1},
				direction: {x: 1, y: 0},
				iter: 12,	
			},
			{
				offset: {x: 1, y: -1},
				direction: {x: 1, y: 0},
				iter: 12,	
			},
			{
				offset: {x: 1, y: -1},
				direction: {x: 1, y: 0},
				iter: 12,	
			},
			{
				offset: {x: 1, y: -1},
				direction: {x: 1, y: 0},
				iter: 12,	
			},
			{
				offset: {x: 1, y: -1},
				direction: {x: 1, y: 0},
				iter: 12,	
			},
		]
	},
	{
		color: COLORS[1],
		offset: {x: -2, y: 0},
		smear: [
			{
				offset: {x: 8, y: -1},
				direction: {x: 1, y: 0},
				iter: 14,	
			},
		]
	},
	{
		color: COLORS[2],
		offset: {x: -2, y: 0},
		shadow: {
			color: COLORS[0],
			offset: {x: 0, y: 0}
		}
	},
	{
		color: COLORS[2],
		offset: {x: 0, y: 0}
	},
	{
		color: COLORS[1],
		offset: {x: 0, y: 1},
		shadow: {
			color: COLORS[0],
			offset: {x: 0, y: 0}
		}
	},
	{
		color: COLORS[2],
		offset: {x: -1, y: -2},
		shadow: {
			color: COLORS[0],
			offset: {x: 0, y: 0}
		}
	},
	{
		color: COLORS[0],
		offset: {x: -1, y: -1}
	},
	{
		color: COLORS[0],
		offset: {x: 0, y: 1}
	},
	{
		color: COLORS[0],
		offset: {x: 0, y: -1}
	},
	{
		color: COLORS[1],
		offset: {x: -1, y: 1},
		smear: [
			{
				offset: {x: -2, y: -6},
				direction: {x: 0, y: 1},
				iter: 11,
			},
			{
				offset: {x: -2, y: -6},
				direction: {x: 0, y: 1},
				iter: 11,
			},
			{
				offset: {x: -2, y: -6},
				direction: {x: 0, y: 1},
				iter: 11,
			},
			{
				offset: {x: -2, y: -6},
				direction: {x: 0, y: 1},
				iter: 11,
			},
			{
				offset: {x: -2, y: -6},
				direction: {x: 0, y: 1},
				iter: 11,
			},
			{
				offset: {x: -2, y: -6},
				direction: {x: 0, y: 1},
				iter: 11,
			},
		]
	},
	{
		color: COLORS[2],
		offset: {x: -2, y: -1},
		shadow: {
			color: COLORS[0],
			offset: {x: -1, y: -1}
		},
		smear: [
			{
				offset: {x: -2, y: -14},
				direction: {x: 0, y: 1},
				iter: 10
			},
			{
				offset: {x: -2, y: -14},
				direction: {x: 0, y: 1},
				iter: 10
			}
		]
	},
	{
		color: COLORS[1],
		offset: {x: 1, y: 0},
		shadow: {
			color: COLORS[0],
			offset: {x: 1, y: -1}
		},
		smear: [
			{
				offset: {x: -2, y: -16},
				direction: {x: 0, y: 1},
				iter: 10
			},
		]
	},
	{
		color: COLORS[0],
		offset: {x: -1, y: 1}
	},
	{
		color: COLORS[0],
		offset: {x: 1, y: -1}
	},
	{
		color: COLORS[0],
		offset: {x: -1, y: 1},
		smear: [
			{
				offset: {x: -1, y: -2},
				direction: {x: 0, y: 1},
				iter: 10
			},
			{
				offset: {x: -1, y: -2},
				direction: {x: 0, y: 1},
				iter: 10
			},
			{
				offset: {x: -1, y: -2},
				direction: {x: 0, y: 1},
				iter: 10
			},
			{
				offset: {x: -1, y: -2},
				direction: {x: 0, y: 1},
				iter: 10
			},
			{
				offset: {x: -1, y: -2},
				direction: {x: 0, y: 1},
				iter: 10
			},
			{
				offset: {x: -1, y: -2},
				direction: {x: 0, y: 1},
				iter: 10
			},
		]
	},
	{
		color: COLORS[0],
		offset: {x: 0, y: -1},
		smear: [
			{
				offset: {x: 0, y: 3},
				direction: {x: 0, y: 1},
				iter: 12
			},
			{
				offset: {x: 0, y: 3},
				direction: {x: 0, y: 1},
				iter: 12
			},
			{
				offset: {x: 0, y: 3},
				direction: {x: 0, y: 1},
				iter: 12
			},
			{
				offset: {x: 0, y: 3},
				direction: {x: 0, y: 1},
				iter: 12
			},
			{
				offset: {x: 0, y: 3},
				direction: {x: 0, y: 1},
				iter: 12
			},
			{
				offset: {x: 0, y: 3},
				direction: {x: 0, y: 1},
				iter: 12
			},
		]
	},
	{
		color: COLORS[2],
		offset: {x: 1, y: 1}
	},
	{
		color: COLORS[1],
		offset: {x: -1, y: -1}
	}
]

let options = {
	"shake": true,
	"flashing": true,
	"motion": true,
	"lightning": true,
	"shadow": true,
	"italic": false,
	"transparent": false,
}

// Array of lightning sprites -- filled when renderLightning is first called
let LIGHTNING;

// Text to render, defaults to "WHAT DID YOU DO?" because that's the original text
let renderText = "WHAT DID YOU DO?";

export function setRenderText(x) {
	renderText = x;
}

function combineBounds(bound1, bound2) {
	let newBound = {
		x: 0,
		y: 0,
	}
	if(!bound1 && !bound2) return newBound;
	if(!bound1) return {x: bound2.x, y: bound2.y};
	if(!bound2) return {x: bound1.x, y: bound1.y};

	if(bound1.x > bound2.x) {
		newBound.x = bound1.x;
	} else {
		newBound.x = bound2.x;
	}

	if(bound1.y > bound2.y) {
		newBound.y = bound1.y;
	} else {
		newBound.y = bound2.y;
	}

	return newBound;
}

// Used to be called "initialize". Realized this needed to be called frequently, inexplicably.
// something something "you should use ctx.save" I don't care.
export function setText(ctx) {
	ctx.scale(1, 1);
	// let canvas = ctx.canvas;
	ctx.font = `${options.italic ? "italic ": ""}48px courierstuck`;
	ctx.letterSpacing = "0px";
}

// Gets the kerning value for a letter cluster (one or two characters)
function getKerning(letterCluster) {
	let kern = letterCluster.length == 2 ? KERN : SPACE_KERN;

	let kernAmount = kern[letterCluster];
	if(kernAmount === undefined) {
		return 0;
	}
	return kernAmount;
}

/* 
	Renders the text information to the canvas. Text information looks like:

	{
		text: string;
		color: string; // hex code
		position: {x: number, y: number};
	}

	the shadow information just calls drawText again for you lol 

	returns the lower right corner of the area required to draw this text
*/
function drawText(ctx, textInformation, shadowInformation) {
	let position = textInformation.position;
	let bound = {
		x: position.x,
		y: position.y,
	}

	if(shadowInformation) {
		bound = combineBounds(drawText(ctx, shadowInformation));
	}

	
	let text = textInformation.text;
	let words = text.split(' ');
	ctx.fillStyle = textInformation.color;
	let pos = {
		x: position.x,
		y: position.y
	}
	for(let word in words) {
		if(word > 0) {
			pos.x += 14;
			bound = combineBounds(bound, pos);
		}
		for(let letter in words[word]) {
			letter = parseInt(letter);

			let renderedLetter = words[word][letter];
			let offset = {x: 0, y: 0};
			if(renderedLetter == '\'') {
				renderedLetter = ',';
				offset.y = -18;
			}

			if(letter == 0) {
				let kernamt = getKerning(renderedLetter);
				pos.x += kernamt;
				bound = combineBounds(bound, pos);
			}
			if(renderedLetter == '\n') {
				pos.y += 40//ctx.measureText(' ').height;
				pos.x = textInformation.position.x;
				bound = combineBounds(bound, pos);
				continue;
			}
			ctx.fillText(renderedLetter, pos.x + offset.x, pos.y + offset.y);
			let size = ctx.measureText(renderedLetter);
			let kernamt = (size.width) + getKerning(words[word].slice(letter, letter + 2));
			pos.x += kernamt;
			if(pos.y + size.fontBoundingBoxDescent > bound.y) {
				bound.y = pos.y + size.fontBoundingBoxDescent;
			}
			bound = combineBounds(bound, {x: pos.x, y: pos.y + size.fontBoundingBoxDescent});
		}
	}
	return bound;
}

/*
	Part of the render step

	Takes frame information (see: FRAMES) and draws a transparent (see: SMEAR_COLOR) copy of the text
	iterates this about 12 times on average per smear.

	Each step moves the smear over by smear.direction.
*/
function renderSmears(ctx, frame) {
	if(!(frame.smear && options.motion)) return {x: 0, y: 0};

	let bound = {
		x: 0,
		y: 0,
	}
	
	for(let smear of frame.smear) {
		let pos = {
			x: smear.offset.x + 10,
			y: smear.offset.y + 42
		}
		for(let i = 0; i < smear.iter; i++) {
			bound = combineBounds(bound, drawText(ctx, {
				text: renderText,
				position: pos,
				color: SMEAR_COLOR
			}));
			pos.x += smear.direction.x;
			pos.y += smear.direction.y;
		}		
	}

	
	return bound;
}

// Renders the lightning effects. Also loads the lightning sprites on first call.
let lightningState = {
	old_pos: undefined,
	pos: undefined,
	frame: 0,
	variant: 0,
	flipped: false,
	done: false,
	wait: 2
}
async function renderLightning(ctx) {
	if(!options.lightning) return;
	LIGHTNING = LIGHTNING ? LIGHTNING : await Promise.all((() => {
		let _LIGHTNING = [];
		for(let folder of [0, 1]) {
			let lightningFrames = [0, 1, 2].map((x) => {
				let img = new Image();
				img.src = `/lightning${folder}/${x}.png`;
				return new Promise((resolve) => img.addEventListener("load", resolve(img)));
			});
			_LIGHTNING.push(Promise.all(lightningFrames));
		}
		return _LIGHTNING;
	})());

	if(lightningState.wait > -1) {
		lightningState.wait -= 1;
		if(lightningState.wait > 0) return;
	}
	
	if(!lightningState.pos) {
		let bounds = {x: ctx.canvas.width - 42, y: ctx.canvas.height - 48};
		do {
			lightningState.pos = {
				x: parseInt((Math.random() * bounds.x) + 7),
				y: parseInt((Math.random() * bounds.y) + 6),
			}
			lightningState.frame = 0;
			lightningState.variant = parseInt(Math.random() * 100) % 2;
			// lightningState.flipped = Boolean(parseInt(Math.random() * 100) % 2);
		}	while(lightningState.old_pos && !(lightningState.old_pos.x - Math.min(10, ctx.canvas.width / 10) > lightningState.pos.x || lightningState.old_pos.x + Math.min(10, ctx.canvas.width / 10) < lightningState.pos.x));
	}

	if(lightningState.flipped) {
		ctx.scale(1, -1);
		lightningState.pos.y = -lightningState.pos.y;
	}
	
	if(lightningState.frame < LIGHTNING[lightningState.variant].length) {
		ctx.drawImage(LIGHTNING[lightningState.variant][lightningState.frame], lightningState.pos.x, lightningState.pos.y);
		lightningState.frame += 1
	} else {
		lightningState.done = true;
		lightningState.old_pos = lightningState.pos;
	}

	ctx.scale(1, 1);
}

// Draws to the canvas and saves the frames in a gif.
export async function render(ctx) {
	// The main body of rendering, called once per frame with a slight delay to let the canvas catch up
	async function renderLoop(perLoop, onFinish) {
		lightningState.old_pos = undefined;
		lightningState.pos = undefined;
		lightningState.frame = 0;
		lightningState.variant = 0;
		lightningState.flipped = false;
		lightningState.done = false;
		lightningState.wait = 2;
		let canvas = ctx.canvas;
		let totalBound = {
			x: 0,
			y: 0,
		}
		return new Promise((resolve) => {
			function loop(i = 0) {
				setTimeout(() => {
					let frame = FRAMES[i];

					// gets the predicted size of the text
					let bound = drawText(ctx, {
						text: renderText,
						position: {x: 7, y: 42},
						color: options.flashing ? frame.color : COLORS[0]
					});

					bound = combineBounds(bound, {x: canvas.width, y: canvas.height});
					// resets the canvas. 
					canvas.width = bound.x;
					canvas.height = bound.y;
					setText(ctx);
					ctx.fillStyle = "#efefef";
					ctx.fillRect(0, 0, canvas.width, canvas.height);

					bound = combineBounds(bound, renderSmears(ctx, frame));

					bound = combineBounds(bound, drawText(ctx, {
						text: renderText,
						position: {x: 10 + (options.shake ? frame.offset.x : 0), y: 42 + (options.shake ? frame.offset.y : 0)},
						color: options.flashing ? frame.color : COLORS[0]
					}, (frame.shadow && options.shadow) ? {
						text: renderText,
						position: {x: 10 + (options.shake ? frame.shadow.offset.x : 0), y: 42 + (options.shake ? frame.shadow.offset.y : 0)},
						color: options.flashing ? frame.shadow.color : COLORS[2]
					} : undefined));

					bound = combineBounds(bound, {x: canvas.width, y: canvas.height});
					totalBound = combineBounds(bound, totalBound);

					renderLightning(ctx);

					if(lightningState.wait < 0 && lightningState.done && FRAMES.length - i > 4) {
						lightningState.wait = Math.min(parseInt(4 + Math.random() * 8), FRAMES.length - i - 3); 
						if(lightningState.wait < 0) lightningState.wait = 0;
						lightningState.pos = undefined;
						lightningState.done = false;
					}

					perLoop();

					if(i < FRAMES.length - 1) {
						loop(i + 1);
					} else if(onFinish) {
						resolve(totalBound);
						onFinish();
					}
				}, 50);
			}
			loop();
		});
	}

	let canvas = ctx.canvas;

	let bound = await renderLoop(() => {}, () => {
		
	})

	canvas.width = bound.x;
	canvas.height = bound.y;
	setText(ctx);

	let gifOptions = {
		quality: 0,
		width: canvas.width,
		height: canvas.height,
	};

	if(options.transparent) {
		gifOptions.transparent = 0xEFEFEF;
	}
	
	let gif = new GIF(gifOptions);

	renderLoop(
		() => {
			gif.addFrame(ctx, {delay: 50, copy: true});
		}, () => {
			gif.render();
		}
	);

	gif.on('finished', (b) => {
		let a = document.createElement("a");
		
		a.href = URL.createObjectURL(b);
		a.download = `${renderText.split(" ").join("").split("\n").join("")}.gif`;
		a.click();
	});

}

export function preview(ctx) {
	let bound = drawText(ctx, {
		text: renderText,
		position: {x: 10, y: 42},
		color: COLORS[0]
	});
	ctx.canvas.width = bound.x;
	ctx.canvas.height = bound.y;
	setText(ctx);
	drawText(ctx, {
		text: renderText,
		position: {x: 10, y: 42},
		color: COLORS[0]
	});
}

