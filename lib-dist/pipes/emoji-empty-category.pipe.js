import { Pipe } from '@angular/core';
var EmojiEmptyCategoryPipe = /** @class */ (function () {
    function EmojiEmptyCategoryPipe() {
    }
    EmojiEmptyCategoryPipe.prototype.transform = function (categories) {
        return categories.filter(function (category) { return category.emojis.length !== 0; });
    };
    EmojiEmptyCategoryPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'notEmptyEmojiCategory'
                },] },
    ];
    /** @nocollapse */
    EmojiEmptyCategoryPipe.ctorParameters = function () { return []; };
    return EmojiEmptyCategoryPipe;
}());
export { EmojiEmptyCategoryPipe };
//# sourceMappingURL=emoji-empty-category.pipe.js.map