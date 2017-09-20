import { ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EditorFromTextArea, EditorConfiguration } from 'codemirror';
export declare class CodeMirrorDirective implements OnInit, OnChanges {
    private element;
    content: string;
    config: EditorConfiguration;
    onChange: EventEmitter<{
        editorInstance: any;
        changes: any;
    }>;
    editorRef: EditorFromTextArea;
    constructor(element: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    getContent(): string;
    setOption(key: string, value: any): void;
}
