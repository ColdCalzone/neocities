// Change this to the path of the comic i.e. shopstuck.html
const COMIC_FILE = "shopfalls.html";

// Get the current page
let params = (new URL(document.location)).searchParams;
let page = parseInt(params.get("page"));

// Regex for file extensions i.e. handling .mp4s, .pngs, etc.
var extensionRegex = /(?:\.([^.]+))?$/;

// This is the only pattern I could find which covered NaN.
// why? I hate JavaScript.
if (!(page >= 1)) { page = 1; }

// a list tracking whether call/panel/response/etc has been added
var addedElements = {}

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
    console.log(page);
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
    };

    // Go through the page data and parse each field with its parsing function
    for(let key in pageData) {
        let data = pageData[key];
        parseFunctions[key](data);
        addedElements[key] = true;
    }
    
    // Remove any elements which weren't added (i.e. the first few pages have no call)
    for(let key in parseFunctions) {
        if(!addedElements[key]) { document.getElementById(key).remove(); }
    }
}

// Populate the panels section
function parsePanels(files) {
    if(typeof files == "string") { files = [files]; }

    for(file of files) {
        if (extensionRegex.exec(file)[1] == "mp4") {
            // Do the witchcraft to make a video in HTML
            var panel = document.createElement("video");
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