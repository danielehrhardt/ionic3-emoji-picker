import { EventEmitter, ElementRef, Renderer } from '@angular/core';
import { DIRECTIONS } from "../lib/picker-directions";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/takeUntil';
export declare class EmojiPickerComponent {
    private _renderer;
    private _el;
    selectionEmitter: EventEmitter<{}>;
    pickerCloseEmitter: EventEmitter<{}>;
    private _lastHostMousedownEvent;
    private _currentTarget;
    private _currentDirection;
    private _windowResize;
    private _destroyed;
    constructor(_renderer: Renderer, _el: ElementRef);
    setPosition(target: ElementRef, directionCode?: DIRECTIONS): void;
    onBackground(event: any): void;
    ngOnDestroy(): void;
}
