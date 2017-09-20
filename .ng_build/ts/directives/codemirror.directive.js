import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { fromTextArea } from 'codemirror/index';
export class CodeMirrorDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        this.config = {
            lineNumbers: true,
            mode: 'javascript'
        };
        this.onChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.editorRef = fromTextArea(this.element.nativeElement, this.config);
        this.editorRef.setValue(this.content);
        this.editorRef.on('change', (cmInstance, event) => this.onChange.emit({ editorInstance: cmInstance, changes: event }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.editorRef) {
            if (changes.content) {
                this.editorRef.setValue(this.content);
            }
            if (changes.config) {
                Object.keys(this.config).map(k => this.editorRef.setOption(k, this.config[k]));
            }
        }
    }
    /**
     * @return {?}
     */
    getContent() {
        return this.editorRef.getValue();
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setOption(key, value) {
        this.editorRef.setOption(key, value);
    }
}
CodeMirrorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[codemirror]'
            },] },
];
/**
 * @nocollapse
 */
CodeMirrorDirective.ctorParameters = () => [
    { type: ElementRef, },
];
CodeMirrorDirective.propDecorators = {
    'content': [{ type: Input },],
    'config': [{ type: Input },],
    'onChange': [{ type: Output },],
};
function CodeMirrorDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    CodeMirrorDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    CodeMirrorDirective.ctorParameters;
    /** @type {?} */
    CodeMirrorDirective.propDecorators;
    /** @type {?} */
    CodeMirrorDirective.prototype.content;
    /** @type {?} */
    CodeMirrorDirective.prototype.config;
    /** @type {?} */
    CodeMirrorDirective.prototype.onChange;
    /** @type {?} */
    CodeMirrorDirective.prototype.editorRef;
    /** @type {?} */
    CodeMirrorDirective.prototype.element;
}
//# sourceMappingURL=codemirror.directive.js.map