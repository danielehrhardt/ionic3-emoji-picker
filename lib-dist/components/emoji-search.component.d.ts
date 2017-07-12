import { EventEmitter, ElementRef } from '@angular/core';
import "rxjs/add/operator/throttleTime";
import "rxjs/add/operator/takeUntil";
export declare class EmojiSearchComponent {
    searchEmitter: EventEmitter<string>;
    input: ElementRef;
    private _searchValue;
    private _destroyed;
    constructor();
    ngAfterViewInit(): void;
    handleInputChange(event: any): void;
    ngOnDestroy(): void;
}
