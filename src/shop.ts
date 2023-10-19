// If you are looking at shop.js on the live site, please spare yourself the trouble. look at shop.ts in the github repo. 
class Point {
    x: number;
    y: number;
    constructor(x : number, y : number) {
        this.x = x;
        this.y = y;
    }
};
class Dimension {
    w: number;
    h: number;
    constructor(w : number, h : number) {
        this.w = w;
        this.h = h;
    }
};
class Rect {
    pos: Point;
    size: Dimension
    static fromCoordinates(x : number, y : number, w : number, h : number) {
        return new this({x, y}, {w, h});
    }
    constructor(pos: Point, size: Dimension) {
        this.pos = pos;
        this.size = size;
    }
    pointWithinBounds(point : Point) : Boolean {
        if(this.pos.x < point.x && this.pos.x + this.size.w > point.x &&
            this.pos.y < point.y && this.pos.y + this.size.h > point.y) {
                return true;
        }
        return false;
    }
};
type PanelSource = string | string[];
type InventoryJSON = {[index: string] : number};
type InventoryData = Item[];
type EquipmentJSON = {
    head?: string;
    left_arm?: string;
    right_arm?: string;
}
type EquipmentData = Item[];

type ItemDescription = {
    name: string;
    description: string;
    sprite: string;
}
class Item {
    rect: Rect;
    sprite: HTMLImageElement;
    name: string;
    description: string;
    count?: number;
    constructor(x: number, y: number, width: number, height: number, sprite: HTMLImageElement, name: string, description: string, count: number | undefined) {
        this.rect = Rect.fromCoordinates(x, y, width, height);
        this.sprite = sprite;
        this.name = name;
        this.description = description;
        this.count = count;
    }

}

class Inventory {
    inventory: InventoryData;
    equipment: EquipmentData;
    mode: "inventory" | "equipment";

    constructor() {
        this.inventory = [];
        this.equipment = [];
        this.mode = "inventory";
    }
}

interface PageData {
    call?: string;
    panel?: PanelSource;
    response?: string;
    inventory?: InventoryJSON;
    equipment?: EquipmentJSON;
}

// Change this to the path of the comic i.e. shopstuck.html
const COMIC_FILE = "shopfalls.html";

// Get the current page
let params = (new URL(document.URL)).searchParams;
let pageValue = params.get("page");
if(pageValue === null) {
    pageValue = "0";
}
let page = parseInt(pageValue);

// Regex for file extensions i.e. handling .mp4s, .pngs, etc.
let extensionRegex = /(?:\.([^.]+))?$/;

// a list tracking whether call/panel/response/etc has been added
let addedElements = {};

fetch("shopfalls_files/page_data/" + page + ".json")
.then((res : Response) => {
    return res.json();
})
.then((pageData : PageData) => {
    handleNavigation(page);
    parsePageData(pageData);
});


// Here be parsing functions

// Parse the json and return the current page
function handleNavigation(currentPage : number) {
    // Next page nav
    fetch("shopfalls_files/shopfalls.json", {cache: "no-cache"})
        .then((res : Response) => {
            return res.json();
        })
        .then((meta : {last: number}) => {
            if(meta.last > currentPage) {
                // next page nav
                let nextPage = document.getElementById("NextPage") as HTMLAnchorElement;
                nextPage.href = COMIC_FILE + "?page=" + String(currentPage + 1);
                if ((currentPage + 1) == 69) {
                    nextPage.href += "_hahanice";
                }
            }

            // prev page nav
            let prevPage = document.getElementById("PrevPage") as HTMLAnchorElement;
            if(currentPage > 1) {
                prevPage.href = COMIC_FILE + "?page=" + String(currentPage - 1);
            }
            if ((currentPage - 1) == 69) {
                prevPage.href += "_hahanice";
            }

            // last page nav
            let lastPage = document.getElementById("LastPage") as HTMLAnchorElement;
            lastPage.href = COMIC_FILE + "?page=" + String(meta["last"]);
            if (meta["last"] == 69) {
                lastPage.href += "_hahanice";
            }
        });
}

// Read the page and populate the document
function parsePageData(pageData : PageData) {
    // A list of functions to call for a particular field
    const parseFunctions = {
        "call": (call : string) => { document.getElementById("call")!.innerHTML = "<div class=\"centered\"><strong>" + call + "</strong></div>"; },
        "panel": parsePanels,
        "response": (response : string) => { document.getElementById("response")!.innerHTML = "<div class=\"centered\">" + response + "</div>"; },
        "background": (url : string) => { document.body.style.backgroundImage = "url(" + url + ")"; },
        "inventory": parseInventory,
        "equipment": parseEquipment,
    };

    // Go through the page data and parse each field with its parsing function
    for(let key in pageData) {
        if(!(key in parseFunctions)) { continue; }
        let data = pageData[key];
        parseFunctions[key](data);
        addedElements[key] = true;
    }
    
    // Remove any elements which weren't added (i.e. the first few pages have no call)
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
function parsePanels(files : PanelSource) {
    if(typeof files == "string") { files = [files]; }

    for(let file of files) {
        let regex = extensionRegex.exec(file)!;
        if(regex[1] == "mp4") {
            // Do the witchcraft to make a video in HTML
            let panel = document.createElement("video");
            panel.setAttribute("controls", "");
            panel.setAttribute("width", "100%");
            let source = document.createElement("source");
            source.src = file;
            panel.appendChild(source);
            document.getElementById("panel")!.appendChild(panel);
        } else {
            // Just make a normal image
            let panel = document.createElement("img");
            panel.setAttribute("width", "100%");
            panel.src = file;
            document.getElementById("panel")!.appendChild(panel);
        }
    }

}


// Here be inventory stuff

// get a promise that holds the contents of items.json
var ITEMS = fetch("shopfalls_files/items.json").then((res : Response) => { return res.json(); }).then((json : {[index: string] : ItemDescription}) => { return json; });

// a list of item objects for the inventory, for the purpose of tooltips
let inventoryItems : Inventory = new Inventory();

// pre-load the backgrounds 
const backgroundInv = new Image(400, 252);
backgroundInv.src = "shopfalls_files/Inventory1.png";
const backgroundEq = new Image(400, 252);
backgroundEq.src = "shopfalls_files/Inventory2.png";

async function parseInventory(inventory : InventoryJSON) {
    const width = 32;
    const height = 29;
    const gridX = 6;
    let cursor = 0;
    // gotta get the actual values out of items.json
    let items = await ITEMS;
    
    for(let i in inventory) {
        let x = cursor % gridX;
        let y = Math.floor(cursor / gridX);
        
        let tempSprite = new Image(width, height);
        tempSprite.onload = () => { renderInventory(inventoryItems.inventory); };
        tempSprite.src = items[i]["sprite"];
        
        let item = new Item(x * width + 3, y * height + 4, width, height, tempSprite, items[i]["name"], items[i]["description"], inventory[i]);
        inventoryItems.inventory.push(item);
        cursor++;
    }
    console.log(inventoryItems.inventory);

    let inventoryGrid = document.getElementById("inventoryGrid")!;
    inventoryGrid.onmousemove = (event) => { renderInventory(inventoryItems.inventory); displayItemTooltip(new Point(event.offsetX, event.offsetY)); };
    inventoryGrid.onclick = (event) => {
        if(inventoryItems.mode == "equipment") {
            inventoryItems.mode = "inventory";
            inventoryGrid.onmousemove = (event) => { renderInventory(inventoryItems.inventory); displayItemTooltip(new Point(event.offsetX, event.offsetY)); };
            renderInventory(inventoryItems.inventory);
        } else {
            inventoryItems.mode = "equipment";
            inventoryGrid.onmousemove = (event) => { renderEquipment(inventoryItems.equipment); displayItemTooltip(new Point(event.offsetX, event.offsetY)); };
            renderEquipment(inventoryItems.equipment);
        }
    };
    renderInventory(inventoryItems.inventory);
}

async function parseEquipment(equipment : InventoryJSON) {
    const width = 32;
    const height = 29;
    let items = await ITEMS;

    let map = {
        "head": [34, 8],
        "left_arm": [22, 46],
        "right_arm": [136, 46],
    }

    for(let i in equipment) {
        if(equipment[i] === undefined) { continue; }
        if(!("sprite" in items[equipment[i]])) { continue; }
        let x = map[i][0];
        let y = map[i][1];

        let tempSprite = new Image(width, height);
        tempSprite.src = items[equipment[i]]["sprite"];
        
        let item = new Item(x, y, width, height, tempSprite, items[equipment[i]]["name"], items[equipment[i]]["description"], undefined);
        inventoryItems.equipment.push(item);
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

function renderInventory(items : Item[]) {
    console.log(items);
    const width = 32;
    const height = 29;

    let inventoryGrid = document.getElementById("inventoryGrid")! as HTMLCanvasElement;
    let ctx = inventoryGrid.getContext("2d")!;
    ctx.clearRect(0, 0, inventoryGrid.width, inventoryGrid.height);
    
    
    ctx.drawImage(backgroundInv, 0, 0);

    for(let item of items) {
        let sprite = item.sprite;
        let x = item.rect.pos.x;
        let y = item.rect.pos.y;
        ctx.drawImage(sprite, x, y);
        
        let count = item.count;
        if(count == undefined) {
            count = 1;
        }
        ctx.fillStyle = "#ffffff";
        ctx.direction = "rtl";
        ctx.font = "Pixellari";
        
        ctx.fillText("x" + count, x + width, y + height);
    }
}

function renderEquipment(items : Item[]) {
    const width = 32;
    const height = 29;
    
    let inventoryGrid = document.getElementById("inventoryGrid")! as HTMLCanvasElement;
    let ctx = inventoryGrid.getContext("2d")!;
    ctx.clearRect(0, 0, inventoryGrid.width, inventoryGrid.height);
    
    
    ctx.drawImage(backgroundEq, 0, 0);

    console.log(items);
    for(let item of items) {
        let sprite = item.sprite;
        let x = item.rect.pos.x;
        let y = item.rect.pos.y;
        ctx.drawImage(sprite, x, y);
    }
}

function displayItemTooltip(point : Point) {
    let currentItemList = inventoryItems.mode == "inventory" ? inventoryItems.inventory : inventoryItems.equipment;
    for(let item of currentItemList) {
        if(item.rect.pointWithinBounds(point)) {
                document.getElementById("descriptionName")!.innerHTML = "<strong>" + item.name + "</strong>";
                document.getElementById("descriptionDescription")!.innerHTML = item.description;
        }
    }
}