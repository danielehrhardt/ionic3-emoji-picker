import { Component } from '@angular/core';

@Component({
  selector: 'emoji-footer',
  styles: [`.emoji-footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-top:1px solid #f9f9f9;border-radius:0 0 3px 3px;padding:10px;background:#fcfcfc}`],
  template: `
  <footer class="emoji-footer"></footer>
  `
})

export class EmojiFooterComponent {
  constructor() { }
}
