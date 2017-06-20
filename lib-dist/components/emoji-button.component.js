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
                styles: [":host{display:inline-block}.emoji-button{padding:0;border:0;outline:0;background:0 0;width:34px;height:34px;border-radius:3px;font-size:24px;line-height:1.1;cursor:pointer;-webkit-transition:all .2s;transition:all .2s}.emoji-button:focus,.emoji-button:hover{background:#f1f1f1;border-color:#f1f1f1}"],
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