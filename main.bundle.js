webpackJsonp([1,4],{

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ":host {\n  display: inline-block; }\n\n.emoji-button {\n  padding: 0;\n  border: none;\n  outline: none;\n  background: none;\n  cursor: pointer;\n  width: 34px;\n  height: 34px;\n  border: 5px solid transparent;\n  border-radius: 3px;\n  font-size: 24px;\n  line-height: 1.1;\n  cursor: pointer;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  overflow: hidden; }\n  .emoji-button:hover, .emoji-button:focus {\n    background: #F1F1F1;\n    border-color: #F1F1F1; }\n", "", {"version":3,"sources":["/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/emoji-button.scss","/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/_constants.scss"],"names":[],"mappings":"AAEA;EACE,sBAAqB,EACtB;;AAED;EACE,WAAU;EACV,aAAY;EACZ,cAAa;EACb,iBAAgB;EAChB,gBAAe;EACf,YCE2B;EDD3B,aCC2B;EDA3B,8BAA6B;EAC7B,mBCJ4B;EDK5B,gBAA2C;EAC3C,iBAAgB;EAChB,gBAAe;EACf,6BAAoB;EAApB,qBAAoB;EACpB,iBAAgB,EAMjB;EApBD;IAiBM,oBAAmB;IACnB,sBAAqB,EACxB","file":"emoji-button.scss","sourcesContent":["@import '_constants.scss';\n\n:host {\n  display: inline-block;\n}\n\n.emoji-button {\n  padding: 0;\n  border: none;\n  outline: none;\n  background: none;\n  cursor: pointer;\n  width: $EmojiPanel-emoji-width;\n  height: $EmojiPanel-emoji-width;\n  border: 5px solid transparent;\n  border-radius: $EmojiPanel-border-radius;\n  font-size: ($EmojiPanel-emoji-width - 10px);\n  line-height: 1.1;\n  cursor: pointer;\n  transition: all 0.2s;\n  overflow: hidden;\n\n  &:hover, &:focus {\n      background: #F1F1F1;\n      border-color: #F1F1F1;\n  }\n}\n","$EmojiPanel-font-family: 'Arial', 'Arial Black', 'Tahoma', 'Trebuchet MS', 'Verdana';\n\n// Colors\n$EmojiPanel-background-header: #FCFCFC !default;\n$EmojiPanel-border-header: #F9F9F9 !default;\n$EmojiPanel-background-panel: #FFF !default;\n$EmojiPanel-border-input: #EEE !default;\n$EmojiPanel-category-title: #777 !default;\n\n// Padding and Borders\n$EmojiPanel-padding-results: 10px !default;\n$EmojiPanel-border-radius: 3px !default;\n\n// Dimensions\n$EmojiPanel-emoji-width: 34px !default;\n$EmojiPanel-width: $EmojiPanel-emoji-width * 7 + ($EmojiPanel-padding-results * 2);\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin: 0 0 10px; }\n", "", {"version":3,"sources":["/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/emoji-categories.scss"],"names":[],"mappings":"AAEA;EACE,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,oBAAe;MAAf,gBAAe;EACf,0BAA6B;MAA7B,8BAA6B;EAC7B,iBAAgB,EACjB","file":"emoji-categories.scss","sourcesContent":["@import '_constants';\n\n:host {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  margin: 0 0 10px;\n}\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".emoji-category {\n  margin: 15px 0 5px;\n  padding: 0 0 5px;\n  border-bottom: 1px solid #EEE;\n  color: #777;\n  font-family: \"Arial\", \"Arial Black\", \"Tahoma\", \"Trebuchet MS\", \"Verdana\"; }\n", "", {"version":3,"sources":["/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/emoji-category.scss","/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/_constants.scss"],"names":[],"mappings":"AAEA;EACI,mBAAkB;EAClB,iBAAgB;EAChB,8BCC0B;EDA1B,YCC4B;EDA5B,yECPgF,EDQnF","file":"emoji-category.scss","sourcesContent":["@import '_constants';\n\n.emoji-category {\n    margin: 15px 0 5px;\n    padding: 0 0 5px;\n    border-bottom: 1px solid $EmojiPanel-border-input;\n    color: $EmojiPanel-category-title;\n    font-family: $EmojiPanel-font-family;\n}\n","$EmojiPanel-font-family: 'Arial', 'Arial Black', 'Tahoma', 'Trebuchet MS', 'Verdana';\n\n// Colors\n$EmojiPanel-background-header: #FCFCFC !default;\n$EmojiPanel-border-header: #F9F9F9 !default;\n$EmojiPanel-background-panel: #FFF !default;\n$EmojiPanel-border-input: #EEE !default;\n$EmojiPanel-category-title: #777 !default;\n\n// Padding and Borders\n$EmojiPanel-padding-results: 10px !default;\n$EmojiPanel-border-radius: 3px !default;\n\n// Dimensions\n$EmojiPanel-emoji-width: 34px !default;\n$EmojiPanel-width: $EmojiPanel-emoji-width * 7 + ($EmojiPanel-padding-results * 2);\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  width: 100vw;\n  border-radius: 3px;\n  background: #FFF;\n  text-align: left;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12); }\n  @media (min-width: 258px) {\n    :host {\n      width: 258px; } }\n", "", {"version":3,"sources":["/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/emoji-content.scss","/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/_constants.scss"],"names":[],"mappings":"AAEA;EACE,eAAc;EACd,aAAY;EACZ,mBCM4B;EDL5B,iBCDgC;EDEhC,iBAAgB;EAChB,yHAA4G,EAK7G;EAHC;IARF;MASM,aCI4E,EDFjF,EAAA","file":"emoji-content.scss","sourcesContent":["@import '_constants';\n\n:host {\n  display: block;\n  width: 100vw;\n  border-radius: $EmojiPanel-border-radius;\n  background: $EmojiPanel-background-panel;\n  text-align: left;\n  box-shadow: 0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12);\n\n  @media(min-width: $EmojiPanel-width) {\n      width: $EmojiPanel-width;\n  }\n}\n","$EmojiPanel-font-family: 'Arial', 'Arial Black', 'Tahoma', 'Trebuchet MS', 'Verdana';\n\n// Colors\n$EmojiPanel-background-header: #FCFCFC !default;\n$EmojiPanel-border-header: #F9F9F9 !default;\n$EmojiPanel-background-panel: #FFF !default;\n$EmojiPanel-border-input: #EEE !default;\n$EmojiPanel-category-title: #777 !default;\n\n// Padding and Borders\n$EmojiPanel-padding-results: 10px !default;\n$EmojiPanel-border-radius: 3px !default;\n\n// Dimensions\n$EmojiPanel-emoji-width: 34px !default;\n$EmojiPanel-width: $EmojiPanel-emoji-width * 7 + ($EmojiPanel-padding-results * 2);\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".emoji-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 34px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-top: 1px solid #F9F9F9;\n  border-radius: 0 0 3px 3px;\n  padding: 10px;\n  background: #FCFCFC; }\n", "", {"version":3,"sources":["/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/emoji-footer.scss","/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/_constants.scss"],"names":[],"mappings":"AAEA;EACE,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,iBCU2B;EDT3B,0BAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB;EACnB,0BAA8B;MAA9B,uBAA8B;UAA9B,+BAA8B;EAC9B,8BCHgC;EDIhC,2BCG4B;EDF5B,cCC+B;EDA/B,oBCPoC,EDQrC","file":"emoji-footer.scss","sourcesContent":["@import '_constants';\n\n.emoji-footer {\n  display: flex;\n  min-height: $EmojiPanel-emoji-width;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid $EmojiPanel-border-header;\n  border-radius: 0 0 $EmojiPanel-border-radius $EmojiPanel-border-radius;\n  padding: $EmojiPanel-padding-results;\n  background: $EmojiPanel-background-header;\n}\n","$EmojiPanel-font-family: 'Arial', 'Arial Black', 'Tahoma', 'Trebuchet MS', 'Verdana';\n\n// Colors\n$EmojiPanel-background-header: #FCFCFC !default;\n$EmojiPanel-border-header: #F9F9F9 !default;\n$EmojiPanel-background-panel: #FFF !default;\n$EmojiPanel-border-input: #EEE !default;\n$EmojiPanel-category-title: #777 !default;\n\n// Padding and Borders\n$EmojiPanel-padding-results: 10px !default;\n$EmojiPanel-border-radius: 3px !default;\n\n// Dimensions\n$EmojiPanel-emoji-width: 34px !default;\n$EmojiPanel-width: $EmojiPanel-emoji-width * 7 + ($EmojiPanel-padding-results * 2);\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  border-bottom: 1px solid #F9F9F9;\n  border-radius: 3px 3px 0 0;\n  padding: 10px;\n  background: #FCFCFC; }\n", "", {"version":3,"sources":["/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/emoji-header.scss","/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/_constants.scss"],"names":[],"mappings":"AAEA;EACE,eAAc;EACd,iCCAgC;EDChC,2BAAsE;EACtE,cCI+B;EDH/B,oBCJoC,EDKrC","file":"emoji-header.scss","sourcesContent":["@import '_constants';\n\n:host {\n  display: block;\n  border-bottom: 1px solid $EmojiPanel-border-header;\n  border-radius: $EmojiPanel-border-radius $EmojiPanel-border-radius 0 0;\n  padding: $EmojiPanel-padding-results;\n  background: $EmojiPanel-background-header;\n}\n","$EmojiPanel-font-family: 'Arial', 'Arial Black', 'Tahoma', 'Trebuchet MS', 'Verdana';\n\n// Colors\n$EmojiPanel-background-header: #FCFCFC !default;\n$EmojiPanel-border-header: #F9F9F9 !default;\n$EmojiPanel-background-panel: #FFF !default;\n$EmojiPanel-border-input: #EEE !default;\n$EmojiPanel-category-title: #777 !default;\n\n// Padding and Borders\n$EmojiPanel-padding-results: 10px !default;\n$EmojiPanel-border-radius: 3px !default;\n\n// Dimensions\n$EmojiPanel-emoji-width: 34px !default;\n$EmojiPanel-width: $EmojiPanel-emoji-width * 7 + ($EmojiPanel-padding-results * 2);\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".emoji-list {\n  overflow-y: auto;\n  height: 300px;\n  padding: 0 10px 10px; }\n\n.emoji-buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n", "", {"version":3,"sources":["/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/emoji-list.scss","/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/_constants.scss"],"names":[],"mappings":"AAEA;EACE,iBAAgB;EAChB,cAAa;EACb,qBCK+B,EDJhC;;AAED;EACE,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,yBAAuB;MAAvB,sBAAuB;UAAvB,wBAAuB;EACvB,oBAAe;MAAf,gBAAe,EAChB","file":"emoji-list.scss","sourcesContent":["@import '_constants';\n\n.emoji-list {\n  overflow-y: auto;\n  height: 300px;\n  padding: 0 $EmojiPanel-padding-results $EmojiPanel-padding-results;\n}\n\n.emoji-buttons {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n","$EmojiPanel-font-family: 'Arial', 'Arial Black', 'Tahoma', 'Trebuchet MS', 'Verdana';\n\n// Colors\n$EmojiPanel-background-header: #FCFCFC !default;\n$EmojiPanel-border-header: #F9F9F9 !default;\n$EmojiPanel-background-panel: #FFF !default;\n$EmojiPanel-border-input: #EEE !default;\n$EmojiPanel-category-title: #777 !default;\n\n// Padding and Borders\n$EmojiPanel-padding-results: 10px !default;\n$EmojiPanel-border-radius: 3px !default;\n\n// Dimensions\n$EmojiPanel-emoji-width: 34px !default;\n$EmojiPanel-width: $EmojiPanel-emoji-width * 7 + ($EmojiPanel-padding-results * 2);\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "input {\n  width: 100%;\n  padding: 5px 14px;\n  border: 1px solid #EEE;\n  border-radius: 30px;\n  outline: none;\n  font-size: 14px;\n  font-weight: inherit;\n  box-sizing: border-box; }\n  input:focus {\n    border-color: #d5d5d5; }\n", "", {"version":3,"sources":["/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/emoji-search.scss","/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/_constants.scss"],"names":[],"mappings":"AAEA;EACE,YAAW;EACX,kBAAiB;EACjB,uBCC4B;EDA5B,oBAAmB;EACnB,cAAa;EACb,gBAAe;EACf,qBAAoB;EACpB,uBAAsB,EAKvB;EAbD;IAWM,sBAAmD,EACtD","file":"emoji-search.scss","sourcesContent":["@import '_constants';\n\ninput {\n  width: 100%;\n  padding: 5px 14px;\n  border: 1px solid $EmojiPanel-border-input;\n  border-radius: 30px;\n  outline: none;\n  font-size: 14px;\n  font-weight: inherit;\n  box-sizing: border-box;\n\n  &:focus {\n      border-color: darken($EmojiPanel-border-input, 10%);\n  }\n}\n","$EmojiPanel-font-family: 'Arial', 'Arial Black', 'Tahoma', 'Trebuchet MS', 'Verdana';\n\n// Colors\n$EmojiPanel-background-header: #FCFCFC !default;\n$EmojiPanel-border-header: #F9F9F9 !default;\n$EmojiPanel-background-panel: #FFF !default;\n$EmojiPanel-border-input: #EEE !default;\n$EmojiPanel-category-title: #777 !default;\n\n// Padding and Borders\n$EmojiPanel-padding-results: 10px !default;\n$EmojiPanel-border-radius: 3px !default;\n\n// Dimensions\n$EmojiPanel-emoji-width: 34px !default;\n$EmojiPanel-width: $EmojiPanel-emoji-width * 7 + ($EmojiPanel-padding-results * 2);\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".emoji-toggle-button {\n  font-style: normal;\n  padding: 5px;\n  cursor: pointer;\n  font-size: 3rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.main {\n  text-align: center;\n}\n\nheader {\n  text-align: center;\n  font-family: 'Arial', 'Arial Black', 'Tahoma', 'Trebuchet MS', 'Verdana';\n}\n", "", {"version":3,"sources":["/Users/lsharir/500tech/EmojiPanel-for-Angular/demo/src/app/app.component.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,0BAAkB;KAAlB,uBAAkB;MAAlB,sBAAkB;UAAlB,kBAAkB;CACnB;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,mBAAmB;EACnB,yEAAyE;CAC1E","file":"app.component.css","sourcesContent":[".emoji-toggle-button {\n  font-style: normal;\n  padding: 5px;\n  cursor: pointer;\n  font-size: 3rem;\n  user-select: none;\n}\n\n.main {\n  text-align: center;\n}\n\nheader {\n  text-align: center;\n  font-family: 'Arial', 'Arial Black', 'Tahoma', 'Trebuchet MS', 'Verdana';\n}\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emoji_button_component__ = __webpack_require__(84);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__emoji_button_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emoji_content_component__ = __webpack_require__(87);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__emoji_content_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emoji_picker_component__ = __webpack_require__(91);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__emoji_picker_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__emoji_header_component__ = __webpack_require__(89);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__emoji_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__emoji_list_component__ = __webpack_require__(90);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__emoji_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__emoji_categories_component__ = __webpack_require__(85);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__emoji_categories_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__emoji_search_component__ = __webpack_require__(92);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__emoji_search_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__emoji_category_component__ = __webpack_require__(86);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__emoji_category_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__emoji_footer_component__ = __webpack_require__(88);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_8__emoji_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9____ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPONENTS; });










var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_9____["c" /* EmojiButtonComponent */],
    __WEBPACK_IMPORTED_MODULE_9____["d" /* EmojiContentComponent */],
    __WEBPACK_IMPORTED_MODULE_9____["b" /* EmojiPickerComponent */],
    __WEBPACK_IMPORTED_MODULE_9____["e" /* EmojiListComponent */],
    __WEBPACK_IMPORTED_MODULE_9____["f" /* EmojiHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_9____["g" /* EmojiSearchComponent */],
    __WEBPACK_IMPORTED_MODULE_9____["h" /* EmojiCategoriesComponent */],
    __WEBPACK_IMPORTED_MODULE_9____["i" /* EmojiCategoryComponent */],
    __WEBPACK_IMPORTED_MODULE_9____["j" /* EmojiFooterComponent */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>Angular Emoji Picker</h1>\n</header>\n\n<code><pre>\n  [(emojiPickerIf)]=\"{{toggled}}\"\n  (emojiPickerSelect)=\"handleSelection($event{{' = ' + eventMock}})\"\n</pre></code>\n\n<div class=\"main\">\n  <i\n    class=\"emoji-toggle-button\"\n    (click)=\"toggled = !toggled\"\n    emojiPickerAnchor\n    [(emojiPickerIf)]=\"toggled\"\n    (emojiPickerSelect)=\"handleSelection($event)\">😄</i>\n</div>\n\n<footer>\n\n</footer>\n"

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74);


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emoji_picker_anchor_directive__ = __webpack_require__(93);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__emoji_picker_anchor_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DIRECTIVES; });


var DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_1____["b" /* EmojiPickerAnchorDirective */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 73;


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(83);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.handleSelection = function (e) {
        this.eventMock = JSON.stringify(e);
        console.log(e);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(161),
        styles: [__webpack_require__(159)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__src__["a" /* EmojiPickerModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmojiButtonComponent = (function () {
    function EmojiButtonComponent() {
        this.selectionEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
    }
    EmojiButtonComponent.prototype.ngOnChanges = function () {
    };
    return EmojiButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])('emoji'),
    __metadata("design:type", Object)
], EmojiButtonComponent.prototype, "emoji", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])('dataToEmit'),
    __metadata("design:type", Object)
], EmojiButtonComponent.prototype, "dataToEmit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])('options'),
    __metadata("design:type", Object)
], EmojiButtonComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])('fitzpatrick'),
    __metadata("design:type", Object)
], EmojiButtonComponent.prototype, "fitzpatrick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Output */])('selection'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]) === "function" && _a || Object)
], EmojiButtonComponent.prototype, "selectionEmitter", void 0);
EmojiButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'emoji-button',
        styles: [__webpack_require__(151)],
        template: "\n<button\n  class=\"emoji-button\" \n  (click)=\"selectionEmitter.emit(dataToEmit || emoji)\">\n  {{emoji[0]}}\n</button>\n  "
    }),
    __metadata("design:paramtypes", [])
], EmojiButtonComponent);

var _a;
//# sourceMappingURL=emoji-button.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiCategoriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmojiCategoriesComponent = (function () {
    function EmojiCategoriesComponent() {
        this.categorySelection = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
    }
    EmojiCategoriesComponent.prototype.handleCategorySelection = function (event) {
        this.categorySelection.emit(event);
    };
    return EmojiCategoriesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])('emojisCategories'),
    __metadata("design:type", Object)
], EmojiCategoriesComponent.prototype, "emojisCategories", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Output */])('categorySelection'),
    __metadata("design:type", Object)
], EmojiCategoriesComponent.prototype, "categorySelection", void 0);
EmojiCategoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'emoji-categories',
        styles: [__webpack_require__(152)],
        template: "\n  <ng-container *ngFor=\"let category of emojisCategories\">\n    <emoji-button \n      (selection)=\"handleCategorySelection($event)\"\n      [dataToEmit]=\"category\"\n      [emoji]=\"category.icon\"></emoji-button>\n  </ng-container>\n  "
    }),
    __metadata("design:paramtypes", [])
], EmojiCategoriesComponent);

//# sourceMappingURL=emoji-categories.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiCategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmojiCategoryComponent = (function () {
    function EmojiCategoryComponent(_element) {
        this._element = _element;
    }
    EmojiCategoryComponent.prototype.scrollIntoView = function () {
        this._element.nativeElement.scrollIntoView();
    };
    return EmojiCategoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])('category'),
    __metadata("design:type", Object)
], EmojiCategoryComponent.prototype, "category", void 0);
EmojiCategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'emoji-category',
        styles: [__webpack_require__(153)],
        template: "\n  <p class=\"emoji-category\">{{category.name}}</p>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */]) === "function" && _a || Object])
], EmojiCategoryComponent);

var _a;
//# sourceMappingURL=emoji-category.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emojis_data__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmojiContentComponent = (function () {
    function EmojiContentComponent() {
        this.emojiSelectionEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        this._emojis = __WEBPACK_IMPORTED_MODULE_1__emojis_data__["a" /* EMOJIS */];
        this.emojis = this._emojis.slice();
        this.emojisCategories = this._emojis.map(function (category) { return Object.assign({}, category, { emojis: [] }); });
    }
    EmojiContentComponent.prototype.searchHandler = function (value) {
        var _this = this;
        var filteredEmojis = this.emojisCategories.map(function (category) { return Object.assign({}, category, { emojis: [] }); });
        value = value.replace(/-/g, '').toLowerCase();
        Object.keys(this._emojis).forEach(function (i) {
            var category = _this._emojis[i];
            category.emojis.forEach(function (emoji) {
                if (emoji[1].indexOf(value) !== -1) {
                    filteredEmojis[i].emojis.push(emoji);
                }
            });
        });
        this.emojis = filteredEmojis;
    };
    EmojiContentComponent.prototype.categorySelectionHandler = function (event) {
        this.emojiListComponent.selectCategory(event);
    };
    return EmojiContentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewChild */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_2____["e" /* EmojiListComponent */]; })),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2____["e" /* EmojiListComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2____["e" /* EmojiListComponent */]) === "function" && _a || Object)
], EmojiContentComponent.prototype, "emojiListComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Output */])('emoji-selection'),
    __metadata("design:type", Object)
], EmojiContentComponent.prototype, "emojiSelectionEmitter", void 0);
EmojiContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'emoji-content',
        styles: [__webpack_require__(154)],
        template: "\n  <emoji-header \n    [emojisCategories]=\"emojisCategories\"\n    (categorySelection)=\"categorySelectionHandler($event)\"\n    (search)=\"searchHandler($event)\"></emoji-header>\n  <emoji-list [emojis]=\"emojis\" (emoji-selection)=\"emojiSelectionEmitter.emit($event)\"></emoji-list>\n  <emoji-footer></emoji-footer>\n  "
    }),
    __metadata("design:paramtypes", [])
], EmojiContentComponent);

var _a;
//# sourceMappingURL=emoji-content.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmojiFooterComponent = (function () {
    function EmojiFooterComponent() {
    }
    return EmojiFooterComponent;
}());
EmojiFooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'emoji-footer',
        styles: [__webpack_require__(155)],
        template: "\n  <footer class=\"emoji-footer\"></footer>\n  "
    }),
    __metadata("design:paramtypes", [])
], EmojiFooterComponent);

//# sourceMappingURL=emoji-footer.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmojiHeaderComponent = (function () {
    function EmojiHeaderComponent() {
        this.categorySelection = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        this.searchEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
    }
    return EmojiHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])('emojisCategories'),
    __metadata("design:type", Object)
], EmojiHeaderComponent.prototype, "emojisCategories", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Output */])('categorySelection'),
    __metadata("design:type", Object)
], EmojiHeaderComponent.prototype, "categorySelection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Output */])('search'),
    __metadata("design:type", Object)
], EmojiHeaderComponent.prototype, "searchEmitter", void 0);
EmojiHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'emoji-header',
        styles: [__webpack_require__(156)],
        template: "\n  <emoji-categories [emojisCategories]=\"emojisCategories\" (categorySelection)=\"categorySelection.emit($event)\"></emoji-categories>\n  <emoji-search (search)=\"searchEmitter.emit($event)\"></emoji-search>\n  "
    }),
    __metadata("design:paramtypes", [])
], EmojiHeaderComponent);

//# sourceMappingURL=emoji-header.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmojiListComponent = (function () {
    function EmojiListComponent() {
        this.emojiSelectionEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
    }
    EmojiListComponent.prototype.selectCategory = function (event) {
        this.emojiCategoryComponents.forEach(function (categoryCmp) {
            if (categoryCmp['category'].name === event.name) {
                categoryCmp.scrollIntoView();
            }
        });
    };
    return EmojiListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ViewChildren */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_1____["i" /* EmojiCategoryComponent */]; })),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* QueryList */]) === "function" && _a || Object)
], EmojiListComponent.prototype, "emojiCategoryComponents", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])('emojis'),
    __metadata("design:type", Object)
], EmojiListComponent.prototype, "emojis", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Output */])('emoji-selection'),
    __metadata("design:type", Object)
], EmojiListComponent.prototype, "emojiSelectionEmitter", void 0);
EmojiListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'emoji-list',
        styles: [__webpack_require__(157)],
        template: "\n  <div class=\"emoji-list\">\n    <ng-container *ngFor=\"let emojiCategory of emojis | notEmptyEmojiCategory\">\n      <emoji-category [category]=\"emojiCategory\"></emoji-category>\n      <div class=\"emoji-buttons\">\n        <emoji-button \n        *ngFor=\"let emoji of emojiCategory.emojis\"\n        (selection)=\"emojiSelectionEmitter.emit($event)\"\n        [emoji]=\"emoji\"></emoji-button>\n      </div>\n    </ng-container>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], EmojiListComponent);

var _a;
//# sourceMappingURL=emoji-list.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmojiPickerComponent = (function () {
    function EmojiPickerComponent(_renderer, _el) {
        this._renderer = _renderer;
        this._el = _el;
        this.selectionEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        this.pickerCloseEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
    }
    EmojiPickerComponent.prototype.setPosition = function (target) {
        this._renderer.setElementStyle(this._el.nativeElement, 'transform', '');
        var targetBorders = target.nativeElement.getBoundingClientRect(), thisBorders = this._el.nativeElement.getBoundingClientRect();
        var heightCorrection = targetBorders.bottom - thisBorders.top, widthCorrection = targetBorders.left + targetBorders.width / 2 - thisBorders.left - thisBorders.width / 2;
        if (thisBorders.bottom + heightCorrection > window.innerHeight) {
            heightCorrection += window.innerHeight - (thisBorders.bottom + heightCorrection);
        }
        if (thisBorders.top + heightCorrection < 0) {
            heightCorrection -= (thisBorders.top + heightCorrection);
        }
        if (thisBorders.right + widthCorrection > window.innerWidth) {
            widthCorrection += window.innerWidth - (thisBorders.right + widthCorrection);
        }
        if (thisBorders.left + widthCorrection < 0) {
            widthCorrection -= (thisBorders.left + widthCorrection);
        }
        this._renderer.setElementStyle(this._el.nativeElement, 'transform', "translate(" + widthCorrection + "px," + heightCorrection + "px)");
    };
    EmojiPickerComponent.prototype.onBackground = function (event) {
        /** internal mousedowns are ignored */
        if (event === this._lastHostMousedownEvent || event.emojiPickerExempt) {
            return;
        }
        this.pickerCloseEmitter.emit(event);
    };
    return EmojiPickerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Output */])('emoji-select'),
    __metadata("design:type", Object)
], EmojiPickerComponent.prototype, "selectionEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Output */])('picker-close'),
    __metadata("design:type", Object)
], EmojiPickerComponent.prototype, "pickerCloseEmitter", void 0);
EmojiPickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'emoji-picker',
        styles: [':host { position: absolute; }'],
        template: "\n  <emoji-content (emoji-selection)=\"selectionEmitter.emit($event)\"></emoji-content>\n  ",
        host: {
            '(document:mousedown)': 'onBackground($event)',
            '(mousedown)': '_lastHostMousedownEvent = $event'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Renderer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */]) === "function" && _b || Object])
], EmojiPickerComponent);

var _a, _b;
//# sourceMappingURL=emoji-picker.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_throttleTime__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_throttleTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_throttleTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmojiSearchComponent = (function () {
    function EmojiSearchComponent(_renderer) {
        var _this = this;
        this._renderer = _renderer;
        this.searchEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        this._searchValue = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._destroyed = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._searchValue
            .takeUntil(this._destroyed)
            .subscribe(function (value) {
            _this.searchEmitter.emit(value);
        });
    }
    EmojiSearchComponent.prototype.ngAfterViewInit = function () {
        this._renderer.invokeElementMethod(this.input.nativeElement, 'focus');
    };
    EmojiSearchComponent.prototype.handleInputChange = function (event) {
        this._searchValue.next(event);
    };
    EmojiSearchComponent.prototype.ngOnDestroy = function () {
        this._destroyed.next(true);
    };
    return EmojiSearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Output */])('search'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]) === "function" && _a || Object)
], EmojiSearchComponent.prototype, "searchEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewChild */])('input'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */]) === "function" && _b || Object)
], EmojiSearchComponent.prototype, "input", void 0);
EmojiSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'emoji-search',
        styles: [__webpack_require__(158)],
        template: "\n  <input type=\"text\" autocomplete=\"off\" #input (input)=\"handleInputChange($event.target.value)\" placeholder=\"Search\"/>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Renderer */]) === "function" && _c || Object])
], EmojiSearchComponent);

var _a, _b, _c;
//# sourceMappingURL=emoji-search.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerAnchorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmojiPickerAnchorDirective = (function () {
    function EmojiPickerAnchorDirective(_cfr, _vcr, _el) {
        this._cfr = _cfr;
        this._vcr = _vcr;
        this._el = _el;
        this.ifValue = false;
        this.ifValueEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        this.selectEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        this._openState = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._destroyed = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    EmojiPickerAnchorDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._openState.next(this.ifValue);
        this._openState
            .takeUntil(this._destroyed)
            .distinctUntilChanged()
            .subscribe(function (value) {
            if (value) {
                _this.openPicker();
            }
            else {
                _this.closePicker();
            }
        });
    };
    EmojiPickerAnchorDirective.prototype.openPicker = function () {
        var _this = this;
        this._emojiPickerFactory = this._emojiPickerFactory || this._cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__components__["b" /* EmojiPickerComponent */]);
        this._emojiPickerRef = this._emojiPickerRef || this._vcr.createComponent(this._emojiPickerFactory);
        this._emojiPickerRef.instance.setPosition(this._el);
        this._emojiPickerRef.instance.pickerCloseEmitter.subscribe(function (event) { return _this.ifValueEmitter.emit(false); });
        this._emojiPickerRef.instance.selectionEmitter.subscribe(function (event) { return _this.selectEmitter.emit(event); });
    };
    EmojiPickerAnchorDirective.prototype.closePicker = function () {
        this._emojiPickerRef.destroy();
        delete this._emojiPickerRef;
    };
    EmojiPickerAnchorDirective.prototype.ngOnChanges = function () {
        this._openState.next(this.ifValue);
    };
    EmojiPickerAnchorDirective.prototype.ngOnDestroy = function () {
        this._destroyed.next(true);
    };
    return EmojiPickerAnchorDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])('emojiPickerIf'),
    __metadata("design:type", Boolean)
], EmojiPickerAnchorDirective.prototype, "ifValue", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Output */])('emojiPickerIfChange'),
    __metadata("design:type", Object)
], EmojiPickerAnchorDirective.prototype, "ifValueEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Output */])('emojiPickerSelect'),
    __metadata("design:type", Object)
], EmojiPickerAnchorDirective.prototype, "selectEmitter", void 0);
EmojiPickerAnchorDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Directive */])({
        selector: '[emojiPickerAnchor]',
        host: {
            '(mousedown)': '$event.emojiPickerExempt = true' // marking off event listening on anchor
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ViewContainerRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */]) === "function" && _c || Object])
], EmojiPickerAnchorDirective);

var _a, _b, _c;
//# sourceMappingURL=emoji-picker-anchor.directive.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EmojiPickerModule = EmojiPickerModule_1 = (function () {
    function EmojiPickerModule() {
    }
    EmojiPickerModule.forRoot = function () {
        return {
            ngModule: EmojiPickerModule_1,
            providers: []
        };
    };
    return EmojiPickerModule;
}());
EmojiPickerModule = EmojiPickerModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        exports: __WEBPACK_IMPORTED_MODULE_3__directives__["a" /* DIRECTIVES */].concat(__WEBPACK_IMPORTED_MODULE_2__components__["a" /* COMPONENTS */]),
        declarations: __WEBPACK_IMPORTED_MODULE_4__pipes__["a" /* PIPES */].concat(__WEBPACK_IMPORTED_MODULE_3__directives__["a" /* DIRECTIVES */], __WEBPACK_IMPORTED_MODULE_2__components__["a" /* COMPONENTS */]),
        providers: [],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__components__["b" /* EmojiPickerComponent */]]
    })
], EmojiPickerModule);

var EmojiPickerModule_1;
//# sourceMappingURL=emoji-picker.module.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMOJIS; });
var EMOJIS = [
    {
        "emojis": [
            [
                "😄",
                "smile"
            ],
            [
                "😃",
                "smiley"
            ],
            [
                "😀",
                "grinning"
            ],
            [
                "😊",
                "blush"
            ],
            [
                "☺",
                "relaxed"
            ],
            [
                "😉",
                "wink"
            ],
            [
                "😍",
                "heart_eyes"
            ],
            [
                "😘",
                "kissing_heart"
            ],
            [
                "😚",
                "kissing_closed_eyes"
            ],
            [
                "😗",
                "kissing"
            ],
            [
                "😙",
                "kissing_smiling_eyes"
            ],
            [
                "😜",
                "stuck_out_tongue_winking_eye"
            ],
            [
                "😝",
                "stuck_out_tongue_closed_eyes"
            ],
            [
                "😛",
                "stuck_out_tongue"
            ],
            [
                "😳",
                "flushed"
            ],
            [
                "😁",
                "grin"
            ],
            [
                "😔",
                "pensive"
            ],
            [
                "😌",
                "relieved"
            ],
            [
                "😒",
                "unamused"
            ],
            [
                "😞",
                "disappointed"
            ],
            [
                "😣",
                "persevere"
            ],
            [
                "😢",
                "cry"
            ],
            [
                "😂",
                "joy"
            ],
            [
                "😭",
                "sob"
            ],
            [
                "😪",
                "sleepy"
            ],
            [
                "😥",
                "disappointed_relieved"
            ],
            [
                "😰",
                "cold_sweat"
            ],
            [
                "😅",
                "sweat_smile"
            ],
            [
                "😓",
                "sweat"
            ],
            [
                "😩",
                "weary"
            ],
            [
                "😫",
                "tired_face"
            ],
            [
                "😨",
                "fearful"
            ],
            [
                "😱",
                "scream"
            ],
            [
                "😠",
                "angry"
            ],
            [
                "😡",
                "rage"
            ],
            [
                "😤",
                "triumph"
            ],
            [
                "😖",
                "confounded"
            ],
            [
                "😆",
                "laughing"
            ],
            [
                "😋",
                "yum"
            ],
            [
                "😷",
                "mask"
            ],
            [
                "😎",
                "sunglasses"
            ],
            [
                "😴",
                "sleeping"
            ],
            [
                "😵",
                "dizzy_face"
            ],
            [
                "😲",
                "astonished"
            ],
            [
                "😟",
                "worried"
            ],
            [
                "😦",
                "frowning"
            ],
            [
                "😧",
                "anguished"
            ],
            [
                "👿",
                "imp"
            ],
            [
                "😮",
                "open_mouth"
            ],
            [
                "😬",
                "grimacing"
            ],
            [
                "😐",
                "neutral_face"
            ],
            [
                "😕",
                "confused"
            ],
            [
                "😯",
                "hushed"
            ],
            [
                "😏",
                "smirk"
            ],
            [
                "😑",
                "expressionless"
            ],
            [
                "👲",
                "man_with_gua_pi_mao"
            ],
            [
                "👳",
                "man_with_turban"
            ],
            [
                "👮",
                "cop"
            ],
            [
                "👷",
                "construction_worker"
            ],
            [
                "💂",
                "guardsman"
            ],
            [
                "👶",
                "baby"
            ],
            [
                "👦",
                "boy"
            ],
            [
                "👧",
                "girl"
            ],
            [
                "👨",
                "man"
            ],
            [
                "👩",
                "woman"
            ],
            [
                "👴",
                "older_man"
            ],
            [
                "👵",
                "older_woman"
            ],
            [
                "👱",
                "person_with_blond_hair"
            ],
            [
                "👼",
                "angel"
            ],
            [
                "👸",
                "princess"
            ],
            [
                "😺",
                "smiley_cat"
            ],
            [
                "😸",
                "smile_cat"
            ],
            [
                "😻",
                "heart_eyes_cat"
            ],
            [
                "😽",
                "kissing_cat"
            ],
            [
                "😼",
                "smirk_cat"
            ],
            [
                "🙀",
                "scream_cat"
            ],
            [
                "😿",
                "crying_cat_face"
            ],
            [
                "😹",
                "joy_cat"
            ],
            [
                "😾",
                "pouting_cat"
            ],
            [
                "👹",
                "japanese_ogre"
            ],
            [
                "👺",
                "japanese_goblin"
            ],
            [
                "🙈",
                "see_no_evil"
            ],
            [
                "🙉",
                "hear_no_evil"
            ],
            [
                "🙊",
                "speak_no_evil"
            ],
            [
                "💀",
                "skull"
            ],
            [
                "👽",
                "alien"
            ],
            [
                "💩",
                "hankey"
            ],
            [
                "🔥",
                "fire"
            ],
            [
                "✨",
                "sparkles"
            ],
            [
                "🌟",
                "star2"
            ],
            [
                "💫",
                "dizzy"
            ],
            [
                "💥",
                "boom"
            ],
            [
                "💢",
                "anger"
            ],
            [
                "💦",
                "sweat_drops"
            ],
            [
                "💧",
                "droplet"
            ],
            [
                "💤",
                "zzz"
            ],
            [
                "💨",
                "dash"
            ],
            [
                "👂",
                "ear"
            ],
            [
                "👀",
                "eyes"
            ],
            [
                "👃",
                "nose"
            ],
            [
                "👅",
                "tongue"
            ],
            [
                "👄",
                "lips"
            ],
            [
                "👍",
                "thumbs_up"
            ],
            [
                "👎",
                "-1"
            ],
            [
                "👌",
                "ok_hand"
            ],
            [
                "👊",
                "facepunch"
            ],
            [
                "✊",
                "fist"
            ],
            [
                "✌",
                "v"
            ],
            [
                "👋",
                "wave"
            ],
            [
                "✋",
                "hand"
            ],
            [
                "👐",
                "open_hands"
            ],
            [
                "👆",
                "point_up_2"
            ],
            [
                "👇",
                "point_down"
            ],
            [
                "👉",
                "point_right"
            ],
            [
                "👈",
                "point_left"
            ],
            [
                "🙌",
                "raised_hands"
            ],
            [
                "🙏",
                "pray"
            ],
            [
                "☝",
                "point_up"
            ],
            [
                "👏",
                "clap"
            ],
            [
                "💪",
                "muscle"
            ],
            [
                "🚶",
                "walking"
            ],
            [
                "🏃",
                "runner"
            ],
            [
                "💃",
                "dancer"
            ],
            [
                "👫",
                "couple"
            ],
            [
                "👪",
                "family"
            ],
            [
                "💏",
                "couplekiss"
            ],
            [
                "💑",
                "couple_with_heart"
            ],
            [
                "👯",
                "dancers"
            ],
            [
                "🙆",
                "ok_woman"
            ],
            [
                "🙅",
                "no_good"
            ],
            [
                "💁",
                "information_desk_person"
            ],
            [
                "🙋",
                "raising_hand"
            ],
            [
                "💆",
                "massage"
            ],
            [
                "💇",
                "haircut"
            ],
            [
                "💅",
                "nail_care"
            ],
            [
                "👰",
                "bride_with_veil"
            ],
            [
                "🙎",
                "person_with_pouting_face"
            ],
            [
                "🙍",
                "person_frowning"
            ],
            [
                "🙇",
                "bow"
            ],
            [
                "🎩",
                "tophat"
            ],
            [
                "👑",
                "crown"
            ],
            [
                "👒",
                "womans_hat"
            ],
            [
                "👟",
                "athletic_shoe"
            ],
            [
                "👞",
                "mans_shoe"
            ],
            [
                "👡",
                "sandal"
            ],
            [
                "👠",
                "high_heel"
            ],
            [
                "👢",
                "boot"
            ],
            [
                "👕",
                "shirt"
            ],
            [
                "👔",
                "necktie"
            ],
            [
                "👚",
                "womans_clothes"
            ],
            [
                "👗",
                "dress"
            ],
            [
                "🎽",
                "running_shirt_with_sash"
            ],
            [
                "👖",
                "jeans"
            ],
            [
                "👘",
                "kimono"
            ],
            [
                "👙",
                "bikini"
            ],
            [
                "💼",
                "briefcase"
            ],
            [
                "👜",
                "handbag"
            ],
            [
                "👝",
                "pouch"
            ],
            [
                "👛",
                "purse"
            ],
            [
                "👓",
                "eyeglasses"
            ],
            [
                "🎀",
                "ribbon"
            ],
            [
                "🌂",
                "closed_umbrella"
            ],
            [
                "💄",
                "lipstick"
            ],
            [
                "💛",
                "yellow_heart"
            ],
            [
                "💙",
                "blue_heart"
            ],
            [
                "💜",
                "purple_heart"
            ],
            [
                "💚",
                "green_heart"
            ],
            [
                "❤",
                "heart"
            ],
            [
                "💔",
                "broken_heart"
            ],
            [
                "💗",
                "heartpulse"
            ],
            [
                "💓",
                "heartbeat"
            ],
            [
                "💕",
                "two_hearts"
            ],
            [
                "💖",
                "sparkling_heart"
            ],
            [
                "💞",
                "revolving_hearts"
            ],
            [
                "💘",
                "cupid"
            ],
            [
                "💌",
                "love_letter"
            ],
            [
                "💋",
                "kiss"
            ],
            [
                "💍",
                "ring"
            ],
            [
                "💎",
                "gem"
            ],
            [
                "👤",
                "bust_in_silhouette"
            ],
            [
                "💬",
                "speech_balloon"
            ],
            [
                "👣",
                "footprints"
            ]
        ],
        "name": "People",
        "icon": ["😄", "smile"]
    },
    {
        "emojis": [
            [
                "🐶",
                "dog"
            ],
            [
                "🐺",
                "wolf"
            ],
            [
                "🐱",
                "cat"
            ],
            [
                "🐭",
                "mouse"
            ],
            [
                "🐹",
                "hamster"
            ],
            [
                "🐰",
                "rabbit"
            ],
            [
                "🐸",
                "frog"
            ],
            [
                "🐯",
                "tiger"
            ],
            [
                "🐨",
                "koala"
            ],
            [
                "🐻",
                "bear"
            ],
            [
                "🐷",
                "pig"
            ],
            [
                "🐽",
                "pig_nose"
            ],
            [
                "🐮",
                "cow"
            ],
            [
                "🐗",
                "boar"
            ],
            [
                "🐵",
                "monkey_face"
            ],
            [
                "🐒",
                "monkey"
            ],
            [
                "🐴",
                "horse"
            ],
            [
                "🐑",
                "sheep"
            ],
            [
                "🐘",
                "elephant"
            ],
            [
                "🐼",
                "panda_face"
            ],
            [
                "🐧",
                "penguin"
            ],
            [
                "🐦",
                "bird"
            ],
            [
                "🐤",
                "baby_chick"
            ],
            [
                "🐥",
                "hatched_chick"
            ],
            [
                "🐣",
                "hatching_chick"
            ],
            [
                "🐔",
                "chicken"
            ],
            [
                "🐍",
                "snake"
            ],
            [
                "🐢",
                "turtle"
            ],
            [
                "🐛",
                "bug"
            ],
            [
                "🐝",
                "bee"
            ],
            [
                "🐜",
                "ant"
            ],
            [
                "🐞",
                "beetle"
            ],
            [
                "🐌",
                "snail"
            ],
            [
                "🐙",
                "octopus"
            ],
            [
                "🐚",
                "shell"
            ],
            [
                "🐠",
                "tropical_fish"
            ],
            [
                "🐟",
                "fish"
            ],
            [
                "🐬",
                "dolphin"
            ],
            [
                "🐳",
                "whale"
            ],
            [
                "🐎",
                "racehorse"
            ],
            [
                "🐲",
                "dragon_face"
            ],
            [
                "🐡",
                "blowfish"
            ],
            [
                "🐫",
                "camel"
            ],
            [
                "🐩",
                "poodle"
            ],
            [
                "🐾",
                "feet"
            ],
            [
                "💐",
                "bouquet"
            ],
            [
                "🌸",
                "cherry_blossom"
            ],
            [
                "🌷",
                "tulip"
            ],
            [
                "🍀",
                "four_leaf_clover"
            ],
            [
                "🌹",
                "rose"
            ],
            [
                "🌻",
                "sunflower"
            ],
            [
                "🌺",
                "hibiscus"
            ],
            [
                "🍁",
                "maple_leaf"
            ],
            [
                "🍃",
                "leaves"
            ],
            [
                "🍂",
                "fallen_leaf"
            ],
            [
                "🌿",
                "herb"
            ],
            [
                "🌾",
                "ear_of_rice"
            ],
            [
                "🍄",
                "mushroom"
            ],
            [
                "🌵",
                "cactus"
            ],
            [
                "🌴",
                "palm_tree"
            ],
            [
                "🌰",
                "chestnut"
            ],
            [
                "🌱",
                "seedling"
            ],
            [
                "🌼",
                "blossom"
            ],
            [
                "🌑",
                "new_moon"
            ],
            [
                "🌓",
                "first_quarter_moon"
            ],
            [
                "🌔",
                "moon"
            ],
            [
                "🌕",
                "full_moon"
            ],
            [
                "🌛",
                "first_quarter_moon_with_face"
            ],
            [
                "🌙",
                "crescent_moon"
            ],
            [
                "🌏",
                "earth_asia"
            ],
            [
                "🌋",
                "volcano"
            ],
            [
                "🌌",
                "milky_way"
            ],
            [
                "🌠",
                "stars"
            ],
            [
                "⭐",
                "star"
            ],
            [
                "☀",
                "sunny"
            ],
            [
                "⛅",
                "partly_sunny"
            ],
            [
                "☁",
                "cloud"
            ],
            [
                "⚡",
                "zap"
            ],
            [
                "☔",
                "umbrella"
            ],
            [
                "❄",
                "snowflake"
            ],
            [
                "⛄",
                "snowman"
            ],
            [
                "🌀",
                "cyclone"
            ],
            [
                "🌁",
                "foggy"
            ],
            [
                "🌈",
                "rainbow"
            ],
            [
                "🌊",
                "ocean"
            ]
        ],
        "name": "Nature",
        "icon": ["🌸", "cherry_blossom"]
    },
    {
        "emojis": [
            [
                "🎍",
                "bamboo"
            ],
            [
                "💝",
                "gift_heart"
            ],
            [
                "🎎",
                "dolls"
            ],
            [
                "🎒",
                "school_satchel"
            ],
            [
                "🎓",
                "mortar_board"
            ],
            [
                "🎏",
                "flags"
            ],
            [
                "🎆",
                "fireworks"
            ],
            [
                "🎇",
                "sparkler"
            ],
            [
                "🎐",
                "wind_chime"
            ],
            [
                "🎑",
                "rice_scene"
            ],
            [
                "🎃",
                "jack_o_lantern"
            ],
            [
                "👻",
                "ghost"
            ],
            [
                "🎅",
                "santa"
            ],
            [
                "🎄",
                "christmas_tree"
            ],
            [
                "🎁",
                "gift"
            ],
            [
                "🎋",
                "tanabata_tree"
            ],
            [
                "🎉",
                "tada"
            ],
            [
                "🎊",
                "confetti_ball"
            ],
            [
                "🎈",
                "balloon"
            ],
            [
                "🎌",
                "crossed_flags"
            ],
            [
                "🔮",
                "crystal_ball"
            ],
            [
                "🎥",
                "movie_camera"
            ],
            [
                "📷",
                "camera"
            ],
            [
                "📹",
                "video_camera"
            ],
            [
                "📼",
                "vhs"
            ],
            [
                "💿",
                "cd"
            ],
            [
                "📀",
                "dvd"
            ],
            [
                "💽",
                "minidisc"
            ],
            [
                "💾",
                "floppy_disk"
            ],
            [
                "💻",
                "computer"
            ],
            [
                "📱",
                "iphone"
            ],
            [
                "☎",
                "phone"
            ],
            [
                "📞",
                "telephone_receiver"
            ],
            [
                "📟",
                "pager"
            ],
            [
                "📠",
                "fax"
            ],
            [
                "📡",
                "satellite"
            ],
            [
                "📺",
                "tv"
            ],
            [
                "📻",
                "radio"
            ],
            [
                "🔊",
                "loud_sound"
            ],
            [
                "🔔",
                "bell"
            ],
            [
                "📢",
                "loudspeaker"
            ],
            [
                "📣",
                "mega"
            ],
            [
                "⏳",
                "hourglass_flowing_sand"
            ],
            [
                "⌛",
                "hourglass"
            ],
            [
                "⏰",
                "alarm_clock"
            ],
            [
                "⌚",
                "watch"
            ],
            [
                "🔓",
                "unlock"
            ],
            [
                "🔒",
                "lock"
            ],
            [
                "🔏",
                "lock_with_ink_pen"
            ],
            [
                "🔐",
                "closed_lock_with_key"
            ],
            [
                "🔑",
                "key"
            ],
            [
                "🔎",
                "mag_right"
            ],
            [
                "💡",
                "bulb"
            ],
            [
                "🔦",
                "flashlight"
            ],
            [
                "🔌",
                "electric_plug"
            ],
            [
                "🔋",
                "battery"
            ],
            [
                "🔍",
                "mag"
            ],
            [
                "🛀",
                "bath"
            ],
            [
                "🚽",
                "toilet"
            ],
            [
                "🔧",
                "wrench"
            ],
            [
                "🔩",
                "nut_and_bolt"
            ],
            [
                "🔨",
                "hammer"
            ],
            [
                "🚪",
                "door"
            ],
            [
                "🚬",
                "smoking"
            ],
            [
                "💣",
                "bomb"
            ],
            [
                "🔫",
                "gun"
            ],
            [
                "🔪",
                "hocho"
            ],
            [
                "💊",
                "pill"
            ],
            [
                "💉",
                "syringe"
            ],
            [
                "💰",
                "moneybag"
            ],
            [
                "💴",
                "yen"
            ],
            [
                "💵",
                "dollar"
            ],
            [
                "💳",
                "credit_card"
            ],
            [
                "💸",
                "money_with_wings"
            ],
            [
                "📲",
                "calling"
            ],
            [
                "📧",
                "e-mail"
            ],
            [
                "📥",
                "inbox_tray"
            ],
            [
                "📤",
                "outbox_tray"
            ],
            [
                "✉",
                "email"
            ],
            [
                "📩",
                "envelope_with_arrow"
            ],
            [
                "📨",
                "incoming_envelope"
            ],
            [
                "📫",
                "mailbox"
            ],
            [
                "📪",
                "mailbox_closed"
            ],
            [
                "📮",
                "postbox"
            ],
            [
                "📦",
                "package"
            ],
            [
                "📝",
                "memo"
            ],
            [
                "📄",
                "page_facing_up"
            ],
            [
                "📃",
                "page_with_curl"
            ],
            [
                "📑",
                "bookmark_tabs"
            ],
            [
                "📊",
                "bar_chart"
            ],
            [
                "📈",
                "chart_with_upwards_trend"
            ],
            [
                "📉",
                "chart_with_downwards_trend"
            ],
            [
                "📜",
                "scroll"
            ],
            [
                "📋",
                "clipboard"
            ],
            [
                "📅",
                "date"
            ],
            [
                "📆",
                "calendar"
            ],
            [
                "📇",
                "card_index"
            ],
            [
                "📁",
                "file_folder"
            ],
            [
                "📂",
                "open_file_folder"
            ],
            [
                "✂",
                "scissors"
            ],
            [
                "📌",
                "pushpin"
            ],
            [
                "📎",
                "paperclip"
            ],
            [
                "✒",
                "black_nib"
            ],
            [
                "✏",
                "pencil2"
            ],
            [
                "📏",
                "straight_ruler"
            ],
            [
                "📐",
                "triangular_ruler"
            ],
            [
                "📕",
                "closed_book"
            ],
            [
                "📗",
                "green_book"
            ],
            [
                "📘",
                "blue_book"
            ],
            [
                "📙",
                "orange_book"
            ],
            [
                "📓",
                "notebook"
            ],
            [
                "📔",
                "notebook_with_decorative_cover"
            ],
            [
                "📒",
                "ledger"
            ],
            [
                "📚",
                "books"
            ],
            [
                "📖",
                "book"
            ],
            [
                "🔖",
                "bookmark"
            ],
            [
                "📛",
                "name_badge"
            ],
            [
                "📰",
                "newspaper"
            ],
            [
                "🎨",
                "art"
            ],
            [
                "🎬",
                "clapper"
            ],
            [
                "🎤",
                "microphone"
            ],
            [
                "🎧",
                "headphones"
            ],
            [
                "🎼",
                "musical_score"
            ],
            [
                "🎵",
                "musical_note"
            ],
            [
                "🎶",
                "notes"
            ],
            [
                "🎹",
                "musical_keyboard"
            ],
            [
                "🎻",
                "violin"
            ],
            [
                "🎺",
                "trumpet"
            ],
            [
                "🎷",
                "saxophone"
            ],
            [
                "🎸",
                "guitar"
            ],
            [
                "👾",
                "space_invader"
            ],
            [
                "🎮",
                "video_game"
            ],
            [
                "🃏",
                "black_joker"
            ],
            [
                "🎴",
                "flower_playing_cards"
            ],
            [
                "🀄",
                "mahjong"
            ],
            [
                "🎲",
                "game_die"
            ],
            [
                "🎯",
                "dart"
            ],
            [
                "🏈",
                "football"
            ],
            [
                "🏀",
                "basketball"
            ],
            [
                "⚽",
                "soccer"
            ],
            [
                "⚾",
                "baseball"
            ],
            [
                "🎾",
                "tennis"
            ],
            [
                "🎱",
                "8ball"
            ],
            [
                "🎳",
                "bowling"
            ],
            [
                "⛳",
                "golf"
            ],
            [
                "🏁",
                "checkered_flag"
            ],
            [
                "🏆",
                "trophy"
            ],
            [
                "🎿",
                "ski"
            ],
            [
                "🏂",
                "snowboarder"
            ],
            [
                "🏊",
                "swimmer"
            ],
            [
                "🏄",
                "surfer"
            ],
            [
                "🎣",
                "fishing_pole_and_fish"
            ],
            [
                "☕",
                "coffee"
            ],
            [
                "🍵",
                "tea"
            ],
            [
                "🍶",
                "sake"
            ],
            [
                "🍺",
                "beer"
            ],
            [
                "🍻",
                "beers"
            ],
            [
                "🍸",
                "cocktail"
            ],
            [
                "🍹",
                "tropical_drink"
            ],
            [
                "🍷",
                "wine_glass"
            ],
            [
                "🍴",
                "fork_and_knife"
            ],
            [
                "🍕",
                "pizza"
            ],
            [
                "🍔",
                "hamburger"
            ],
            [
                "🍟",
                "fries"
            ],
            [
                "🍗",
                "poultry_leg"
            ],
            [
                "🍖",
                "meat_on_bone"
            ],
            [
                "🍝",
                "spaghetti"
            ],
            [
                "🍛",
                "curry"
            ],
            [
                "🍤",
                "fried_shrimp"
            ],
            [
                "🍱",
                "bento"
            ],
            [
                "🍣",
                "sushi"
            ],
            [
                "🍥",
                "fish_cake"
            ],
            [
                "🍙",
                "rice_ball"
            ],
            [
                "🍘",
                "rice_cracker"
            ],
            [
                "🍚",
                "rice"
            ],
            [
                "🍜",
                "ramen"
            ],
            [
                "🍲",
                "stew"
            ],
            [
                "🍢",
                "oden"
            ],
            [
                "🍡",
                "dango"
            ],
            [
                "🍳",
                "egg"
            ],
            [
                "🍞",
                "bread"
            ],
            [
                "🍩",
                "doughnut"
            ],
            [
                "🍮",
                "custard"
            ],
            [
                "🍦",
                "icecream"
            ],
            [
                "🍨",
                "ice_cream"
            ],
            [
                "🍧",
                "shaved_ice"
            ],
            [
                "🎂",
                "birthday"
            ],
            [
                "🍰",
                "cake"
            ],
            [
                "🍪",
                "cookie"
            ],
            [
                "🍫",
                "chocolate_bar"
            ],
            [
                "🍬",
                "candy"
            ],
            [
                "🍭",
                "lollipop"
            ],
            [
                "🍯",
                "honey_pot"
            ],
            [
                "🍎",
                "apple"
            ],
            [
                "🍏",
                "green_apple"
            ],
            [
                "🍊",
                "tangerine"
            ],
            [
                "🍒",
                "cherries"
            ],
            [
                "🍇",
                "grapes"
            ],
            [
                "🍉",
                "watermelon"
            ],
            [
                "🍓",
                "strawberry"
            ],
            [
                "🍑",
                "peach"
            ],
            [
                "🍈",
                "melon"
            ],
            [
                "🍌",
                "banana"
            ],
            [
                "🍍",
                "pineapple"
            ],
            [
                "🍠",
                "sweet_potato"
            ],
            [
                "🍆",
                "eggplant"
            ],
            [
                "🍅",
                "tomato"
            ],
            [
                "🌽",
                "corn"
            ]
        ],
        "name": "Objects",
        "icon": ["🔔", "bell"]
    },
    {
        "emojis": [
            [
                "🏠",
                "house"
            ],
            [
                "🏡",
                "house_with_garden"
            ],
            [
                "🏫",
                "school"
            ],
            [
                "🏢",
                "office"
            ],
            [
                "🏣",
                "post_office"
            ],
            [
                "🏥",
                "hospital"
            ],
            [
                "🏦",
                "bank"
            ],
            [
                "🏪",
                "convenience_store"
            ],
            [
                "🏩",
                "love_hotel"
            ],
            [
                "🏨",
                "hotel"
            ],
            [
                "💒",
                "wedding"
            ],
            [
                "⛪",
                "church"
            ],
            [
                "🏬",
                "department_store"
            ],
            [
                "🌇",
                "city_sunrise"
            ],
            [
                "🌆",
                "city_sunset"
            ],
            [
                "🏯",
                "japanese_castle"
            ],
            [
                "🏰",
                "european_castle"
            ],
            [
                "⛺",
                "tent"
            ],
            [
                "🏭",
                "factory"
            ],
            [
                "🗼",
                "tokyo_tower"
            ],
            [
                "🗾",
                "japan"
            ],
            [
                "🗻",
                "mount_fuji"
            ],
            [
                "🌄",
                "sunrise_over_mountains"
            ],
            [
                "🌅",
                "sunrise"
            ],
            [
                "🌃",
                "night_with_stars"
            ],
            [
                "🗽",
                "statue_of_liberty"
            ],
            [
                "🌉",
                "bridge_at_night"
            ],
            [
                "🎠",
                "carousel_horse"
            ],
            [
                "🎡",
                "ferris_wheel"
            ],
            [
                "⛲",
                "fountain"
            ],
            [
                "🎢",
                "roller_coaster"
            ],
            [
                "🚢",
                "ship"
            ],
            [
                "⛵",
                "boat"
            ],
            [
                "🚤",
                "speedboat"
            ],
            [
                "⚓",
                "anchor"
            ],
            [
                "🚀",
                "rocket"
            ],
            [
                "✈",
                "airplane"
            ],
            [
                "💺",
                "seat"
            ],
            [
                "🚉",
                "station"
            ],
            [
                "🚄",
                "bullettrain_side"
            ],
            [
                "🚅",
                "bullettrain_front"
            ],
            [
                "🚇",
                "metro"
            ],
            [
                "🚃",
                "railway_car"
            ],
            [
                "🚌",
                "bus"
            ],
            [
                "🚙",
                "blue_car"
            ],
            [
                "🚗",
                "car"
            ],
            [
                "🚕",
                "taxi"
            ],
            [
                "🚚",
                "truck"
            ],
            [
                "🚨",
                "rotating_light"
            ],
            [
                "🚓",
                "police_car"
            ],
            [
                "🚒",
                "fire_engine"
            ],
            [
                "🚑",
                "ambulance"
            ],
            [
                "🚲",
                "bike"
            ],
            [
                "💈",
                "barber"
            ],
            [
                "🚏",
                "busstop"
            ],
            [
                "🎫",
                "ticket"
            ],
            [
                "🚥",
                "traffic_light"
            ],
            [
                "⚠",
                "warning"
            ],
            [
                "🚧",
                "construction"
            ],
            [
                "🔰",
                "beginner"
            ],
            [
                "⛽",
                "fuelpump"
            ],
            [
                "🏮",
                "izakaya_lantern"
            ],
            [
                "🎰",
                "slot_machine"
            ],
            [
                "♨",
                "hotsprings"
            ],
            [
                "🗿",
                "moyai"
            ],
            [
                "🎪",
                "circus_tent"
            ],
            [
                "🎭",
                "performing_arts"
            ],
            [
                "📍",
                "round_pushpin"
            ],
            [
                "🚩",
                "triangular_flag_on_post"
            ]
        ],
        "name": "Places",
        "icon": ["🚙", "blue_car"]
    },
    {
        "emojis": [
            [
                "🔟",
                "keycap_ten"
            ],
            [
                "🔢",
                "1234"
            ],
            [
                "🔣",
                "symbols"
            ],
            [
                "⬆",
                "arrow_up"
            ],
            [
                "⬇",
                "arrow_down"
            ],
            [
                "⬅",
                "arrow_left"
            ],
            [
                "➡",
                "arrow_right"
            ],
            [
                "🔠",
                "capital_abcd"
            ],
            [
                "🔡",
                "abcd"
            ],
            [
                "🔤",
                "abc"
            ],
            [
                "↗",
                "arrow_upper_right"
            ],
            [
                "↖",
                "arrow_upper_left"
            ],
            [
                "↘",
                "arrow_lower_right"
            ],
            [
                "↙",
                "arrow_lower_left"
            ],
            [
                "↔",
                "left_right_arrow"
            ],
            [
                "↕",
                "arrow_up_down"
            ],
            [
                "◀",
                "arrow_backward"
            ],
            [
                "▶",
                "arrow_forward"
            ],
            [
                "🔼",
                "arrow_up_small"
            ],
            [
                "🔽",
                "arrow_down_small"
            ],
            [
                "↩",
                "leftwards_arrow_with_hook"
            ],
            [
                "↪",
                "arrow_right_hook"
            ],
            [
                "ℹ",
                "information_source"
            ],
            [
                "⏪",
                "rewind"
            ],
            [
                "⏩",
                "fast_forward"
            ],
            [
                "⏫",
                "arrow_double_up"
            ],
            [
                "⏬",
                "arrow_double_down"
            ],
            [
                "⤵",
                "arrow_heading_down"
            ],
            [
                "⤴",
                "arrow_heading_up"
            ],
            [
                "🆗",
                "ok"
            ],
            [
                "🆕",
                "new"
            ],
            [
                "🆙",
                "up"
            ],
            [
                "🆒",
                "cool"
            ],
            [
                "🆓",
                "free"
            ],
            [
                "🆖",
                "ng"
            ],
            [
                "📶",
                "signal_strength"
            ],
            [
                "🎦",
                "cinema"
            ],
            [
                "🈁",
                "koko"
            ],
            [
                "🈯",
                "u6307"
            ],
            [
                "🈳",
                "u7a7a"
            ],
            [
                "🈵",
                "u6e80"
            ],
            [
                "🈴",
                "u5408"
            ],
            [
                "🈲",
                "u7981"
            ],
            [
                "🉐",
                "ideograph_advantage"
            ],
            [
                "🈹",
                "u5272"
            ],
            [
                "🈺",
                "u55b6"
            ],
            [
                "🈶",
                "u6709"
            ],
            [
                "🈚",
                "u7121"
            ],
            [
                "🚻",
                "restroom"
            ],
            [
                "🚹",
                "mens"
            ],
            [
                "🚺",
                "womens"
            ],
            [
                "🚼",
                "baby_symbol"
            ],
            [
                "🚾",
                "wc"
            ],
            [
                "🅿",
                "parking"
            ],
            [
                "♿",
                "wheelchair"
            ],
            [
                "🚭",
                "no_smoking"
            ],
            [
                "🈷",
                "u6708"
            ],
            [
                "🈸",
                "u7533"
            ],
            [
                "🈂",
                "sa"
            ],
            [
                "Ⓜ",
                "m"
            ],
            [
                "🉑",
                "accept"
            ],
            [
                "㊙",
                "secret"
            ],
            [
                "㊗",
                "congratulations"
            ],
            [
                "🆑",
                "cl"
            ],
            [
                "🆘",
                "sos"
            ],
            [
                "🆔",
                "id"
            ],
            [
                "🚫",
                "no_entry_sign"
            ],
            [
                "🔞",
                "underage"
            ],
            [
                "⛔",
                "no_entry"
            ],
            [
                "✳",
                "eight_spoked_asterisk"
            ],
            [
                "❇",
                "sparkle"
            ],
            [
                "❎",
                "negative_squared_cross_mark"
            ],
            [
                "✅",
                "white_check_mark"
            ],
            [
                "✴",
                "eight_pointed_black_star"
            ],
            [
                "💟",
                "heart_decoration"
            ],
            [
                "🆚",
                "vs"
            ],
            [
                "📳",
                "vibration_mode"
            ],
            [
                "📴",
                "mobile_phone_off"
            ],
            [
                "🅰",
                "a"
            ],
            [
                "🅱",
                "b"
            ],
            [
                "🆎",
                "ab"
            ],
            [
                "🅾",
                "o2"
            ],
            [
                "💠",
                "diamond_shape_with_a_dot_inside"
            ],
            [
                "♻",
                "recycle"
            ],
            [
                "♈",
                "aries"
            ],
            [
                "♉",
                "taurus"
            ],
            [
                "♊",
                "gemini"
            ],
            [
                "♋",
                "cancer"
            ],
            [
                "♌",
                "leo"
            ],
            [
                "♍",
                "virgo"
            ],
            [
                "♎",
                "libra"
            ],
            [
                "♏",
                "scorpius"
            ],
            [
                "♐",
                "sagittarius"
            ],
            [
                "♑",
                "capricorn"
            ],
            [
                "♒",
                "aquarius"
            ],
            [
                "♓",
                "pisces"
            ],
            [
                "⛎",
                "ophiuchus"
            ],
            [
                "🔯",
                "six_pointed_star"
            ],
            [
                "🏧",
                "atm"
            ],
            [
                "💹",
                "chart"
            ],
            [
                "💲",
                "heavy_dollar_sign"
            ],
            [
                "💱",
                "currency_exchange"
            ],
            [
                "❌",
                "x"
            ],
            [
                "‼",
                "bangbang"
            ],
            [
                "⁉",
                "interrobang"
            ],
            [
                "❗",
                "exclamation"
            ],
            [
                "❓",
                "question"
            ],
            [
                "❕",
                "grey_exclamation"
            ],
            [
                "❔",
                "grey_question"
            ],
            [
                "⭕",
                "o"
            ],
            [
                "🔝",
                "top"
            ],
            [
                "🔚",
                "end"
            ],
            [
                "🔙",
                "back"
            ],
            [
                "🔛",
                "on"
            ],
            [
                "🔜",
                "soon"
            ],
            [
                "🔃",
                "arrows_clockwise"
            ],
            [
                "🕛",
                "clock12"
            ],
            [
                "🕐",
                "clock1"
            ],
            [
                "🕑",
                "clock2"
            ],
            [
                "🕒",
                "clock3"
            ],
            [
                "🕓",
                "clock4"
            ],
            [
                "🕔",
                "clock5"
            ],
            [
                "🕕",
                "clock6"
            ],
            [
                "🕖",
                "clock7"
            ],
            [
                "🕗",
                "clock8"
            ],
            [
                "🕘",
                "clock9"
            ],
            [
                "🕙",
                "clock10"
            ],
            [
                "🕚",
                "clock11"
            ],
            [
                "✖",
                "heavy_multiplication_x"
            ],
            [
                "➕",
                "heavy_plus_sign"
            ],
            [
                "➖",
                "heavy_minus_sign"
            ],
            [
                "➗",
                "heavy_division_sign"
            ],
            [
                "♠",
                "spades"
            ],
            [
                "♥",
                "hearts"
            ],
            [
                "♣",
                "clubs"
            ],
            [
                "♦",
                "diamonds"
            ],
            [
                "💮",
                "white_flower"
            ],
            [
                "💯",
                "100"
            ],
            [
                "✔",
                "heavy_check_mark"
            ],
            [
                "☑",
                "ballot_box_with_check"
            ],
            [
                "🔘",
                "radio_button"
            ],
            [
                "🔗",
                "link"
            ],
            [
                "➰",
                "curly_loop"
            ],
            [
                "〰",
                "wavy_dash"
            ],
            [
                "〽",
                "part_alternation_mark"
            ],
            [
                "🔱",
                "trident"
            ],
            [
                "◼",
                "black_medium_square"
            ],
            [
                "◻",
                "white_medium_square"
            ],
            [
                "◾",
                "black_medium_small_square"
            ],
            [
                "◽",
                "white_medium_small_square"
            ],
            [
                "▪",
                "black_small_square"
            ],
            [
                "▫",
                "white_small_square"
            ],
            [
                "🔺",
                "small_red_triangle"
            ],
            [
                "🔲",
                "black_square_button"
            ],
            [
                "🔳",
                "white_square_button"
            ],
            [
                "⚫",
                "black_circle"
            ],
            [
                "⚪",
                "white_circle"
            ],
            [
                "🔴",
                "red_circle"
            ],
            [
                "🔵",
                "large_blue_circle"
            ],
            [
                "🔻",
                "small_red_triangle_down"
            ],
            [
                "⬜",
                "white_large_square"
            ],
            [
                "⬛",
                "black_large_square"
            ],
            [
                "🔶",
                "large_orange_diamond"
            ],
            [
                "🔷",
                "large_blue_diamond"
            ],
            [
                "🔸",
                "small_orange_diamond"
            ],
            [
                "🔹",
                "small_blue_diamond"
            ]
        ],
        "name": "Symbols",
        "icon": ["🔠", "capital_abcd"]
    }
];
//# sourceMappingURL=emojis.data.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emoji_picker_module__ = __webpack_require__(94);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__emoji_picker_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiEmptyCategoryPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmojiEmptyCategoryPipe = (function () {
    function EmojiEmptyCategoryPipe() {
    }
    EmojiEmptyCategoryPipe.prototype.transform = function (categories) {
        return categories.filter(function (category) { return category.emojis.length !== 0; });
    };
    return EmojiEmptyCategoryPipe;
}());
EmojiEmptyCategoryPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Pipe */])({
        name: 'notEmptyEmojiCategory'
    })
], EmojiEmptyCategoryPipe);

//# sourceMappingURL=emoji-empty-category.pipe.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emoji_empty_category_pipe__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PIPES; });

var PIPES = [
    __WEBPACK_IMPORTED_MODULE_0__emoji_empty_category_pipe__["a" /* EmojiEmptyCategoryPipe */]
];
//# sourceMappingURL=index.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.bundle.js.map