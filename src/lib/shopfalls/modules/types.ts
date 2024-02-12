// Type declarations, modeling the page data json format and such

export type FilePath = string;

// Prefer to use this over just strings for non-images, as it simplifies parsing
export type SourceMode = {
    source: string,
    loadscreen?: FilePath,
    // Assume "image" by default
    mode?: "image" | "video" | "embed",
    width?: number, //KILL
    height?: number, //KILL
}

// Representation of a panel's source
// string was used initially, but that causes issues with parsing
export type PanelSource = string | string[] | SourceMode | SourceMode[];

export type NextPageOverride = {
    link?: FilePath;
    text: string;
}

export type PageSongData = string | {
    id: string;
    allow_playing: boolean;
}

export interface PageData {
    [key: string]: any;
    call?: string;
    panel?: PanelSource;
    response?: string;
    style?: FilePath;
    custom?: FilePath;
    next_page?: NextPageOverride;
    song?: PageSongData;
}