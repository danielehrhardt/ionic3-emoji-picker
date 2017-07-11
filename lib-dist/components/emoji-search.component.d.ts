import { EventEmitter, Renderer, ElementRef } from '@angular/core';
import "rxjs/add/operator/throttleTime";
import "rxjs/add/operator/takeUntil";
export declare class EmojiSearchComponent {
    private _renderer;
    searchEmitter: EventEmitter<string>;
    input: ElementRef;
    private _searchValue;
    private _destroyed;
    constructor(_renderer: Renderer);
    ngAfterViewInit(): void;
    handleInputChange(event: any): void;
    ngOnDestroy(): void;
}
