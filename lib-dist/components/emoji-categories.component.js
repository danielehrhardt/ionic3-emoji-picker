import { Component, Input, EventEmitter, Output } from '@angular/core';
var EmojiCategoriesComponent = /** @class */ (function () {
    function EmojiCategoriesComponent() {
        this.categorySelection = new EventEmitter();
    }
    EmojiCategoriesComponent.prototype.handleCategorySelection = function (event) {
        this.categorySelection.emit(event);
    };
    EmojiCategoriesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-categories',
                    styles: [":host{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:0 0 10px}"],
                    template: "\n  <ng-container *ngFor=\"let category of emojisCategories\">\n    <emoji-button \n      (selection)=\"handleCategorySelection($event)\"\n      [dataToEmit]=\"category\"\n      [emoji]=\"category.icon\"></emoji-button>\n  </ng-container>\n  "
                },] },
    ];
    /** @nocollapse */
    EmojiCategoriesComponent.ctorParameters = function () { return []; };
    EmojiCategoriesComponent.propDecorators = {
        'emojisCategories': [{ type: Input, args: ['emojisCategories',] },],
        'categorySelection': [{ type: Output, args: ['categorySelection',] },],
    };
    return EmojiCategoriesComponent;
}());
export { EmojiCategoriesComponent };
//# sourceMappingURL=emoji-categories.component.js.map