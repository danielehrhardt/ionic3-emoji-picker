import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/distinctUntilChanged';
import { CaretEvent } from "../../src";
var EmojiPickerCaretDirective = /** @class */ (function () {
    function EmojiPickerCaretDirective(_el) {
        var _this = this;
        this._el = _el;
        this.caretEmitter = new EventEmitter();
        this._caretEvent$ = new Subject();
        this._destroyed$ = new Subject();
        this._lastCaretEvent = CaretEvent.generateNullEvent();
        this._caretEvent$
            .takeUntil(this._destroyed$)
            .distinctUntilChanged(function (event1, event2) {
            return CaretEvent.compare(event1, event2);
        })
            .subscribe(function (event) {
            _this.caretEmitter.emit(event);
            _this._lastCaretEvent = event.clone();
        });
    }
    Object.defineProperty(EmojiPickerCaretDirective.prototype, "doc", {
        get: function () {
            if (!this._doc) {
                this._doc = this._el.nativeElement.ownerDocument || this._el.nativeElement.document || document;
            }
            return this._doc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmojiPickerCaretDirective.prototype, "win", {
        get: function () {
            if (!this._win) {
                this._win = this.doc.defaultView || this.doc.parentWindow || window;
            }
            return this._win;
        },
        enumerable: true,
        configurable: true
    });
    EmojiPickerCaretDirective.prototype.ngOnInit = function () {
        if (!this._el.nativeElement.getAttribute('contenteditable') && this._el.nativeElement.tagName.toLowerCase() !== 'input') {
            throw new Error('(emojiPickerPositionEmitter) should only work on contenteditable enabled or input elements');
        }
    };
    EmojiPickerCaretDirective.prototype.ngOnDestroy = function () {
        this._destroyed$.next(true);
    };
    EmojiPickerCaretDirective.prototype.updateCaretPosition = function () {
        var cEvent = CaretEvent.generateCaretEvent(this.win, this.doc, this._el.nativeElement);
        this._caretEvent$.next(cEvent);
    };
    EmojiPickerCaretDirective.prototype.updateCaretDueMutation = function () {
        var _this = this;
        var cEvent = CaretEvent.generateCaretEvent(this.win, this.doc, this._el.nativeElement);
        var textMovement = cEvent.textContent.length - this._lastCaretEvent.textContent.length;
        cEvent.caretOffset = this._lastCaretEvent.caretOffset + textMovement;
        /** change detection after DOMSubtreeModified event is weird
         * ChangeDetectorRef.detectChanges(), ChangeDetectorRef.markForCheck(), ApplicationRef.tick(), NgZone.run()
         * all of those methods did not work as expected.
         * As a temporary hack I am emitting an event after a short timeout, which is fine due to the _caretEvent$ smart stream
         */
        setTimeout(function () {
            _this._caretEvent$.next(cEvent);
        });
    };
    EmojiPickerCaretDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[emojiPickerCaretEmitter]',
                    host: {
                        '(keyup)': 'updateCaretPosition()',
                        '(mouseup)': 'updateCaretPosition()',
                        '(selectstart)': 'updateCaretPosition()',
                        '(focus)': 'updateCaretPosition()',
                        '(DOMSubtreeModified)': 'updateCaretDueMutation($event)'
                    }
                },] },
    ];
    /** @nocollapse */
    EmojiPickerCaretDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    EmojiPickerCaretDirective.propDecorators = {
        'caretEmitter': [{ type: Output, args: ['emojiPickerCaretEmitter',] },],
    };
    return EmojiPickerCaretDirective;
}());
export { EmojiPickerCaretDirective };
//# sourceMappingURL=emoji-picker-caret.directive.js.map