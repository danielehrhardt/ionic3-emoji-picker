[![npm version](https://badge.fury.io/js/%40ionic-tools%2Femoji-picker.svg)](https://badge.fury.io/js/%40ionic-tools%2Femoji-picker)

# Emoji picker for Ionic 3

This project was forked from the [angular2-emoji-picker](https://github.com/lsharir/angular2-emoji-picker) project created by [lsharir](https://github.com/lsharir)


# Installation
## Install the module via NPM
```shell
npm i @ionic-tools/emoji-picker --save
```

## Import it in your app's module(s)

Import `EmojiPickerModule.forRoot()` in your app's main module

app.module.ts
```ts
import { EmojiPickerModule } from '@ionic-tools/emoji-picker';

@NgModule({
    ...
    imports: [
      ...
      EmojiPickerModule.forRoot()
      ],
    ...
})
export class AppModule {}
```

If your app uses lazy loading, you need to import `EmojiPickerModule` in your shared module or child modules:
```ts
import { EmojiPickerModule } from '@ionic-tools/emoji-picker';

@NgModule({
    ...
    imports: [
      ...
      EmojiPickerModule
      ],
    ...
})
export class SharedModule {}
```



### Sample

```html
<ion-textarea [(ngModel)]="emojitext"></ion-textarea>

<button ion-button clear icon-only (click)="toggled = !toggled" [(emojiPickerIf)]="toggled" [emojiPickerDirection]="'top'"
      (emojiPickerSelect)="handleSelection($event)">
      🤗
</button>
```

```ts
toggled: boolean = false;
emojitext: string;

handleSelection(event) {
  this.emojitext = this.emojitext + " " + event.char;
}
```

### Directive API:

```
<button ion-button
    (click)="toggled = !toggled"
    [(emojiPickerIf)]="toggled"
    [emojiPickerDirection]="'bottom' || 'top' || 'left' || 'right'"
    (emojiPickerSelect)="handleSelection($event)">😄</button>
```

### Emitter `(emojiPickerSelect)="handleSelection($event)"`

```
$event = EmojiEvent{ char : "😌", label : "relieved" }
```

## EmojiPickerCaretEmitter

added for your convenience, emits information regarding a contenteditable enabled element

### Emitter `(emojiPickerCaretEmitter)="handleCaretChange($event)"`

```
$event = CaretEvent{ caretOffset: 13, caretRange: Range{...}, textContent: 'content of div or input' }
```

Emoji Picker will get placed relative the element chosen via the directive api, centered and within window borders
