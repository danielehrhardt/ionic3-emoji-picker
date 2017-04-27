import { Component, EventEmitter, Output, ViewChild, Renderer, ElementRef } from '@angular/core';
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/throttleTime";
import "rxjs/add/operator/takeUntil";

@Component({
  selector: 'emoji-search',
  styles: [`input{width:100%;padding:5px 10px;border:1px solid #f0f0f0;outline:0;font-size:14px;font-weight:inherit;box-sizing:border-box}input:focus{border-color:#d7d7d7}`],
  template: `
  <input type="text" autocomplete="off" #input (input)="handleInputChange($event.target.value)" placeholder="Search"/>
  `
})

export class EmojiSearchComponent {
  @Output('search') searchEmitter: EventEmitter<string> = new EventEmitter();
  @ViewChild('input') input: ElementRef;

  private _searchValue: Subject<string> = new Subject();
  private _destroyed = new Subject<boolean>();

  constructor(private _renderer: Renderer) {
    this._searchValue
      .takeUntil(this._destroyed)
      .subscribe(value => {
        this.searchEmitter.emit(value);
      });
  }
  
  ngAfterViewInit() {
    //this._renderer.invokeElementMethod(this.input.nativeElement, 'focus');
  }

  handleInputChange(event) {
    this._searchValue.next(event);
  }

  ngOnDestroy() {
    this._destroyed.next(true);
  }
}
