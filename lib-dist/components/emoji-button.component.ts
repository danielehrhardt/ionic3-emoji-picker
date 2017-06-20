import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'emoji-button',
  styles: [`:host{display:inline-block}.emoji-button{padding:0;border:0;outline:0;background:0 0;width:34px;height:34px;border-radius:3px;font-size:24px;line-height:1.1;cursor:pointer;-webkit-transition:all .2s;transition:all .2s}.emoji-button:focus,.emoji-button:hover{background:#f1f1f1;border-color:#f1f1f1}`],
  template: `
<button
  class="emoji-button" 
  (click)="selectionEmitter.emit(dataToEmit || emoji)">
  {{emoji[0]}}
</button>
  `
})

export class EmojiButtonComponent {
  @Input('emoji') emoji;
  @Input('dataToEmit') dataToEmit;
  @Input('options') options;
  @Input('fitzpatrick') fitzpatrick;

  @Output('selection') selectionEmitter : EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnChanges() {

  }
}
