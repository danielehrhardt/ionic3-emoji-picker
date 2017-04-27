import { Component, Input, EventEmitter, Output } from '@angular/core';
var EmojiButtonComponent = (function () {
    function EmojiButtonComponent() {
        this.selectionEmitter = new EventEmitter();
    }
    EmojiButtonComponent.prototype.ngOnChanges = function () {
    };
    return EmojiButtonComponent;
}());
export { EmojiButtonComponent };
EmojiButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-button',
                styleUrls: ['../styles/emoji-button.scss'],
                template: "\n<button\n  class=\"emoji-button\" \n  (click)=\"selectionEmitter.emit(dataToEmit || emoji)\">\n  {{emoji[0]}}\n</button>\n  "
            },] },
];
/** @nocollapse */
EmojiButtonComponent.ctorParameters = function () { return []; };
EmojiButtonComponent.propDecorators = {
    'emoji': [{ type: Input, args: ['emoji',] },],
    'dataToEmit': [{ type: Input, args: ['dataToEmit',] },],
    'options': [{ type: Input, args: ['options',] },],
    'fitzpatrick': [{ type: Input, args: ['fitzpatrick',] },],
    'selectionEmitter': [{ type: Output, args: ['selection',] },],
};
//# sourceMappingURL=emoji-button.component.js.map