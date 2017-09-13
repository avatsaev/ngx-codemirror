import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueChangeFlashDirective } from './directives/value-change-flash.directive';
import { TestComponent } from './test/test.component';
export class ChangeFlashModule {
}
ChangeFlashModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [ValueChangeFlashDirective, TestComponent],
                exports: [ValueChangeFlashDirective, TestComponent]
            },] },
];
/**
 * @nocollapse
 */
ChangeFlashModule.ctorParameters = () => [];
function ChangeFlashModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ChangeFlashModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ChangeFlashModule.ctorParameters;
}
//# sourceMappingURL=change-flash.module.js.map