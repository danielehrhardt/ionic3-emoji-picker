var CaretEvent = /** @class */ (function () {
    function CaretEvent(data) {
        Object.assign(this, data);
    }
    CaretEvent.prototype.clone = function () {
        return new CaretEvent(Object.assign({}, this, {
            caretRange: this.caretRange && this.caretRange.cloneRange ? this.caretRange.cloneRange() : this.caretRange
        }));
    };
    CaretEvent.generateNullEvent = function () {
        return new CaretEvent({
            caretOffset: 0,
            textContent: ''
        });
    };
    CaretEvent.comparePropsOfObject = function (r1, r2) {
        for (var k in r1) {
            if (r1[k] !== r2[k]) {
                return false;
            }
        }
        return true;
    };
    CaretEvent.compare = function (e1, e2) {
        var changed = 
        /** different when either caretRange is omitted while other exists */
        (!e1.caretRange && e2.caretRange) ||
            (e1.caretRange && !e2.caretRange) ||
            /** different when offset has changed */
            (e1.caretOffset !== e2.caretOffset) ||
            /** different when textContent has changed */
            (e1.textContent !== e2.textContent) ||
            /** different when range object properties changed */
            !this.comparePropsOfObject(e1.caretRange, e2.caretRange);
        return !changed;
    };
    CaretEvent.generateCaretEvent = function (win, doc, element) {
        var caretOffset = 0, sel, caretRange, textContent = element.textContent;
        if (element.tagName.toLowerCase() === 'input') {
            return new CaretEvent({
                caretOffset: element.selectionEnd,
                textContent: element.value
            });
        }
        if (typeof win.getSelection != "undefined") {
            sel = win.getSelection();
            if (sel.rangeCount > 0) {
                var range = win.getSelection().getRangeAt(0);
                var preCaretRange = range.cloneRange();
                preCaretRange.selectNodeContents(element);
                preCaretRange.setEnd(range.endContainer, range.endOffset);
                caretOffset = preCaretRange.toString().length;
                /** Keeping a reference of the range to emit */
                caretRange = range.cloneRange();
            }
        }
        else if ((sel = doc.selection) && sel.type != "Control") {
            var textRange = sel.createRange();
            var preCaretTextRange = doc.body.createTextRange();
            preCaretTextRange.moveToElementText(element);
            preCaretTextRange.setEndPoint("EndToEnd", textRange);
            caretOffset = preCaretTextRange.text.length;
            /** Keeping a reference of the range to emit and making it compatible */
            caretRange = textRange.duplicate();
            caretRange.insertNode = function (e) {
                var container = document.createElement("div");
                container.appendChild(e);
                caretRange.pasteHTML(container.innerHTML);
            };
        }
        return new CaretEvent({
            caretOffset: caretOffset,
            caretRange: caretRange,
            textContent: textContent
        });
    };
    return CaretEvent;
}());
export { CaretEvent };
//# sourceMappingURL=caret-event.js.map