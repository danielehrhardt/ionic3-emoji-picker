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
                    styleUrls: ['../styles/emoji-content.scss'],
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