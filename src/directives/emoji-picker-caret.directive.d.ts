import { EventEmitter, ElementRef } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/distinctUntilChanged';
import { CaretEvent } from "../../src";
export declare class EmojiPickerCaretDirective {
    private _el;
    caretEmitter: EventEmitter<CaretEvent>;
    private _caretEvent$;
    private _destroyed$;
    private _lastCaretEvent;
    private _win;
    private _doc;
    readonly doc: any;
    readonly win: any;
    constructor(_el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    updateCaretPosition(): void;
    updateCaretDueMutation(): void;
}
