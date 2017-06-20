import { Component, ViewChild, forwardRef, Output, EventEmitter } from '@angular/core';
import { EMOJIS } from "../lib/emojis.data";
import { EmojiListComponent } from "./";

@Component({
  selector: 'emoji-content',
  styles: [`:host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100vw;height:314px;border-radius:3px;background:#fff;text-align:left;-webkit-box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}@media (min-width:258px){:host{width:258px}}emoji-list{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}`],
  template: `
  <emoji-header 
    [emojisCategories]="emojisCategories"
    (categorySelection)="categorySelectionHandler($event)"
    (search)="searchHandler($event)"></emoji-header>
  <emoji-list [emojis]="emojis" (emoji-selection)="emojiSelectionEmitter.emit($event)"></emoji-list>
  <emoji-footer></emoji-footer>
  `
})

export class EmojiContentComponent {
  @ViewChild(forwardRef(() => EmojiListComponent)) emojiListComponent: EmojiListComponent;
  @Output('emoji-selection') emojiSelectionEmitter = new EventEmitter<any>();

  private _emojis = EMOJIS;
  emojis = this._emojis.slice();
  emojisCategories = this._emojis.map(category => Object.assign({}, category, { emojis : [] }));

  constructor() {}

  searchHandler(value) {
    let filteredEmojis = this.emojisCategories.map(category => Object.assign({}, category, { emojis : [] }));
    
    value = value.replace(/-/g, '').toLowerCase();

    Object.keys(this._emojis).forEach(i => {
      const category = this._emojis[i];

      category.emojis.forEach(emoji => {
        if (emoji[1].indexOf(value) !== -1) {
          filteredEmojis[i].emojis.push(emoji);
        }
      });
    });

    this.emojis = filteredEmojis;
  }

  categorySelectionHandler(event) {
    this.emojiListComponent.selectCategory(event);
  }
}
