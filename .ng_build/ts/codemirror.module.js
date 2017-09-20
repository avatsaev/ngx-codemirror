import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeMirrorDirective } from './directives/codemirror.directive';
import 'codemirror/mode/htmlmixed/htmlmixed';
export class CodeMirrorModule {
}
CodeMirrorModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [CodeMirrorDirective],
                exports: [CodeMirrorDirective]
            },] },
];
/**
 * @nocollapse
 */
CodeMirrorModule.ctorParameters = () => [];
function CodeMirrorModule_tsickle_Closure_declarations() {
    /** @type {?} */
    CodeMirrorModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    CodeMirrorModule.ctorParameters;
}
//# sourceMappingURL=codemirror.module.js.map