import { Pipe } from '@angular/core';
var EmojiEmptyCategoryPipe = (function () {
    function EmojiEmptyCategoryPipe() {
    }
    EmojiEmptyCategoryPipe.prototype.transform = function (categories) {
        return categories.filter(function (category) { return category.emojis.length !== 0; });
    };
    return EmojiEmptyCategoryPipe;
}());
export { EmojiEmptyCategoryPipe };
EmojiEmptyCategoryPipe.decorators = [
    { type: Pipe, args: [{
                name: 'notEmptyEmojiCategory'
            },] },
];
/** @nocollapse */
EmojiEmptyCategoryPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=emoji-empty-category.pipe.js.map