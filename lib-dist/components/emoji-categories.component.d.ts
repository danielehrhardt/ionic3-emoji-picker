import { EventEmitter } from '@angular/core';
export declare class EmojiCategoriesComponent {
    emojisCategories: any;
    categorySelection: EventEmitter<any>;
    constructor();
    handleCategorySelection(event: any): void;
}
