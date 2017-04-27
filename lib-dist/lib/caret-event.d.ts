export declare class CaretEvent {
    caretOffset: number;
    caretRange: Range;
    textContent: string;
    constructor(data: any);
    clone(): CaretEvent;
    static generateNullEvent(): CaretEvent;
    static comparePropsOfObject(r1: any, r2: any): boolean;
    static compare(e1: CaretEvent, e2: CaretEvent): boolean;
    static generateCaretEvent(win: any, doc: any, element: HTMLElement & HTMLInputElement): CaretEvent;
}
