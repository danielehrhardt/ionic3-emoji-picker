import { QueryList, EventEmitter } from '@angular/core';
import { EmojiCategoryComponent } from './';
export declare class EmojiListComponent {
    emojiCategoryComponents: QueryList<EmojiCategoryComponent>;
    emojis: any;
    emojiSelectionEmitter: EventEmitter<any>;
    constructor();
    selectCategory(event: any): void;
}
