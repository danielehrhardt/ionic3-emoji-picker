[![npm version](https://badge.fury.io/js/%40ionic-tools%2Femoji-picker.svg)](https://badge.fury.io/js/%40ionic-tools%2Femoji-picker)

# Emoji picker for Ionic 3

This project was forked from the [angular2-emoji-picker](https://github.com/lsharir/angular2-emoji-picker) project created by [lsharir](https://github.com/lsharir)


### Usage:

```
import { EmojiPickerModule } from '@ionic-tools/emoji-picker';

@NgModule({
  ...
  imports: [
    EmojiPickerModule.forRoot()
  ],
  ...
})
export class AppModule {}

```

### Directive API:

```
<i
    (click)="toggled = !toggled"
    [(emojiPickerIf)]="toggled"
    [emojiPickerDirection]="'bottom' || 'top' || 'left' || 'right'"
    (emojiPickerSelect)="handleSelection($event)">😄</i>
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
