import { Component, Input, ElementRef } from '@angular/core';
var EmojiCategoryComponent = (function () {
    function EmojiCategoryComponent(_element) {
        this._element = _element;
    }
    EmojiCategoryComponent.prototype.scrollIntoView = function () {
        this._element.nativeElement.scrollIntoView();
    };
    return EmojiCategoryComponent;
}());
export { EmojiCategoryComponent };
EmojiCategoryComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-category',
                styleUrls: ['../styles/emoji-category.scss'],
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
//# sourceMappingURL=emoji-category.component.js.map