import { Component, EventEmitter, Output, Input } from '@angular/core';
var EmojiHeaderComponent = /** @class */ (function () {
    function EmojiHeaderComponent() {
        this.categorySelection = new EventEmitter();
        this.searchEmitter = new EventEmitter();
    }
    EmojiHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-header',
                    styleUrls: ['../styles/emoji-header.scss'],
                    template: "\n  <emoji-categories [emojisCategories]=\"emojisCategories\" (categorySelection)=\"categorySelection.emit($event)\"></emoji-categories>\n  <emoji-search (search)=\"searchEmitter.emit($event)\"></emoji-search>\n  "
                },] },
    ];
    /** @nocollapse */
    EmojiHeaderComponent.ctorParameters = function () { return []; };
    EmojiHeaderComponent.propDecorators = {
        'emojisCategories': [{ type: Input, args: ['emojisCategories',] },],
        'categorySelection': [{ type: Output, args: ['categorySelection',] },],
        'searchEmitter': [{ type: Output, args: ['search',] },],
    };
    return EmojiHeaderComponent;
}());
export { EmojiHeaderComponent };
//# sourceMappingURL=emoji-header.component.js.map