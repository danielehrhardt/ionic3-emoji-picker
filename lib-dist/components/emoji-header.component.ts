import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'emoji-header',
  styles: [`:host{display:block;border-bottom:1px solid #f9f9f9;border-radius:3px 3px 0 0;padding:10px;background:#fcfcfc}`],
  template: `
  <emoji-categories [emojisCategories]="emojisCategories" (categorySelection)="categorySelection.emit($event)"></emoji-categories>
  <emoji-search (search)="searchEmitter.emit($event)"></emoji-search>
  `
})

export class EmojiHeaderComponent {
  @Input('emojisCategories') emojisCategories;

  @Output('categorySelection') categorySelection = new EventEmitter<any>();
  @Output('search') searchEmitter = new EventEmitter<string>();
  
  constructor() { }
}
