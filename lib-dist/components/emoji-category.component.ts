import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'emoji-category',
  styles: [`.emoji-category{margin:0;font-size:16px;padding:5px 0 5px 5px;border-bottom:1px solid #f0f0f0;color:#777;font-family:"Arial","Arial Black","Tahoma","Trebuchet MS","Verdana"}`],
  template: `
  <p class="emoji-category">{{category.name}}</p>
  `
})

export class EmojiCategoryComponent {
  @Input('category') category;

  constructor(private _element: ElementRef) { }

  public scrollIntoView() {
    this._element.nativeElement.scrollIntoView();
  }
}
