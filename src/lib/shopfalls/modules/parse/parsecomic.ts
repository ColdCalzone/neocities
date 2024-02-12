// Read the page and populate the document
import type { FilePath, NextPageOverride, PageData, PageSongData, PanelSource, SourceMode } from "../types.js";
import { parseInventory, Inventory } from "./inventory.js";

export type ComicState = {
    panelMode : string[]
    panels : string[]
    call : string | undefined
    response : string | undefined
    inventory : Inventory | undefined
    tooltipName : string | undefined
    tooltipDescription : string | undefined
}

export let abortController = new AbortController();

// Populate the panels section
export function parsePanels(input_files : PanelSource, state : ComicState) {
    let files : (string | SourceMode)[] = [];
    // Turn a single SourceMode into an array
    if(!Array.isArray(input_files)) files = [input_files];
    else files = input_files;
    
    for(let file of files) {
        let [mode, source, width, height, loadscreen] = parseSourceMode(file);

        state.panelMode.push(mode);
        state.panels.push(source);

        // used for Godot embeds
        if(mode == "embed") {
            // panel = document.createElement("iframe");
            // panel.setAttribute("frameborder", "0");
            // (panel as HTMLIFrameElement).src = source;
            // panel.classList.add("embed");
            // panel.dataset.panelType = "embed";
            // if(width !== undefined) panel.style.width = width + "px";
            // if(height !== undefined) panel.style.height = height + "px";
        }
        // anything playing a .mp4 file
        else if(mode == "video") {
            
            // if(width !== undefined) video.width = width;
            // if(height !== undefined) video.height = height;
            
            

            // let play = document.createElement("a") as HTMLAnchorElement;
            // play.onclick = () => {
            //     video.play();
            // }

            // video.onplay = () => {
            //     play.animate([
            //         {opacity: 1},
            //         {opacity: 0}
            //     ], {
            //         duration: 500
            //     }).onfinish = () => { play.style.display = "none"; }
            // }
            // video.onstalled = () => { play.style.display = "block"; }

            // play.href = "javascript:void(0);";
            // play.classList.add("videoPlay");

            // let forwardarrow = document.createElement("img") as HTMLImageElement;
            // forwardarrow.src = "Assets/forwardarrow.png";

            // play.appendChild(forwardarrow);
            // panel.appendChild(play);

            // let replay = document.createElement("a") as HTMLAnchorElement;
            // replay.onclick = () => {
            //     video.play();
            //     replay.style.display = "none";
            // }
            // replay.style.opacity = "0";
            // replay.style.display = "none";

            // replay.href = "javascript:void(0);";
            // replay.classList.add("videoReplay");
            // video.onended = () => {
            //     play.style.display = "none";
            //     replay.style.display = "block";
            //     replay.animate([
            //         {opacity: 0},
            //         {opacity: 1}
            //     ], {
            //         duration: 500
            //     }).onfinish = () => { replay.style.opacity = "1"; };
            // }
            // video.onpause = video.onended;

            // let backarrow = document.createElement("img") as HTMLImageElement;
            // backarrow.src = "Assets/backarrow.png";

            // replay.appendChild(backarrow);
            // panel.appendChild(replay);

            // // video.onloadedmetadata = (e) => {
            //     // panel.style.width = "100%";
            // // }
            // panel.style.width = "100%";
            // panel.style.position = "relative";
        } else {
            // Just make a normal image
        }

        if(loadscreen !== undefined) {
            // add_loading_screen(loadscreen, panel);
        } else {
            // document.getElementById("panel")!.appendChild(panel);
        }
    }
}

// wrap the panel in a loading screen
export function add_loading_screen(loadScreenFile : FilePath, panel : HTMLElement) {
    console.log(panel);
    abortController = new AbortController();
    fetch(loadScreenFile, {signal: abortController.signal})
    .then((res : Response) => {
        return res.text();
    })
    .then(async (loadScreenHTML : string) => {
        let panelType : string = panel.dataset.panelType!;

        let loadScreen = document.createElement("div");
        loadScreen.classList.add("loadScreen");
        loadScreen.innerHTML = loadScreenHTML;
        [...loadScreen.children].forEach(element => {
            if(element.tagName == "SCRIPT") {
                let script = document.createElement("script");
                script.innerHTML = element.innerHTML;
                element.remove();
                loadScreen.appendChild(script);
            }
        });
        document.getElementById("panel")!.appendChild(loadScreen);

        if(panelType == "video") {
            let video : HTMLVideoElement = panel.children[0] as HTMLVideoElement;
            // if(video.buffered.length > 0 && video.buffered.end(0) - video.buffered.start(0) > video.duration / 2) {
            //     loadScreen.remove();
            //     continue;
            // }
            video.setAttribute("autoplay", "false");
            video.pause();
            video.currentTime = 0;

            let play : HTMLAnchorElement = panel.children[3] as HTMLAnchorElement;
            play.remove();

            let path = video.src;
            video.src = "";
            
            document.getElementById("panel")!.insertBefore(panel, loadScreen);

            let buffered : HTMLDivElement = panel.children[1] as HTMLDivElement;
            buffered.addEventListener("loadingupdate", (e) => {
                buffered.style.width = String((e as any).detail) + "%";
                if((e as any).detail >= 99) {
                    buffered.style.width = "100%";
                }
            });

            // https://javascript.info/fetch-progress
            abortController = new AbortController();
            let response = await fetch(path, {signal: abortController.signal});

            const reader = response.body?.getReader()!;

            const contentLength = parseInt(response.headers.get('Content-Length')!);

            let receivedLength = 0;
            let chunks : Uint8Array[] = []; 
            
            while(true) {
                const {done, value} = await reader.read();

                if (done) {
                    var vid = URL.createObjectURL(new Blob(chunks));
                    
                    video.src = vid;
                    break; 
                }
                chunks.push(value!);
                receivedLength += value!.length;

                console.log(`Received ${receivedLength} of ${contentLength}`)


                let percent = receivedLength / contentLength * 100;
                
                let panelLoadingEvent = new CustomEvent("loadingupdate", {detail: percent});

                loadScreen.dispatchEvent(panelLoadingEvent);
                buffered.dispatchEvent(panelLoadingEvent);
            }
        }
    })
    .catch((e) => console.log(e));
}

export function parseStyle(path : FilePath, state : ComicState) {
    let l = document.createElement("link");
    l.href = path;
    l.rel = "stylesheet";
    l.type = "text/css";
    l.classList.add("temp-style");
    document.head.appendChild(l);
}

export function parseScript(path : FilePath, state : ComicState) {
    let s = document.createElement("script") as HTMLScriptElement;
    s.src = path;
    s.classList.add("temp-script");
    document.body.appendChild(s);
}

export function parseCustom(path : FilePath, state : ComicState) {
    fetch(path)
    .then((res : Response) => {
        return res.text();
    })
    .then((html : string) => {
        document.write(html);
    });
}

export function parseSourceMode(file : string | SourceMode) : [string, FilePath, number | undefined, number | undefined, FilePath | undefined] {
    // Regex for file extensions i.e. handling .mp4s, .pngs, etc.
    const extensionRegex = /(?:\.([^.]+))?$/;
    
    let mode : string = "image";
    let source : string;
    let width : undefined | number;
    let height : undefined | number;
    let loadscreen : undefined | FilePath;

    if(typeof file == "string") {
        source = file;
        let regex = extensionRegex.exec(file)!;
        if(regex[1] == "mp4") {
            mode = "video"
        } else if(file.startsWith("http")) {
            mode = "embed";
        }
    } else {
        source = file.source;
        if(file.mode) {
            mode = file.mode;
        }
        width = file.width;
        height = file.height;
        loadscreen = file.loadscreen;
    }

    return [mode, source, width, height, loadscreen];
}