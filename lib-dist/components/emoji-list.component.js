import { Component, Input, ViewChildren, forwardRef, Output, EventEmitter } from '@angular/core';
import { EmojiCategoryComponent } from './';
var EmojiListComponent = /** @class */ (function () {
    function EmojiListComponent() {
        this.emojiSelectionEmitter = new EventEmitter();
    }
    EmojiListComponent.prototype.selectCategory = function (event) {
        this.emojiCategoryComponents.forEach(function (categoryCmp) {
            if (categoryCmp['category'].name === event.name) {
                categoryCmp.scrollIntoView();
            }
        });
    };
    EmojiListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-list',
                    styles: [":host{overflow-y:auto}.emoji-list{padding:0 10px 10px}.emoji-buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:5px 0}"],
                    template: "\n  <div class=\"emoji-list\">\n    <ng-container *ngFor=\"let emojiCategory of emojis | notEmptyEmojiCategory\">\n      <emoji-category [category]=\"emojiCategory\"></emoji-category>\n      <div class=\"emoji-buttons\">\n        <emoji-button \n        *ngFor=\"let emoji of emojiCategory.emojis\"\n        (selection)=\"emojiSelectionEmitter.emit($event)\"\n        [emoji]=\"emoji\"></emoji-button>\n      </div>\n    </ng-container>\n  </div>\n  "
                },] },
    ];
    /** @nocollapse */
    EmojiListComponent.ctorParameters = function () { return []; };
    EmojiListComponent.propDecorators = {
        'emojiCategoryComponents': [{ type: ViewChildren, args: [forwardRef(function () { return EmojiCategoryComponent; }),] },],
        'emojis': [{ type: Input, args: ['emojis',] },],
        'emojiSelectionEmitter': [{ type: Output, args: ['emoji-selection',] },],
    };
    return EmojiListComponent;
}());
export { EmojiListComponent };
//# sourceMappingURL=emoji-list.component.js.map