// Change this to the path of the comic i.e. shopstuck.html
const COMIC_FILE = "shopfalls.html";

// Get the current page
let params = (new URL(document.URL)).searchParams;
let pageValue = params.get("page");
if(pageValue === null) {
    pageValue = "1";
}
let page = parseInt(pageValue);

// Regex for file extensions i.e. handling .mp4s, .pngs, etc.
let extensionRegex = /(?:\.([^.]+))?$/;

// a list tracking whether call/panel/response/etc has been added
let addedElements = {};

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ! CHANGE THIS TO THE PATH TO YOUR COMIC'S DATA !
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
fetch("shopfalls_files/shopfalls.json")
.then((res) => {
    return res.json();
})
.then((json) => {
    return getCurrentPageFromJSON(json);
})
.then((pageData) => {
    parsePageData(pageData);
});


// Here be parsing functions

// Parse the json and return the current page
function getCurrentPageFromJSON(json) {
    console.log(json);
    if (page >= json.length) {
        document.getElementById("NextPage").href = ""
    }

    // Handle Navigation
    
    if(page > 1) {
        document.getElementById("PrevPage").href = COMIC_FILE + "?page=" + String(page - 1);
    }
    if ((page - 1) == 69) {
        document.getElementById("NextPage").href += "_hahanice";
    }

    if(page < json.length) {
        document.getElementById("NextPage").href = COMIC_FILE + "?page=" + String(page + 1);
    }
    if ((page + 1) == 69) {
        document.getElementById("NextPage").href += "_hahanice";
    }

    document.getElementById("LastPage").href = COMIC_FILE + "?page=" + String(json.length);
    if ((json.length) == 69) {
        document.getElementById("LastPage").href += "_hahanice";
    }
    
    return json[page - 1];
}

// Read the page and populate the document
function parsePageData(pageData) {
    // A list of functions to call for a particular field
    const parseFunctions = {
        "call": (call) => { document.getElementById("call").innerHTML = "<div class=\"centered\"><strong>" + call + "</strong></div>"; },
        "panel": parsePanels,
        "response": (response) => { document.getElementById("response").innerHTML = "<div class=\"centered\">" + response + "</div>"; },
        "background": (url) => { document.body.style.backgroundImage = "url(" + url + ")"; },
        "inventory": parseInventory,
        "equipment": parseEquipment,
    };
    const updateFunctions = {
        "inventory": (_) => { renderInventory(itemsList); },
    };

    // Go through the page data and parse each field with its parsing function
    console.log(pageData);
    for(let key in pageData) {
        if(!(key in parseFunctions)) { continue; }
        let data = pageData[key];
        parseFunctions[key](data);
        if(key in updateFunctions) {
            updateFunctions[key](data);
        }
        addedElements[key] = true;
    }
    
    // Remove any elements which weren't added (i.e. the first few pages have no call)
    console.log(addedElements);
    for(let key in parseFunctions) {
        if(!addedElements[key]) {
            console.log('removing ' + key);
            let removing = document.getElementById(key)
            if(removing == null) { continue; }
            removing.remove(); 
        }
    }
}

// Populate the panels section
function parsePanels(files) {
    if(typeof files == "string") { files = [files]; }

    for(file of files) {
        if (extensionRegex.exec(file)[1] == "mp4") {
            // Do the witchcraft to make a video in HTML
            let panel = document.createElement("video");
            panel.setAttribute("controls", "");
            panel.setAttribute("width", "100%");
            let source = document.createElement("source");
            source.src = file;
            panel.appendChild(source);
            document.getElementById("panel").appendChild(panel);
        } else {
            // Just make a normal image
            let panel = document.createElement("img");
            panel.setAttribute("width", "100%");
            panel.src = file;
            document.getElementById("panel").appendChild(panel);
        }
    }

}


// Here be inventory stuff

// a list of item objects for the inventory, for the purpose of tooltips
let itemsList = [];
let equipList = [];

let displayingEquipment = false;
// change this with the current "mode" of the inventory
let currentItemList = itemsList;

class Item {
    constructor(x, y, width, height, sprite, name, description, count) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.sprite = sprite;
        this.name = name;
        this.description = description;
        this.count = count;
    }
}

// pre-load the backgrounds 
const backgroundInv = new Image(400, 252);
backgroundInv.src = "shopfalls_files/Inventory1.png";
const backgroundEq = new Image(400, 252);
backgroundEq.src = "shopfalls_files/Inventory2.png";

function parseInventory(items) {
    const width = 32;
    const height = 29;
    const gridX = 6;
    let cursor = 0;
    
    for(let i in items) {
        let x = cursor % gridX;
        let y = Math.floor(cursor / gridX);
        
        let tempSprite = new Image(width, height);
        tempSprite.src = items[i]["sprite"];
        
        let item = new Item(x * width + 3, y * height + 4, width, height, tempSprite, items[i]["name"], items[i]["description"], items[i]["count"]);
        itemsList.push(item);
        cursor++;
    }
    console.log(itemsList);

    document.getElementById("inventoryGrid").onmousemove = (event) => { renderInventory(itemsList); displayItemTooltip(event.offsetX, event.offsetY); };
    document.getElementById("inventoryGrid").onclick = (event) => {
        displayingEquipment = !displayingEquipment;
        if(!displayingEquipment) {
            document.getElementById("inventoryGrid").onmousemove = (event) => { renderInventory(itemsList); displayItemTooltip(event.offsetX, event.offsetY); };
            currentItemList = itemsList;
            renderInventory(itemsList);
        } else {
            document.getElementById("inventoryGrid").onmousemove = (event) => { renderEquipment(equipList); displayItemTooltip(event.offsetX, event.offsetY); };
            currentItemList = equipList;
            renderEquipment(equipList);
        }
    };
}

function parseEquipment(items) {
    const width = 32;
    const height = 29;

    let map = {
        "head": [34, 8],
        "left_arm": [22, 46],
        "right_arm": [136, 46],
    }

    for(let i in items) {
        if(!("sprite" in items[i])) { continue; }
        let x = map[i][0];
        let y = map[i][1];

        let tempSprite = new Image(width, height);
        tempSprite.src = items[i]["sprite"];
        
        let item = new Item(x, y, width, height, tempSprite, items[i]["name"], items[i]["description"], items[i]["count"]);
        equipList.push(item);
    }
}


/*
`items` is a list of objects like this:
{
    "name": "Knife of Strength",
    "sprite": "shopfalls_files/items/RedKnife.png"
    "description": "A trusty knife with a red gem, imbuing swings with that extra *oomph*.",
}
*/

function renderInventory(items) {
    const width = 32;
    const height = 29;

    let inventoryGrid = document.getElementById("inventoryGrid");
    let ctx = inventoryGrid.getContext("2d");
    ctx.clearRect(0, 0, inventoryGrid.width, inventoryGrid.height);
    
    
    ctx.drawImage(backgroundInv, 0, 0);

    for(let i of items.keys()) {
        let sprite = items[i].sprite;
        let x = items[i].x;
        let y = items[i].y;
        ctx.drawImage(sprite, x, y);
        
        let count = items[i].count;
        if(count == undefined) {
            count = 1;
        }
        ctx.fillStyle = "#ffffff";
        ctx.direction = "rtl";
        ctx.font = "Pixellari";
        
        ctx.fillText("x" + count, x + width, y + height);
    }
}

function renderEquipment(items) {
    const width = 32;
    const height = 29;
    
    let inventoryGrid = document.getElementById("inventoryGrid");
    let ctx = inventoryGrid.getContext("2d");
    ctx.clearRect(0, 0, inventoryGrid.width, inventoryGrid.height);
    
    
    ctx.drawImage(backgroundEq, 0, 0);

    console.log(items);
    for(let i of items.keys()) {
        let sprite;
        sprite = items[i].sprite;
        let x = items[i].x;
        let y = items[i].y;
        ctx.drawImage(sprite, x, y);
    }
}

function displayItemTooltip(x, y) {
    for(let item of currentItemList) {
        if( item.x < x && item.x + item.width > x &&
            item.y < y && item.y + item.height > y) {
                document.getElementById("descriptionName").innerHTML = "<strong>" + item.name + "</strong>";
                document.getElementById("descriptionDescription").innerHTML = item.description;
        }
    }
}