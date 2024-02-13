import { browser } from "$app/environment";
import type { ComicState } from "./parsecomic";

export class Point {
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

export class Inventory {
    inventory: InventoryData;
    equipment: EquipmentData;
    mode: "inventory" | "equipment";

    constructor() {
        this.inventory = [];
        this.equipment = [];
        this.mode = "inventory";
    }
}

// Here be inventory stuff
// get a promise that holds the contents of items.json
if(browser){
    var ITEMS = fetch("/shopfalls/items.json").then((res : Response) => { return res.json(); }).then((json : {[index: string] : ItemDescription}) => { return json; });

    // pre-load the backgrounds 
    var backgroundInv = new Image(400, 252);
    backgroundInv.src = "/shopfalls/Inventory1.png";
    var backgroundEq = new Image(400, 252);
    backgroundEq.src = "/shopfalls/Inventory2.png";
}
export async function parseInventory(inventory : InventoryJSON, state : ComicState) {
    if(!browser) return;

    if(state.inventory === undefined) {
        state.inventory = new Inventory();
    }
    const width = 32;
    const height = 29;
    const gridX = 6;
    let cursor = 0;
    // gotta get the actual values out of items.json
    let items = (await ITEMS) as { [index: string]: ItemDescription; };
    
    for(let i in inventory) {
        let x = cursor % gridX;
        let y = Math.floor(cursor / gridX);
        
        let tempSprite = new Image(width, height);
        tempSprite.onload = () => { renderInventory(state.inventory!.inventory); };
        tempSprite.src = items[i]["sprite"];
        
        let item = new Item(x * width + 3, y * height + 4, width, height, tempSprite, items[i]["name"], items[i]["description"], inventory[i]);
        state.inventory.inventory.push(item);
        cursor++;
    }
    renderInventory(state.inventory.inventory);
}

export async function parseEquipment(equipment : InventoryJSON, state : ComicState) {
    if(!browser) return;
    if(!state.inventory) {
        state.inventory = new Inventory();
    }
    const width = 32;
    const height = 29;
    let items = (await ITEMS) as { [index: string]: ItemDescription; };

    let map : {[key : string]: [number, number]} = {
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
        state.inventory.equipment.push(item);
    }
}


/*
`items` is a list of objects like this:
{
    "name": "Knife of Strength",
    "sprite": "/shopfalls/items/RedKnife.png"
    "description": "A trusty knife with a red gem, imbuing swings with that extra *oomph*.",
}
*/

export function renderInventory(items : Item[]) {
    if(!browser) return;
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

export function renderEquipment(items : Item[]) {
    if(!browser) return;

    let inventoryGrid = document.getElementById("inventoryGrid")! as HTMLCanvasElement;
    let ctx = inventoryGrid.getContext("2d")!;
    ctx.clearRect(0, 0, inventoryGrid.width, inventoryGrid.height);
    
    
    ctx.drawImage(backgroundEq, 0, 0);

    for(let item of items) {
        let sprite = item.sprite;
        let x = item.rect.pos.x;
        let y = item.rect.pos.y;
        ctx.drawImage(sprite, x, y);
    }
}

export function displayItemTooltip(point : Point, state : ComicState) {
    console.log("displaying tooltip!");
    if(state.inventory === undefined) return;
    let currentItemList = state.inventory.mode == "inventory" ? state.inventory.inventory : state.inventory.equipment;
    console.log(currentItemList);
    for(let item of currentItemList) {
        console.log(item.rect);
        if(item.rect.pointWithinBounds(point)) {
            state.tooltipName = item.name;
            state.tooltipDescription = item.description;
            return;
        };
    }
    
    state.tooltipName = undefined;
    state.tooltipDescription = undefined;
}