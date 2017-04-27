import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'emoji-categories',
  styles: [`:host{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:0 0 10px}`],
  template: `
  <ng-container *ngFor="let category of emojisCategories">
    <emoji-button 
      (selection)="handleCategorySelection($event)"
      [dataToEmit]="category"
      [emoji]="category.icon"></emoji-button>
  </ng-container>
  `
})

export class EmojiCategoriesComponent {
  @Input('emojisCategories') emojisCategories;
  @Output('categorySelection') categorySelection = new EventEmitter<any>();
  
  constructor() {}

  handleCategorySelection(event) {
    this.categorySelection.emit(event);
  }
}
