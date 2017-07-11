import { EventEmitter } from '@angular/core';
import { EmojiListComponent } from "./";
export declare class EmojiContentComponent {
    emojiListComponent: EmojiListComponent;
    emojiSelectionEmitter: EventEmitter<any>;
    private _emojis;
    emojis: {
        "emojis": string[][];
        "name": string;
        "icon": string[];
    }[];
    emojisCategories: ({
        "emojis": string[][];
        "name": string;
        "icon": string[];
    } & {
        emojis: any[];
    })[];
    constructor();
    searchHandler(value: any): void;
    categorySelectionHandler(event: any): void;
}
