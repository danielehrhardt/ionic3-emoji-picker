import { Component, Input, ElementRef } from '@angular/core';
var EmojiCategoryComponent = /** @class */ (function () {
    function EmojiCategoryComponent(_element) {
        this._element = _element;
    }
    EmojiCategoryComponent.prototype.scrollIntoView = function () {
        this._element.nativeElement.scrollIntoView();
    };
    EmojiCategoryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-category',
                    styles: [".emoji-category{margin:0;font-size:16px;padding:5px 0 5px 5px;border-bottom:1px solid #f0f0f0;color:#777;font-family:\"Arial\",\"Arial Black\",\"Tahoma\",\"Trebuchet MS\",\"Verdana\"}"],
                    template: "\n  <p class=\"emoji-category\">{{category.name}}</p>\n  "
                },] },
    ];
    /** @nocollapse */
    EmojiCategoryComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    EmojiCategoryComponent.propDecorators = {
        'category': [{ type: Input, args: ['category',] },],
    };
    return EmojiCategoryComponent;
}());
export { EmojiCategoryComponent };
//# sourceMappingURL=emoji-category.component.js.map