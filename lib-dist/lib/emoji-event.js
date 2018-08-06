var EmojiEvent = /** @class */ (function () {
    function EmojiEvent(data) {
        Object.assign(this, data);
    }
    EmojiEvent.fromArray = function (emojiArray) {
        return new EmojiEvent({ char: emojiArray[0], label: emojiArray[1] });
    };
    return EmojiEvent;
}());
export { EmojiEvent };
//# sourceMappingURL=emoji-event.js.map