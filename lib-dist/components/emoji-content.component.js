import { Component, ViewChild, forwardRef, Output, EventEmitter } from '@angular/core';
import { EMOJIS } from "../lib/emojis.data";
import { EmojiListComponent } from "./";
var EmojiContentComponent = /** @class */ (function () {
    function EmojiContentComponent() {
        this.emojiSelectionEmitter = new EventEmitter();
        this._emojis = EMOJIS;
        this.emojis = this._emojis.slice();
        this.emojisCategories = this._emojis.map(function (category) { return Object.assign({}, category, { emojis: [] }); });
    }
    EmojiContentComponent.prototype.searchHandler = function (value) {
        var _this = this;
        var filteredEmojis = this.emojisCategories.map(function (category) { return Object.assign({}, category, { emojis: [] }); });
        value = value.replace(/-/g, '').toLowerCase();
        Object.keys(this._emojis).forEach(function (i) {
            var category = _this._emojis[i];
            category.emojis.forEach(function (emoji) {
                if (emoji[1].indexOf(value) !== -1) {
                    filteredEmojis[i].emojis.push(emoji);
                }
            });
        });
        this.emojis = filteredEmojis;
    };
    EmojiContentComponent.prototype.categorySelectionHandler = function (event) {
        this.emojiListComponent.selectCategory(event);
    };
    EmojiContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-content',
                    styles: [":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100vw;height:314px;border-radius:3px;background:#fff;text-align:left;-webkit-box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}@media (min-width:258px){:host{width:258px}}emoji-list{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}"],
                    template: "\n  <emoji-header \n    [emojisCategories]=\"emojisCategories\"\n    (categorySelection)=\"categorySelectionHandler($event)\"\n    (search)=\"searchHandler($event)\"></emoji-header>\n  <emoji-list [emojis]=\"emojis\" (emoji-selection)=\"emojiSelectionEmitter.emit($event)\"></emoji-list>\n  <emoji-footer></emoji-footer>\n  "
                },] },
    ];
    /** @nocollapse */
    EmojiContentComponent.ctorParameters = function () { return []; };
    EmojiContentComponent.propDecorators = {
        'emojiListComponent': [{ type: ViewChild, args: [forwardRef(function () { return EmojiListComponent; }),] },],
        'emojiSelectionEmitter': [{ type: Output, args: ['emoji-selection',] },],
    };
    return EmojiContentComponent;
}());
export { EmojiContentComponent };
//# sourceMappingURL=emoji-content.component.js.map