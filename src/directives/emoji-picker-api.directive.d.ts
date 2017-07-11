import { ComponentFactoryResolver, ViewContainerRef, ElementRef, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/distinctUntilChanged';
export declare class EmojiPickerApiDirective {
    private _cfr;
    private _vcr;
    private _el;
    private _directionCode;
    emojiPickerDirection: string;
    emojiPickerIf: boolean;
    emojiPickerIfEmitter: EventEmitter<boolean>;
    selectEmitter: EventEmitter<{}>;
    private _emojiPickerOpenState;
    private _destroyed;
    private _emojiPickerFactory;
    private _emojiPickerRef;
    private _emojiSubs;
    constructor(_cfr: ComponentFactoryResolver, _vcr: ViewContainerRef, _el: ElementRef);
    openPicker(): void;
    closePicker(): void;
    ngOnDestroy(): void;
}
