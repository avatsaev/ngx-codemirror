import { Component, Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class ValueChangeFlashDirective {
    constructor() { }
}
ValueChangeFlashDirective.decorators = [
    { type: Directive, args: [{
                selector: '[valueChangeFlash]'
            },] },
];
/**
 * @nocollapse
 */
ValueChangeFlashDirective.ctorParameters = () => [];

class TestComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TestComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-test',
                template: `
    <p>
      --/test works!|--
    </p>
  `,
                styles: [`

  `]
            },] },
];
/**
 * @nocollapse
 */
TestComponent.ctorParameters = () => [];

class ChangeFlashModule {
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

/**
 * Generated bundle index. Do not edit.
 */

export { ChangeFlashModule, ValueChangeFlashDirective as ɵa, TestComponent as ɵb };
//# sourceMappingURL=ngx-change-flash.js.map
