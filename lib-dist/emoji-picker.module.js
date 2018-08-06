import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from "./components";
import { DIRECTIVES } from './directives';
import { PIPES } from './pipes';
import { EmojiPickerComponent } from './components';
var EmojiPickerModule = /** @class */ (function () {
    function EmojiPickerModule() {
    }
    EmojiPickerModule.forRoot = function () {
        return {
            ngModule: EmojiPickerModule,
            providers: []
        };
    };
    EmojiPickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    exports: DIRECTIVES.concat(COMPONENTS),
                    declarations: PIPES.concat(DIRECTIVES, COMPONENTS),
                    providers: [],
                    entryComponents: [EmojiPickerComponent]
                },] },
    ];
    /** @nocollapse */
    EmojiPickerModule.ctorParameters = function () { return []; };
    return EmojiPickerModule;
}());
export { EmojiPickerModule };
//# sourceMappingURL=emoji-picker.module.js.map