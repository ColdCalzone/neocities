import type { PageData, NextPageOverride } from "./modules/types.js";
import { abortController, call, parseCustom, parsePanels, parseScript, parseStyle, response, setCall, setResponse, type ComicState, setPanels } from "./modules/parse/parsecomic.js";
import { browser } from "$app/environment";

let loading = false

export async function updatePage(state : ComicState) : Promise<ComicState> {
    // Get the current page
    if(!browser) return state;
    window.scrollTo(0, 0);
    let params = (new URL(document.URL)).searchParams;
    let pageValue = params.get("page");
    if(pageValue === null) {
        pageValue = "0";
    }
    let page = parseInt(pageValue);

    // prevents bugginess with switching pages too quickly
    loading = true;
    return fetch("story/" + page + ".json")
    .then((res : Response) => {
        return res.json();
    })
    .then((pageData : PageData) => {
        handleNavigation(page);
        return parsePageData(pageData, state);
    }).catch((e) => {
        console.error(e);
        window.location.replace("/shopfalls/not_found.html") // cleaner solution that avoids an infinite loop of 404's
        return state;
    });
}

// remove all changes made to the site, excluding Special Cases:tm: which should be responsible for cleanup
export function resetPage(state : ComicState) {
    abortController.abort();

    setCall(undefined, state);
    setResponse(undefined, state);
    setPanels([], state);

    for(let s of document.getElementsByClassName("temp-style")) {
        s.remove();
    }
    for(let s of document.getElementsByClassName("temp-script")) {
        s.remove();
    }

}

export async function setPage(pageNumber : number, state : ComicState) : Promise<ComicState> {
    let url = new URL(document.URL);
    url.searchParams.set("page", String(pageNumber) + ((pageNumber == 69) ? "_hahanice" : ""));
    history.pushState({}, "", url);

    resetPage(state);
    return await updatePage(state);
}

// Here be parsing functions

// Parse the json and return the current page
function handleNavigation(currentPage : number) {
    // Next page nav
    let nextPage = document.getElementById("nextPage") as HTMLAnchorElement;
    
    let url = new URL(document.URL);

    fetch("story/" + (currentPage + 1) + ".json")
        .then((res : Response) => {
            return res.json();
        })
        .then((nextData : PageData) => {
            loading = false;
        })
        .catch((x) => {
            console.error(x);
            // prevents bugginess with switching pages too quickly
            loading = false;
        })
}

function parsePageData(pageData : PageData, state : ComicState) {
    // A list of functions to call for a particular field
    const parseFunctions : {[key : string]: (data: any, state: ComicState) => void} = {
        "call": (call : string) => { setCall(call, state); },
        "panel": parsePanels,
        "response": (response : string) => { setResponse(response, state); },
        // "chatlog": parseChatlog, 
        // "style": parseStyle,
        // "script": parseScript,
        // "custom": parseCustom,
        // "song": parseSong,
        // "next_page": (next : NextPageOverride) => {
        //     let nextPage = document.getElementById("nextPage") as HTMLAnchorElement;
        //     if(next.link != undefined) {
        //         nextPage.href = next.link;
        //     }
        //     nextPage.innerHTML = next.text;
            
        //     document.getElementById("nextPageContainer")?.classList.remove("hidden");
        // }
    };

    // Go through the page data and parse each field with its parsing function
    for(let key in pageData) {
        if(!(key in parseFunctions)) { continue; }
        let data = pageData[key];
        parseFunctions[key](data, state);
    }

    return state;
}